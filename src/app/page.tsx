"use client";

import { useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { SignatureForm } from "@/components/signature-form";
import { SignaturePreview } from "@/components/signature-preview";
import { SignatureInstructions } from "@/components/signature-instructions";
import { generateSignatureHtml } from "@/lib/generate-signature-html";
import type { SignatureData } from "@/lib/generate-signature-html";
import {
  copySignatureToClipboard,
  downloadSignatureHtml,
} from "@/lib/copy-signature";

export default function Home() {
  const [data, setData] = useState<SignatureData>({
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const html = generateSignatureHtml(data);
    const ok = await copySignatureToClipboard(html);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const html = generateSignatureHtml(data);
    const name = data.fullName.trim()
      ? data.fullName.trim().replace(/\s+/g, "-").toLowerCase()
      : "cavi";
    downloadSignatureHtml(html, `${name}-signature.html`);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Email Signature Generator
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Fill in your details, preview your signature, and copy it into Private
          Email.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Form */}
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 shadow-lg shadow-black/20">
          <h2 className="mb-5 text-lg font-semibold text-white">
            Your Details
          </h2>
          <SignatureForm data={data} onChange={setData} />
        </div>

        {/* Preview */}
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 shadow-lg shadow-black/20 lg:sticky lg:top-8 lg:self-start">
          <SignaturePreview data={data} />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm shadow-blue-500/30 transition-all hover:from-blue-500 hover:to-indigo-500 hover:shadow-md active:translate-y-px sm:w-auto w-full"
        >
          {copied ? (
            <>
              <Check className="h-5 w-5" />
              Copied! Now paste into Source mode
            </>
          ) : (
            <>
              <Copy className="h-5 w-5" />
              Copy Signature Code
            </>
          )}
        </button>
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-base font-medium text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white sm:w-auto w-full"
        >
          <Download className="h-5 w-5" />
          Download HTML
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 rounded-2xl border border-slate-700/60 bg-slate-900/55 p-6 shadow-lg shadow-black/20">
        <SignatureInstructions />
      </div>
    </div>
  );
}
