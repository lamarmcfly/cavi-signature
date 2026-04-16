export async function copySignatureToClipboard(
  html: string
): Promise<boolean> {
  try {
    const item = new ClipboardItem({
      "text/plain": new Blob([html], { type: "text/plain" }),
      "text/html": new Blob([html], { type: "text/html" }),
    });
    await navigator.clipboard.write([item]);
    return true;
  } catch {
    return fallbackCopy(html);
  }
}

function fallbackCopy(html: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = html;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  let success = false;
  try {
    success = document.execCommand("copy");
  } catch {
    success = false;
  }

  document.body.removeChild(textarea);
  return success;
}

export function downloadSignatureHtml(html: string, filename: string): void {
  const fullHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Email Signature</title></head>
<body style="background:#1a1a2e;display:flex;justify-content:center;padding:40px;">
${html}
</body></html>`;

  const blob = new Blob([fullHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
