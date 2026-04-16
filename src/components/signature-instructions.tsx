"use client";

const steps = [
  {
    text: 'Click "Copy Signature Code" above.',
  },
  {
    text: "Log in to privateemail.com and go to Settings (gear icon, top-right).",
  },
  {
    text: 'Click "Identities" in the left sidebar, then click your email address to edit it.',
  },
  {
    text: 'Scroll down to the Signature editor. Click the "Source" button (or "<>" icon) in the editor toolbar to switch to HTML/code mode.',
  },
  {
    text: "Select everything in the editor (Ctrl+A) and delete it. Then paste (Ctrl+V). You will see HTML code — that is correct.",
  },
  {
    text: 'Click "Source" (or "<>") again to switch back to the visual view. You should now see your formatted signature with the dark background, logo, and colors.',
  },
  {
    text: 'Click "Save". Send yourself a test email to confirm it looks right.',
  },
];

export function SignatureInstructions() {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-white">
        How to Set Up in Private Email
      </h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-blue-300">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-slate-300">
              {step.text}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
        <p className="text-sm text-amber-200/80">
          <strong>Important:</strong> You must paste into{" "}
          <span className="font-medium text-amber-100">Source / code mode</span>
          , not the regular editor view. Pasting directly into the visual editor
          will lose the styling. The Source button is usually in the editor
          toolbar — it may say{" "}
          <span className="font-medium text-amber-100">&quot;Source&quot;</span>,{" "}
          <span className="font-medium text-amber-100">&quot;&lt;/&gt;&quot;</span>,
          or{" "}
          <span className="font-medium text-amber-100">&quot;HTML&quot;</span>.
        </p>
      </div>
    </div>
  );
}
