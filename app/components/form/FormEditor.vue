<script setup lang="ts">
  import type { EditorToolbarItem, EditorSuggestionMenuItem, EditorEmojiMenuItem } from "@nuxt/ui";
  import { Emoji, gitHubEmojis } from "@tiptap/extension-emoji";
  const content = defineModel<string>();
  const editorToolbarItems: EditorToolbarItem[][] = [
    [
      {
        icon: "i-lucide-heading",
        tooltip: { text: "Headings" },
        content: {
          align: "start",
        },
        items: [
          {
            kind: "heading",
            level: 1,
            icon: "i-lucide-heading-1",
            label: "Heading 1",
          },
          {
            kind: "heading",
            level: 2,
            icon: "i-lucide-heading-2",
            label: "Heading 2",
          },
          {
            kind: "heading",
            level: 3,
            icon: "i-lucide-heading-3",
            label: "Heading 3",
          },
          {
            kind: "heading",
            level: 4,
            icon: "i-lucide-heading-4",
            label: "Heading 4",
          },
          {
            kind: "heading",
            level: 5,
            icon: "i-lucide-heading-5",
            label: "Heading 5",
          },
          {
            kind: "heading",
            level: 6,
            icon: "i-lucide-heading-6",
            label: "Heading 6",
          },
        ],
      },
    ],
    [
      {
        kind: "mark",
        mark: "bold",
        icon: "i-lucide-bold",
        tooltip: { text: "Bold" },
      },
      {
        kind: "mark",
        mark: "italic",
        icon: "i-lucide-italic",
        tooltip: { text: "Italic" },
      },
      {
        kind: "mark",
        mark: "underline",
        icon: "i-lucide-underline",
        tooltip: { text: "Underline" },
      },
      {
        kind: "mark",
        mark: "strike",
        icon: "i-lucide-strikethrough",
        tooltip: { text: "Strikethrough" },
      },
      {
        kind: "mark",
        mark: "code",
        icon: "i-lucide-code",
        tooltip: { text: "Code" },
      },
    ],
  ];
  const editorSuggestionMenuItem: EditorSuggestionMenuItem[][] = [
    [
      {
        type: "label",
        label: "Text",
      },
      {
        kind: "paragraph",
        label: "Paragraph",
        icon: "i-lucide-type",
      },
      {
        kind: "heading",
        level: 1,
        label: "Heading 1",
        icon: "i-lucide-heading-1",
      },
      {
        kind: "heading",
        level: 2,
        label: "Heading 2",
        icon: "i-lucide-heading-2",
      },
      {
        kind: "heading",
        level: 3,
        label: "Heading 3",
        icon: "i-lucide-heading-3",
      },
    ],
    [
      {
        type: "label",
        label: "Lists",
      },
      {
        kind: "bulletList",
        label: "Bullet List",
        icon: "i-lucide-list",
      },
      {
        kind: "orderedList",
        label: "Numbered List",
        icon: "i-lucide-list-ordered",
      },
    ],
    [
      {
        type: "label",
        label: "Insert",
      },
      {
        kind: "blockquote",
        label: "Blockquote",
        icon: "i-lucide-text-quote",
      },
      {
        kind: "codeBlock",
        label: "Code Block",
        icon: "i-lucide-square-code",
      },
      {
        kind: "horizontalRule",
        label: "Divider",
        icon: "i-lucide-separator-horizontal",
      },
    ],
  ];
  const editorEmojiMenuItem: EditorEmojiMenuItem[] = gitHubEmojis.filter(
    (emoji) => !emoji.name.startsWith("regional_indicator_")
  );
  /* eslint-disable no-constant-condition */
  const appendToBody = false ? () => document.body : undefined;
  /* eslint-enable no-constant-condition */
</script>
<template>
  <UFormField label="Content" name="content">
    <UEditor
      v-slot="{ editor }"
      v-model="content"
      placeholder="Start writing..."
      :extensions="[Emoji]"
      content-type="markdown"
      class="border border-default rounded-md">
      <UEditorToolbar
        :editor="editor"
        :items="editorToolbarItems"
        layout="fixed"
        class="border-b border-default" />
      <UEditorDragHandle :editor="editor" />
      <UEditorSuggestionMenu
        :editor="editor"
        :items="editorSuggestionMenuItem"
        :append-to="appendToBody" />
      <UEditorEmojiMenu :editor="editor" :items="editorEmojiMenuItem" :append-to="appendToBody" />
    </UEditor>
  </UFormField>
</template>
