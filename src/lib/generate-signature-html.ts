export interface SignatureData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
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
    : '<span style="color:#8888a0">Your Name</span>';
  const title = data.jobTitle.trim()
    ? escapeHtml(data.jobTitle.trim())
    : '<span style="color:#8888a0">Your Title</span>';
  const phone = data.phone.trim()
    ? escapeHtml(data.phone.trim())
    : '<span style="color:#8888a0">+1-000-000-0000</span>';
  const email = data.email.trim()
    ? escapeHtml(data.email.trim())
    : "you@cavivaultagents.io";
  const mailto = data.email.trim()
    ? escapeHtml(data.email.trim())
    : "you@cavivaultagents.io";

  return `<table cellpadding="0" cellspacing="0" border="0" bgcolor="#2b2b3d" style="background-color:#2b2b3d;border-radius:8px;max-width:600px;width:600px;font-family:Arial,Helvetica,sans-serif;">
<tr><td bgcolor="#2b2b3d" style="background-color:#2b2b3d;padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
<td bgcolor="#2b2b3d" style="background-color:#2b2b3d;padding:28px 10px 28px 30px;vertical-align:top;width:350px;">
  <p style="font-size:28px;font-weight:700;color:#c8b8ff;line-height:1.2;margin:0 0 2px 0;padding:0;">${name}</p>
  <p style="font-size:14px;font-weight:400;color:#e0e0e0;margin:0 0 14px 0;padding:0;">${title}</p>
  <table cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#d4ff00" style="background-color:#d4ff00;width:50px;height:3px;font-size:0;line-height:0;overflow:hidden;padding:0;margin:0;"></td></tr></table>
  <p style="font-size:15px;font-weight:600;color:#c8b8ff;margin:16px 0 10px 0;padding:0;">Cavi Vault Agents</p>
  <p style="font-size:13px;color:#d0d0d8;margin:0 0 4px 0;padding:0;line-height:1.5;">${phone}</p>
  <p style="margin:0 0 4px 0;padding:0;"><a href="mailto:${mailto}" style="font-size:13px;color:#d0d0d8;text-decoration:none;line-height:1.5;">${email}</a></p>
  <p style="margin:0;padding:0;"><a href="https://www.cavivaultagents.io" style="font-size:13px;color:#d0d0d8;text-decoration:none;line-height:1.5;">www.cavivaultagents.io</a></p>
</td>
<td bgcolor="#2b2b3d" style="background-color:#2b2b3d;padding:20px 12px 20px 0;vertical-align:middle;text-align:center;width:230px;">
  <table cellpadding="0" cellspacing="0" border="0" align="center"><tr>
    <td style="vertical-align:middle;padding:0;">
      <a href="https://www.cavivaultagents.io" style="text-decoration:none;"><img src="${logoUrl}" alt="Cavi Vault Agents" width="200" height="200" style="display:block;border-radius:50%;border:0;outline:0;width:200px;height:200px;" /></a>
    </td>
    <td style="padding:0 0 0 10px;vertical-align:middle;">
      <table cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#d4ff00" style="background-color:#d4ff00;width:3px;height:160px;font-size:0;line-height:0;overflow:hidden;padding:0;"></td></tr></table>
    </td>
  </tr></table>
</td>
</tr></table>
</td></tr>
<tr><td bgcolor="#2b2b3d" style="background-color:#2b2b3d;padding:0 30px 22px 30px;border-top:1px solid #3d3d55;">
  <p style="font-size:13px;font-style:italic;color:#a8a8c0;padding-top:14px;text-align:center;letter-spacing:0.3px;margin:0;">Coordinated AI specialists working under your team&rsquo;s direction</p>
</td></tr>
</table>`;
}
