"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { S3FileUpload } from "./s3-file-upload";
import { PageEditor } from "./page-editor";

export function DashboardContent() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"files" | "pages">("files");

  if (!session) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome, {session.user.name || session.user.email}
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your files and create educational content
        </p>
      </div>

      <div className="border-b border-border mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("files")}
            className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "files"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
            }`}
          >
            File Upload & Management
          </button>
          <button
            onClick={() => setActiveTab("pages")}
            className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "pages"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
            }`}
          >
            Create & Edit Pages
          </button>
        </nav>
      </div>

      {activeTab === "files" ? <S3FileUpload /> : <PageEditor />}
    </div>
  );
}