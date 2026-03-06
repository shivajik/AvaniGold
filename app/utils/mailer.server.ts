import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
  }
  return transporter;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(formData: ContactFormData) {
  const t = getTransporter();
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"AVNIGOLD Seeds Website" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    replyTo: formData.email,
    subject: `New Contact Inquiry: ${formData.subject}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background-color: #f5f5f0;">
        <div style="background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%); padding: 32px 40px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 1px;">AVNIGOLD</h1>
          <p style="color: #c8e6c9; margin: 4px 0 0 0; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">Premium Seeds</p>
          <div style="width: 50px; height: 3px; background-color: #ffc107; margin: 16px auto 0; border-radius: 2px;"></div>
        </div>

        <div style="background-color: #ffffff; padding: 36px 40px;">
          <div style="background-color: #fff8e1; border-left: 4px solid #ffc107; padding: 14px 18px; border-radius: 0 6px 6px 0; margin-bottom: 28px;">
            <p style="margin: 0; color: #5d4037; font-size: 15px; font-weight: 600;">New Contact Form Submission</p>
            <p style="margin: 4px 0 0 0; color: #795548; font-size: 13px;">Received on ${submittedAt} (IST)</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 16px; background-color: #f1f8e9; border-bottom: 1px solid #e8f5e9; font-weight: 600; color: #33691e; width: 130px; font-size: 14px; vertical-align: top;">Name</td>
              <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e8f5e9; color: #333333; font-size: 14px;">${escapeHtml(formData.name)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background-color: #f1f8e9; border-bottom: 1px solid #e8f5e9; font-weight: 600; color: #33691e; width: 130px; font-size: 14px; vertical-align: top;">Email</td>
              <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e8f5e9; color: #333333; font-size: 14px;">
                <a href="mailto:${escapeHtml(formData.email)}" style="color: #2e7d32; text-decoration: none;">${escapeHtml(formData.email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background-color: #f1f8e9; border-bottom: 1px solid #e8f5e9; font-weight: 600; color: #33691e; width: 130px; font-size: 14px; vertical-align: top;">Phone</td>
              <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e8f5e9; color: #333333; font-size: 14px;">${formData.phone ? escapeHtml(formData.phone) : '<span style="color: #9e9e9e;">Not provided</span>'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background-color: #f1f8e9; border-bottom: 1px solid #e8f5e9; font-weight: 600; color: #33691e; width: 130px; font-size: 14px; vertical-align: top;">Subject</td>
              <td style="padding: 12px 16px; background-color: #fafafa; border-bottom: 1px solid #e8f5e9; color: #333333; font-size: 14px; font-weight: 500;">${escapeHtml(formData.subject)}</td>
            </tr>
          </table>

          <div style="margin-bottom: 24px;">
            <p style="color: #33691e; font-weight: 600; font-size: 14px; margin: 0 0 10px 0;">Message</p>
            <div style="background-color: #f9fbe7; border: 1px solid #dcedc8; border-radius: 6px; padding: 18px 20px;">
              <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(formData.message)}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 28px;">
            <a href="mailto:${escapeHtml(formData.email)}?subject=Re: ${encodeURIComponent(formData.subject)}"
               style="display: inline-block; background-color: #2e7d32; color: #ffffff; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
              Reply to ${escapeHtml(formData.name)}
            </a>
          </div>
        </div>

        <div style="background-color: #e8f5e9; padding: 20px 40px; text-align: center;">
          <p style="margin: 0; color: #558b2f; font-size: 12px;">
            AVNIGOLD SEEDS PRIVATE LIMITED
          </p>
          <p style="margin: 4px 0 0 0; color: #7cb342; font-size: 11px;">
            Survey No. 420/2, Gram - Bhunyakhedi, Mandsaur - 458002, Madhya Pradesh
          </p>
          <p style="margin: 8px 0 0 0; color: #9e9e9e; font-size: 10px;">
            This is an automated notification from your website contact form.
          </p>
        </div>
      </div>
    `,
  };

  await t.sendMail(mailOptions);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

