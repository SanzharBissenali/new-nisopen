"use client";

import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import { useSession } from "next-auth/react";
import { Save, Eye, Edit, Trash2, Plus } from "lucide-react";
import { getAvailableSubjects, isValidSubject } from "@/lib/subjects";
import { EditorToolbar } from "./editor-toolbar";

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  subject: string | null;
  grade: string | null;
  quarter: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export function PageEditor() {
  const { data: session } = useSession();
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [quarter, setQuarter] = useState("");
  const [published, setPublished] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Underline,
    ],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4 border border-border rounded-md",
      },
    },
  });

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    if (selectedPage && editor) {
      setTitle(selectedPage.title);
      setSlug(selectedPage.slug);
      setSubject(selectedPage.subject || "");
      setGrade(selectedPage.grade || "");
      setQuarter(selectedPage.quarter || "");
      setPublished(selectedPage.published);
      editor.commands.setContent(selectedPage.content || "");
    }
  }, [selectedPage, editor]);

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/pages");
      if (response.ok) {
        const data = await response.json();
        setPages(data);
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (isCreating || !selectedPage) {
      setSlug(generateSlug(newTitle));
    }
  };

  const savePage = async () => {
    if (!editor) return;

    setSaving(true);
    try {
      const content = editor.getHTML();
      const pageData = {
        title,
        slug,
        content,
        subject: subject || null,
        grade: grade || null,
        quarter: quarter || null,
        published,
      };

      const url = selectedPage ? `/api/pages/${selectedPage.id}` : "/api/pages";
      const method = selectedPage ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pageData),
      });

      if (response.ok) {
        const savedPage = await response.json();
        if (isCreating) {
          setPages([savedPage, ...pages]);
          setSelectedPage(savedPage);
          setIsCreating(false);
        } else {
          setPages(pages.map(p => p.id === savedPage.id ? savedPage : p));
          setSelectedPage(savedPage);
        }
        setIsEditing(false);
      } else {
        alert("Failed to save page");
      }
    } catch (error) {
      console.error("Error saving page:", error);
      alert("Failed to save page");
    } finally {
      setSaving(false);
    }
  };

  const deletePage = async (pageId: string) => {
    if (!confirm("Are you sure you want to delete this page?")) return;

    try {
      const response = await fetch(`/api/pages/${pageId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setPages(pages.filter(p => p.id !== pageId));
        if (selectedPage?.id === pageId) {
          setSelectedPage(null);
          setIsEditing(false);
        }
      }
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  const startCreating = () => {
    setSelectedPage(null);
    setIsCreating(true);
    setIsEditing(true);
    setTitle("");
    setSlug("");
    
    // Auto-set subject for subject-specific teachers
    const availableSubjects = getAvailableSubjects(session?.user?.subject, session?.user?.role);
    if (availableSubjects.length === 1) {
      setSubject(availableSubjects[0]);
    } else {
      setSubject("");
    }
    setGrade("");
    setQuarter("");
    setPublished(false);
    editor?.commands.setContent("");
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setIsCreating(false);
    if (selectedPage) {
      setTitle(selectedPage.title);
      setSlug(selectedPage.slug);
      setSubject(selectedPage.subject || "");
      setGrade(selectedPage.grade || "");
      setQuarter(selectedPage.quarter || "");
      setPublished(selectedPage.published);
      editor?.commands.setContent(selectedPage.content || "");
    } else {
      setTitle("");
      setSlug("");
      setSubject("");
      setGrade("");
      setQuarter("");
      setPublished(false);
      editor?.commands.setContent("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your Pages</h2>
            <button
              onClick={startCreating}
              className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              <span>New Page</span>
            </button>
          </div>
          
          {pages.length === 0 ? (
            <p className="text-muted-foreground text-sm">No pages created yet.</p>
          ) : (
            <div className="space-y-2">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className={`p-3 rounded-md cursor-pointer border transition-colors ${
                    selectedPage?.id === page.id
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-muted border-transparent"
                  }`}
                  onClick={() => {
                    setSelectedPage(page);
                    setIsEditing(false);
                    setIsCreating(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm">{page.title}</h3>
                    <div className="flex items-center space-x-1">
                      {page.published && (
                        <Eye className="h-3 w-3 text-green-500" />
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deletePage(page.id);
                        }}
                        className="p-1 hover:bg-red-100 rounded text-red-500"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {page.subject && <span>{page.subject}</span>}
                    {page.grade && <span className="ml-2">Grade {page.grade}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-2">
        {(selectedPage || isCreating) ? (
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  {isCreating ? "Create New Page" : "Edit Page"}
                </h2>
                <div className="flex items-center space-x-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={cancelEditing}
                        className="px-3 py-1 text-sm border border-border rounded-md hover:bg-muted"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={savePage}
                        disabled={saving || !title.trim()}
                        className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary/90 disabled:opacity-50"
                      >
                        <Save className="h-4 w-4" />
                        <span>{saving ? "Saving..." : "Save"}</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary/90"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-muted"
                    placeholder="Page title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-muted"
                    placeholder="page-url-slug"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-muted"
                  >
                    <option value="">Select a subject...</option>
                    {getAvailableSubjects(session?.user?.subject, session?.user?.role).map((subjectOption) => (
                      <option key={subjectOption} value={subjectOption}>
                        {subjectOption}
                      </option>
                    ))}
                  </select>
                  {session?.user?.subject && session.user.role !== "ADMIN" && (
                    <p className="text-xs text-muted-foreground mt-1">
                      You can only create pages for {session.user.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Grade</label>
                  <input
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-muted"
                    placeholder="11, 12, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quarter</label>
                  <input
                    type="text"
                    value={quarter}
                    onChange={(e) => setQuarter(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-muted"
                    placeholder="1, 2, 3, 4"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={published}
                      onChange={(e) => setPublished(e.target.checked)}
                      disabled={!isEditing}
                      className="rounded border-border focus:ring-primary"
                    />
                    <span className="text-sm font-medium">Published</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-medium">Content</h3>
                <p className="text-sm text-muted-foreground">
                  Use the editor below to create your content. You can paste file URLs from the File Upload tab.
                </p>
              </div>
              <div className={`${!isEditing ? "pointer-events-none opacity-60" : ""}`}>
                {isEditing && <EditorToolbar editor={editor} />}
                <EditorContent editor={editor} />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-card p-8 rounded-lg border text-center">
            <p className="text-muted-foreground">
              Select a page from the list or create a new one to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}