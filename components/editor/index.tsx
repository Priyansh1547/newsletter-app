"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./menu-bar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "list-disc ml-6" } },
        orderedList: { HTMLAttributes: { class: "list-decimal ml-6" } },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
      Placeholder.configure({
        placeholder: "Start writing your mail here...",
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] focus:outline-none text-base text-gray-800 is-editor-content px-1 py-2",
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <div className="max-w-4xl mx-auto rounded-lg border border-gray-200 bg-white overflow-hidden">
      {/* Email Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-700">Send Mail</h2>
      </div>

      {/* Main Fields */}
      <div className="space-y-3 p-6">
        {/* To */}
        <div className="flex items-center gap-4">
          <label className="w-20 text-sm font-medium text-gray-600 text-right">
            To
          </label>
          <div className="flex-1">
            <Input
              type="email"
              placeholder="recipient@example.com"
              className="flex-1 bg-transparent border-none shadow-none p-0 focus-visible:ring-0 text-sm h-9"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex items-center gap-4">
          <label className="w-20 text-sm font-medium text-gray-600 text-right">
            Subject
          </label>
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Add a subject"
              className="flex-1 bg-transparent border-none shadow-none p-0 focus-visible:ring-0 text-sm h-9"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex items-start gap-4">
          <label className="w-20 pt-3 text-sm font-medium text-gray-600 text-right">
            Body
          </label>
          <div className="flex-1 overflow-hidden">
            <MenuBar editor={editor} />
            <div className="prose prose-sm max-w-none p-4">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 flex justify-end items-center border-t border-gray-200">
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="bg-black hover:bg-gray-800 text-white flex items-center gap-1"
          >
            <span>Send</span>
            <ArrowUp className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
