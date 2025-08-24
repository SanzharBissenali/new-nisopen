"use client";

import { useState, useEffect } from "react";
import { Users, FileText, Settings, Plus, Trash2, Edit } from "lucide-react";

interface User {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: string;
  _count: {
    pages: number;
    files: number;
  };
}

interface Page {
  id: string;
  title: string;
  slug: string;
  subject: string | null;
  grade: string | null;
  published: boolean;
  createdAt: string;
  author: {
    name: string | null;
    email: string;
  };
}

export function AdminContent() {
  const [activeTab, setActiveTab] = useState<"users" | "pages" | "settings">("users");
  const [users, setUsers] = useState<User[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersResponse, pagesResponse] = await Promise.all([
        fetch("/api/admin/users"),
        fetch("/api/admin/pages"),
      ]);

      if (usersResponse.ok && pagesResponse.ok) {
        const usersData = await usersResponse.json();
        const pagesData = await pagesResponse.json();
        setUsers(usersData);
        setPages(pagesData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user? This will also delete all their content.")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  const togglePagePublished = async (pageId: string, published: boolean) => {
    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });

      if (response.ok) {
        setPages(pages.map(page => 
          page.id === pageId ? { ...page, published: !published } : page
        ));
      } else {
        alert("Failed to update page");
      }
    } catch (error) {
      console.error("Error updating page:", error);
    }
  };

  const deletePage = async (pageId: string) => {
    if (!confirm("Are you sure you want to delete this page?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPages(pages.filter(page => page.id !== pageId));
      } else {
        alert("Failed to delete page");
      }
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage users, content, and system settings
        </p>
      </div>

      <div className="border-b border-border mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center space-x-2 whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "users"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Users ({users.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("pages")}
            className={`flex items-center space-x-2 whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "pages"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Pages ({pages.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-2 whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "settings"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
            }`}
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {activeTab === "users" && (
        <div className="bg-card rounded-lg border">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold">User Management</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Manage user accounts and permissions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Content
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {user.name || "No name"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === "ADMIN" 
                          ? "bg-red-100 text-red-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {user._count.pages} pages, {user._count.files} files
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete user"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "pages" && (
        <div className="bg-card rounded-lg border">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold">Content Management</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Manage all pages and their publication status
            </p>
          </div>

          <div className="space-y-4 p-6">
            {pages.map((page) => (
              <div key={page.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{page.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    {page.subject && <span>Subject: {page.subject}</span>}
                    {page.grade && <span className="ml-4">Grade: {page.grade}</span>}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    By {page.author.name || page.author.email} • {new Date(page.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => togglePagePublished(page.id, page.published)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      page.published
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {page.published ? "Published" : "Draft"}
                  </button>
                  <a
                    href={`/page/${page.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded"
                    title="View page"
                  >
                    <Edit className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => deletePage(page.id)}
                    className="p-2 hover:bg-muted rounded text-red-500"
                    title="Delete page"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">System Settings</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{users.length}</div>
                  <div className="text-sm text-muted-foreground">Total Users</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{pages.length}</div>
                  <div className="text-sm text-muted-foreground">Total Pages</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {pages.filter(p => p.published).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Published Pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}