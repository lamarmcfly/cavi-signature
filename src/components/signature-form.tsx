"use client";

import type { SignatureData } from "@/lib/generate-signature-html";

interface SignatureFormProps {
  data: SignatureData;
  onChange: (data: SignatureData) => void;
}

const inputClass =
  "w-full rounded-xl border border-slate-600/60 bg-slate-800/60 px-4 py-3 text-white placeholder:text-slate-500 transition-colors duration-200 focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/40 focus:outline-none";

const fields: {
  key: Exclude<keyof SignatureData, "disclaimer">;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  {
    key: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "e.g. Jane Smith",
  },
  {
    key: "jobTitle",
    label: "Job Title",
    type: "text",
    placeholder: "e.g. Division Lead",
  },
  {
    key: "company",
    label: "Company",
    type: "text",
    placeholder: "e.g. Cavi Vault Agents",
  },
  {
    key: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1-555-000-0000",
  },
  {
    key: "email",
    label: "Email Address",
    type: "email",
    placeholder: "e.g. jane@cavivaultagents.io",
  },
];

export function SignatureForm({ data, onChange }: SignatureFormProps) {
  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <div key={field.key}>
          <label
            htmlFor={field.key}
            className="mb-1.5 block text-sm font-medium text-slate-300"
          >
            {field.label}
          </label>
          <input
            id={field.key}
            type={field.type}
            value={data[field.key]}
            placeholder={field.placeholder}
            onChange={(e) => onChange({ ...data, [field.key]: e.target.value })}
            className={inputClass}
          />
        </div>
      ))}
      <div>
        <label
          htmlFor="disclaimer"
          className="mb-1.5 block text-sm font-medium text-slate-300"
        >
          Disclaimer (optional)
        </label>
        <textarea
          id="disclaimer"
          rows={3}
          value={data.disclaimer}
          placeholder="Leave blank to hide. Use for legal or confidentiality notices."
          onChange={(e) => onChange({ ...data, disclaimer: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
    </div>
  );
}
