export interface SignatureData {
  fullName: string;
  jobTitle: string;
  company: string;
  phone: string;
  email: string;
  disclaimer: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Logo URL for email signatures.
 * Uses the Vercel deployment URL where the image is hosted.
 * Once www.cavivaultagents.io points to Vercel, update to:
 *   https://www.cavivaultagents.io/Cavifinal.png
 */
export const LOGO_URL_REMOTE =
  "https://cavi-collective-site.vercel.app/Cavifinal.png";
/** Local logo path for dev preview. */
export const LOGO_URL_LOCAL = "/Cavifinal.png";

export function generateSignatureHtml(
  data: SignatureData,
  options?: { logoUrl?: string }
): string {
  const logoUrl = options?.logoUrl ?? LOGO_URL_REMOTE;

  const name = data.fullName.trim()
    ? escapeHtml(data.fullName.trim())
    : '<span style="color:#9ca3af">Your Name</span>';
  const title = data.jobTitle.trim()
    ? escapeHtml(data.jobTitle.trim())
    : '<span style="color:#9ca3af">Your Title</span>';
  const company = data.company.trim()
    ? escapeHtml(data.company.trim())
    : "Cavi Vault Agents";
  const phone = data.phone.trim()
    ? escapeHtml(data.phone.trim())
    : '<span style="color:#9ca3af">+1 (xxx) xxx-xxxx</span>';
  const email = data.email.trim()
    ? escapeHtml(data.email.trim())
    : "you@cavivaultagents.io";
  const mailto = data.email.trim()
    ? escapeHtml(data.email.trim())
    : "you@cavivaultagents.io";
  const disclaimer = data.disclaimer.trim()
    ? escapeHtml(data.disclaimer.trim())
    : "";

  const disclaimerRow = disclaimer
    ? `<tr><td style="padding:10px 0 0 0;"><p style="margin:0;padding:0;font-size:11px;font-style:italic;color:#9ca3af;line-height:1.5;">${disclaimer}</p></td></tr>`
    : "";

  return `<table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;max-width:560px;width:560px;font-family:Arial,Helvetica,sans-serif;">
<tr><td bgcolor="#ffffff" style="background-color:#ffffff;padding:20px 24px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
<td bgcolor="#ffffff" style="background-color:#ffffff;vertical-align:middle;width:110px;padding:0 16px 0 0;">
  <a href="https://www.cavivaultagents.io" style="text-decoration:none;"><img src="${logoUrl}" alt="Cavi Vault Agents" width="100" height="100" style="display:block;border-radius:10px;border:0;outline:0;width:100px;height:100px;" /></a>
</td>
<td bgcolor="#ffffff" style="background-color:#ffffff;vertical-align:middle;width:2px;padding:0;">
  <table cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#7c3aed" style="background-color:#7c3aed;width:2px;height:110px;font-size:0;line-height:0;overflow:hidden;padding:0;">&nbsp;</td></tr></table>
</td>
<td bgcolor="#ffffff" style="background-color:#ffffff;padding:0 0 0 18px;vertical-align:middle;">
  <p style="font-size:20px;font-weight:700;color:#0b0b1a;line-height:1.2;margin:0 0 4px 0;padding:0;">${name}</p>
  <p style="font-size:13px;font-weight:500;color:#7c3aed;margin:0 0 12px 0;padding:0;line-height:1.4;">${title}&nbsp;&nbsp;|&nbsp;&nbsp;${company}</p>
  <p style="margin:0 0 3px 0;padding:0;"><a href="https://www.cavivaultagents.io" style="font-size:13px;font-weight:600;color:#7c3aed;text-decoration:none;line-height:1.5;">cavivaultagents.io</a></p>
  <p style="margin:0 0 3px 0;padding:0;"><a href="mailto:${mailto}" style="font-size:13px;color:#1a1a2e;text-decoration:none;line-height:1.5;">${email}</a></p>
  <p style="font-size:13px;color:#1a1a2e;margin:0;padding:0;line-height:1.5;">${phone}</p>
</td>
</tr></table>
</td></tr>
<tr><td bgcolor="#ffffff" style="background-color:#ffffff;padding:0 24px 18px 24px;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr><td style="padding:4px 0 0 0;"><p style="font-size:12px;font-style:italic;color:#6b7280;margin:0;padding:0;line-height:1.5;">Coordinated AI teams that give humans superpowers.</p></td></tr>
    ${disclaimerRow}
  </table>
</td></tr>
</table>`;
}
