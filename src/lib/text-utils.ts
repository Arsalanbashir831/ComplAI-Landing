// Helper function to extract plain text from markdown content
export const parseBodyContentToText = (markdownString: string): string => {
  if (!markdownString) return '';

  // Simple approach: remove common markdown syntax
  const text = markdownString
    // Remove headers
    .replace(/#{1,6}\s/g, '')
    // Remove bold/italic - simple approach
    .replace(/\*\*/g, '')
    .replace(/__/g, '')
    .replace(/\*/g, '')
    .replace(/_/g, '')
    // Remove strikethrough
    .replace(/~~/g, '')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`/g, '')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    // Remove blockquotes
    .replace(/^>\s*/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Clean up whitespace
    .replace(/\r\n/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return text;
};
