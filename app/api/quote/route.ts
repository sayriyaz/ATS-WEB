import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ATS_EMAIL = "info@alwahaatechnical.com";
const FROM_NOTIFY = "Alwahaa Website <noreply@alwahaatechnical.com>";
const FROM_REPLY = "Alwahaa Technical Services <noreply@alwahaatechnical.com>";
const WHATSAPP = "https://wa.me/971525652771";

function notificationHtml(name: string, phone: string, email: string, location: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Quote Request</title></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#0a0e1a;border-radius:16px 16px 0 0;padding:28px 36px;text-align:center;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;color:#00aaff;text-transform:uppercase;margin-bottom:6px;">Alwahaa Technical Services</div>
          <div style="font-size:22px;font-weight:700;color:#ffffff;">🏊 New Quote Request</div>
        </td></tr>

        <!-- Alert banner -->
        <tr><td style="background:#00aaff;padding:10px 36px;text-align:center;">
          <span style="font-size:13px;font-weight:600;color:#ffffff;letter-spacing:0.04em;">ACTION REQUIRED — New lead from your website</span>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px 36px;">

          <!-- Client details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td colspan="2" style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:#6e6e73;text-transform:uppercase;padding-bottom:12px;border-bottom:1px solid #f0f0f0;">Client Details</td></tr>
            ${row("👤 Full Name", name)}
            ${row("📞 Phone", `<a href="tel:${phone}" style="color:#00aaff;text-decoration:none;">${phone}</a>`)}
            ${row("✉️ Email", `<a href="mailto:${email}" style="color:#00aaff;text-decoration:none;">${email}</a>`)}
            ${row("📍 Location", location)}
          </table>

          <!-- Project details -->
          <div style="background:#f8fafc;border-left:3px solid #00aaff;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:#6e6e73;text-transform:uppercase;margin-bottom:8px;">💬 Project Details</div>
            <div style="font-size:15px;color:#1d1d1f;line-height:1.6;">${message.replace(/\n/g, "<br>")}</div>
          </div>

          <!-- CTA buttons -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:8px;">
                <a href="${WHATSAPP}?text=Hi%20${encodeURIComponent(name)}%2C%20I%20saw%20your%20quote%20request%20on%20our%20website.%20How%20can%20I%20help%3F" style="display:block;background:#25D366;color:#ffffff;text-align:center;padding:14px 20px;border-radius:50px;font-size:14px;font-weight:700;text-decoration:none;">
                  💬 Reply on WhatsApp
                </a>
              </td>
              <td style="padding-left:8px;">
                <a href="mailto:${email}?subject=Re: Your Pool Quote Request — Alwahaa Technical Services" style="display:block;background:#0a0e1a;color:#ffffff;text-align:center;padding:14px 20px;border-radius:50px;font-size:14px;font-weight:700;text-decoration:none;">
                  ✉️ Reply by Email
                </a>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;border-top:1px solid #e8e8ed;">
          <div style="font-size:12px;color:#6e6e73;">This lead was submitted via <strong>alwahaatechnical.com/quote</strong></div>
          <div style="font-size:11px;color:#a0a0a8;margin-top:4px;">Alwahaa Technical Services LLC · Port Saeed, Deira, Dubai · +971 4 255 2895</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0 0;font-size:12px;color:#6e6e73;width:130px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0 0;font-size:15px;color:#1d1d1f;font-weight:500;vertical-align:top;">${value}</td>
  </tr>`;
}

function autoReplyHtml(firstName: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>We received your request</title></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#0a0e1a;border-radius:16px 16px 0 0;padding:36px 36px 28px;text-align:center;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;color:#00aaff;text-transform:uppercase;margin-bottom:10px;">Alwahaa Technical Services</div>
          <div style="font-size:26px;font-weight:700;color:#ffffff;margin-bottom:6px;">We've Got Your Request! 🎉</div>
          <div style="font-size:14px;color:#a0b0c0;">Dubai's Leading Swimming Pool Contractors</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 36px 28px;">
          <p style="font-size:16px;color:#1d1d1f;margin:0 0 16px;">Hi ${firstName},</p>
          <p style="font-size:15px;color:#424245;line-height:1.7;margin:0 0 20px;">
            Thank you for reaching out to <strong>Alwahaa Technical Services</strong>. We've received your quote request and our team will be in touch with you shortly.
          </p>

          <!-- Timeline card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;margin-bottom:28px;">
            <tr><td style="padding:20px 24px;">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:#6e6e73;text-transform:uppercase;margin-bottom:14px;">What Happens Next</div>
              ${step("1", "Our team reviews your project details", "Within minutes")}
              ${step("2", "We call or WhatsApp you to understand your vision", "Same day")}
              ${step("3", "Free site visit and detailed quote", "Within 24–48 hours")}
            </td></tr>
          </table>

          <p style="font-size:14px;color:#424245;line-height:1.6;margin:0 0 24px;">
            Need a faster response? Message us directly on WhatsApp — we're available Monday to Saturday, 8AM to 6:30PM UAE time.
          </p>

          <!-- WhatsApp CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
            <tr><td align="center">
              <a href="${WHATSAPP}?text=Hi%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website." style="display:inline-block;background:#25D366;color:#ffffff;padding:15px 36px;border-radius:50px;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:0.02em;">
                💬 Chat on WhatsApp
              </a>
            </td></tr>
          </table>
        </td></tr>

        <!-- Services strip -->
        <tr><td style="background:#f8fafc;padding:20px 36px;border-top:1px solid #e8e8ed;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:#6e6e73;text-transform:uppercase;text-align:center;margin-bottom:12px;">What We Build</div>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="text-align:center;padding:4px;font-size:12px;color:#424245;">🏊 Infinity Pools</td>
              <td style="text-align:center;padding:4px;font-size:12px;color:#424245;">🏢 Rooftop Pools</td>
              <td style="text-align:center;padding:4px;font-size:12px;color:#424245;">🌊 Water Features</td>
            </tr>
            <tr>
              <td style="text-align:center;padding:4px;font-size:12px;color:#424245;">🛁 Jacuzzis & Spas</td>
              <td style="text-align:center;padding:4px;font-size:12px;color:#424245;">🌿 Landscaping</td>
              <td style="text-align:center;padding:4px;font-size:12px;color:#424245;">🔧 Renovation</td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#0a0e1a;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
          <div style="font-size:12px;color:#a0b0c0;margin-bottom:6px;">Alwahaa Technical Services LLC · Port Saeed, Deira, Dubai</div>
          <div style="font-size:12px;color:#a0b0c0;">
            <a href="tel:+97142552895" style="color:#00aaff;text-decoration:none;">+971 4 255 2895</a>
            &nbsp;·&nbsp;
            <a href="mailto:info@alwahaatechnical.com" style="color:#00aaff;text-decoration:none;">info@alwahaatechnical.com</a>
          </div>
          <div style="font-size:11px;color:#4a5a6a;margin-top:8px;">© 2025 Alwahaa Technical Services LLC. All rights reserved.</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function step(num: string, text: string, timing: string) {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
    <tr>
      <td style="width:28px;vertical-align:top;">
        <div style="background:#00aaff;color:#ffffff;font-size:11px;font-weight:700;width:22px;height:22px;border-radius:50%;text-align:center;line-height:22px;">${num}</div>
      </td>
      <td style="padding-left:10px;vertical-align:top;">
        <div style="font-size:14px;color:#1d1d1f;font-weight:500;">${text}</div>
        <div style="font-size:12px;color:#6e6e73;margin-top:2px;">${timing}</div>
      </td>
    </tr>
  </table>`;
}

export async function POST(req: Request) {
  try {
    const { name, phone, email, location, message } = await req.json();

    if (!name || !phone || !email || !location || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const firstName = name.split(" ")[0] || name;

    const [notify, autoReply] = await Promise.all([
      resend.emails.send({
        from: FROM_NOTIFY,
        to: [ATS_EMAIL],
        replyTo: email,
        subject: `🏊 New Quote Request — ${name} from ${location}`,
        html: notificationHtml(name, phone, email, location, message),
      }),
      resend.emails.send({
        from: FROM_REPLY,
        to: [email],
        subject: `We've received your request — Alwahaa Technical Services`,
        html: autoReplyHtml(firstName),
      }),
    ]);

    if (notify.error || autoReply.error) {
      console.error("Resend error:", notify.error || autoReply.error);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
