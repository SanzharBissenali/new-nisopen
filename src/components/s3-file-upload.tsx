"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Copy, Check, Download, Trash2, Upload, X, Edit2, Save } from "lucide-react";

interface UploadedFile {
  id: string;
  filename: string;
  originalName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  createdAt: string;
}

interface FileUploadData {
  subject: string;
  grade: string;
  quarter: string;
  week: string;
  type: 'presentations' | 'homework' | 'readings';
}

export function S3FileUpload() {
  const { data: session } = useSession();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [editingFile, setEditingFile] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  // Form state
  const [uploadData, setUploadData] = useState<FileUploadData>({
    subject: '',
    grade: '',
    quarter: '',
    week: '',
    type: 'presentations'
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/files?limit=5");
      if (response.ok) {
        const data = await response.json();
        setFiles(data);
      }
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const deleteFile = async (fileId: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return;

    try {
      const response = await fetch(`/api/s3/delete?fileId=${fileId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setFiles(files.filter(file => file.id !== fileId));
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const startEditingName = (fileId: string, currentName: string) => {
    setEditingFile(fileId);
    setEditingName(currentName);
  };

  const cancelEditingName = () => {
    setEditingFile(null);
    setEditingName("");
  };

  const saveFileName = async (fileId: string) => {
    if (!editingName.trim()) return;

    try {
      const response = await fetch(`/api/files/${fileId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalName: editingName.trim() }),
      });

      if (response.ok) {
        setFiles(files.map(file => 
          file.id === fileId 
            ? { ...file, originalName: editingName.trim() }
            : file
        ));
        setEditingFile(null);
        setEditingName("");
      } else {
        alert("Failed to update file name");
      }
    } catch (error) {
      console.error("Error updating file name:", error);
      alert("Failed to update file name");
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileTypeLabel = (mimeType: string) => {
    const typeMap: { [key: string]: string } = {
      'application/pdf': 'PDF Document',
      'application/msword': 'Word Document',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
      'application/vnd.ms-powerpoint': 'PowerPoint Presentation',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PowerPoint Presentation',
      'text/plain': 'Text File',
      'image/png': 'PNG Image',
      'image/jpeg': 'JPEG Image',
      'image/gif': 'GIF Image',
    };
    return typeMap[mimeType] || mimeType;
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const isFormValid = () => {
    return uploadData.subject && uploadData.grade && uploadData.quarter && uploadData.week && selectedFiles.length > 0;
  };

  const uploadFiles = async () => {
    if (!isFormValid()) return;

    setUploading(true);
    try {
      for (const file of selectedFiles) {
        // Get presigned URL
        const response = await fetch('/api/s3/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
            ...uploadData,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.details && errorData.details.includes('AWS environment variables')) {
            throw new Error('AWS S3 not configured. Please set up AWS credentials in .env.local file. Check AWS_SETUP.md for instructions.');
          }
          throw new Error(errorData.error || 'Failed to get upload URL');
        }

        const { uploadUrl, publicUrl } = await response.json();

        // Upload file to S3
        console.log('Uploading to S3 URL:', uploadUrl);
        console.log('File type:', file.type);
        console.log('File size:', file.size);

        const uploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: {
            'Content-Type': file.type,
          },
        });

        console.log('S3 upload response status:', uploadResponse.status);
        console.log('S3 upload response headers:', Object.fromEntries(uploadResponse.headers.entries()));

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error('S3 upload error:', errorText);
          throw new Error(`S3 upload failed (${uploadResponse.status}): ${errorText || uploadResponse.statusText}`);
        }
      }

      // Clear form and refresh files
      setSelectedFiles([]);
      setUploadData({
        subject: '',
        grade: '',
        quarter: '',
        week: '',
        type: 'presentations'
      });
      fetchFiles();
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload files');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Upload Files to AWS S3</h2>
        <p className="text-muted-foreground mb-4">
          Upload educational materials with organized folder structure: subject/grade/quarter/week/type
        </p>

        {/* Organization Form */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Subject *</label>
            <select
              value={uploadData.subject}
              onChange={(e) => setUploadData(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Subject</option>
              <option value="mathematics">Mathematics</option>
              <option value="chemistry">Chemistry</option>
              <option value="physics">Physics</option>
              <option value="biology">Biology</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Grade *</label>
            <select
              value={uploadData.grade}
              onChange={(e) => setUploadData(prev => ({ ...prev, grade: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Grade</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Quarter *</label>
            <select
              value={uploadData.quarter}
              onChange={(e) => setUploadData(prev => ({ ...prev, quarter: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Quarter</option>
              <option value="1">Quarter 1</option>
              <option value="2">Quarter 2</option>
              <option value="3">Quarter 3</option>
              <option value="4">Quarter 4</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Week *</label>
            <select
              value={uploadData.week}
              onChange={(e) => setUploadData(prev => ({ ...prev, week: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Week</option>
              <option value="1">Week 1</option>
              <option value="2">Week 2</option>
              <option value="3">Week 3</option>
              <option value="4">Week 4</option>
              <option value="5">Week 5</option>
              <option value="6">Week 6</option>
              <option value="7">Week 7</option>
              <option value="8">Week 8</option>
              <option value="9">Week 9</option>
              <option value="10">Week 10</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Material Type *</label>
            <select
              value={uploadData.type}
              onChange={(e) => setUploadData(prev => ({ ...prev, type: e.target.value as 'presentations' | 'homework' | 'readings' }))}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="presentations">Presentations</option>
              <option value="homework">Homework</option>
              <option value="readings">Readings</option>
            </select>
          </div>
        </div>

        {/* File Drop Zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive 
              ? 'border-primary bg-primary/10' 
              : 'border-border hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg font-medium mb-2">Choose files or drag and drop</p>
          <p className="text-sm text-muted-foreground mb-4">PDF, Word, PowerPoint, Images (up to 16MB each)</p>
          
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.gif"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 cursor-pointer transition-colors"
          >
            Select Files
          </label>
        </div>

        {/* Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium mb-2">Selected Files:</h3>
            <div className="space-y-2">
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-muted p-3 rounded-md">
                  <span className="text-sm">{file.name} ({formatFileSize(file.size)})</span>
                  <button
                    onClick={() => removeSelectedFile(index)}
                    className="p-1 hover:bg-background rounded text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Button */}
        <div className="mt-6">
          <button
            onClick={uploadFiles}
            disabled={!isFormValid() || uploading}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {uploading ? 'Uploading...' : 'Upload Files'}
          </button>
        </div>
      </div>

      {/* File List */}
      <div className="bg-card p-6 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Recent Files</h2>
          <span className="text-sm text-muted-foreground">Last 5 uploads</span>
        </div>
        {files.length === 0 ? (
          <p className="text-muted-foreground">No files uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {files.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  {editingFile === file.id ? (
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="flex-1 px-2 py-1 text-sm border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') saveFileName(file.id);
                          if (e.key === 'Escape') cancelEditingName();
                        }}
                        autoFocus
                      />
                      <button
                        onClick={() => saveFileName(file.id)}
                        className="p-1 hover:bg-muted rounded text-green-600"
                        title="Save name"
                      >
                        <Save className="h-4 w-4" />
                      </button>
                      <button
                        onClick={cancelEditingName}
                        className="p-1 hover:bg-muted rounded text-gray-500"
                        title="Cancel"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-foreground">{file.originalName}</h3>
                      <button
                        onClick={() => startEditingName(file.id, file.originalName)}
                        className="p-1 hover:bg-muted rounded text-gray-500"
                        title="Edit name"
                      >
                        <Edit2 className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground mt-1">
                    {formatFileSize(file.fileSize)} • {getFileTypeLabel(file.mimeType)} • Uploaded {new Date(file.createdAt).toLocaleDateString()}
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded">{file.fileUrl}</code>
                    <button
                      onClick={() => copyToClipboard(file.fileUrl)}
                      className="p-1 hover:bg-muted rounded"
                      title="Copy URL"
                    >
                      {copiedUrl === file.fileUrl ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded"
                    title="Download file"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => deleteFile(file.id)}
                    className="p-2 hover:bg-muted rounded text-red-500"
                    title="Delete file"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}