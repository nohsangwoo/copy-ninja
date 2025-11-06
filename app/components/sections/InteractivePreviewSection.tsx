"use client";

import { useState } from "react";

interface Email {
  id: number;
  from: string;
  subject: string;
  preview: string;
  time: string;
  tags: string[];
  unread: boolean;
}

const mockEmails: Email[] = [
  {
    id: 1,
    from: "William Smith",
    subject: "Meeting Tomorrow",
    preview: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
    time: "about 2 years ago",
    tags: ["meeting", "work", "important"],
    unread: true,
  },
  {
    id: 2,
    from: "Alice Smith",
    subject: "Re: Project Update",
    preview: "Thank you for the project update. It looks great! I've gone through the report, and the results are impressive. The team has done a fantastic job, and I believe we're on track for success.",
    time: "about 2 years ago",
    tags: ["work", "important"],
    unread: false,
  },
  {
    id: 3,
    from: "Bob Johnson",
    subject: "Weekend Plans",
    preview: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.",
    time: "over 2 years ago",
    tags: ["personal"],
    unread: false,
  },
  {
    id: 4,
    from: "Emily Davis",
    subject: "Re: Question about Budget",
    preview: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.",
    time: "over 2 years ago",
    tags: ["work", "budget"],
    unread: false,
  },
];

export default function InteractivePreviewSection() {
  const [selectedEmail, setSelectedEmail] = useState<Email>(mockEmails[0]);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Interactive Email UI Preview */}
        <div className="bg-card rounded-[1.25rem] shadow-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-[280px,1fr,1fr] h-[700px]">
            {/* Sidebar */}
            <div className="bg-background border-r border-border p-4 space-y-4">
              {/* User Dropdown */}
              <div className="flex items-center justify-between p-3 bg-card rounded-xl border border-border shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    M
                  </div>
                  <span className="text-sm font-medium">Alicia Koch</span>
                </div>
                <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1">
                <div className="flex items-center justify-between px-3 py-2 bg-primary text-primary-foreground rounded-xl cursor-pointer shadow-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <span className="text-sm font-medium">Inbox</span>
                  </div>
                  <span className="text-xs bg-primary-foreground/20 px-2 py-0.5 rounded-full">128</span>
                </div>

                {[
                  { icon: "📝", label: "Drafts", count: "9" },
                  { icon: "📤", label: "Sent", count: null },
                  { icon: "🗑️", label: "Junk", count: "23" },
                  { icon: "🗑️", label: "Trash", count: null },
                  { icon: "📦", label: "Archive", count: null },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:bg-secondary rounded-xl cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-sm">{item.label}</span>
                    </div>
                    {item.count && (
                      <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-border space-y-1">
                  {[
                    { icon: "👥", label: "Social", count: "972" },
                    { icon: "🔔", label: "Updates", count: "342" },
                    { icon: "💬", label: "Forums", count: "128" },
                    { icon: "🛒", label: "Shopping", count: "8" },
                    { icon: "🎁", label: "Promotions", count: "21" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:bg-secondary rounded-xl cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </nav>
            </div>

            {/* Email List */}
            <div className="border-r border-border flex flex-col">
              <div className="p-4 border-b border-border">
                <h2 className="text-xl font-bold mb-4">Inbox</h2>

                {/* Tabs */}
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`text-sm pb-2 border-b-2 transition-colors ${
                      activeTab === "all"
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All mail
                  </button>
                  <button
                    onClick={() => setActiveTab("unread")}
                    className={`text-sm pb-2 border-b-2 transition-colors ${
                      activeTab === "unread"
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Unread
                  </button>
                </div>

                {/* Search */}
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                  />
                </div>
              </div>

              {/* Email List Items */}
              <div className="flex-1 overflow-y-auto">
                {mockEmails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={`p-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer transition-colors ${
                      selectedEmail.id === email.id
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm">{email.from}</h3>
                        {email.unread && (
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        )}
                      </div>
                      <span className="text-xs text-muted">{email.time}</span>
                    </div>
                    <p className="text-sm font-medium mb-1">{email.subject}</p>
                    <p className="text-xs text-muted line-clamp-2">{email.preview}</p>
                    <div className="flex gap-2 mt-2">
                      {email.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            tag === "work"
                              ? "bg-accent/10 text-accent"
                              : tag === "important"
                              ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                              : "bg-gray-200 dark:bg-gray-700 text-muted"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Detail */}
            <div className="flex flex-col">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedEmail.from.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedEmail.from}</h3>
                      <p className="text-xs text-muted">{selectedEmail.subject}</p>
                      <p className="text-xs text-muted mt-1">
                        Reply-To: {selectedEmail.from.toLowerCase().replace(" ", "")}@example.com
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted">Oct 22, 2023, 9:00:00 AM</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {[
                    { icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
                    { icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
                    { icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" },
                  ].slice(0, 2).map((btn, index) => (
                    <button
                      key={index}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={btn.icon} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                  {selectedEmail.preview}
                  {"\n\n"}
                  Please come prepared with any questions or insights you may have. Looking forward to our meeting!
                  {"\n\n"}
                  Best regards, {selectedEmail.from.split(" ")[0]}
                </p>
              </div>

              {/* Reply Input */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <textarea
                  placeholder={`Reply ${selectedEmail.from.split(" ")[0]}...`}
                  className="w-full p-3 bg-background border border-gray-200 dark:border-gray-800 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent mb-3"
                  rows={3}
                />
                <div className="flex items-center justify-between">
                  <button className="text-xs text-muted hover:text-foreground">
                    Mute this thread
                  </button>
                  <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
