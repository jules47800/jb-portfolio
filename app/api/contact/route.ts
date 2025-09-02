import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({error: "Bad request"}, {status: 400});
  }
  const {name, email, message} = data as {name?: string; email?: string; message?: string};
  if (!name || !email || !message) {
    return NextResponse.json({error: "Missing fields"}, {status: 400});
  }

  // Configuration SMTP de l'hébergeur
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO;

  // Fallback vers Formspree si SMTP pas configuré
  const formspree = process.env.FORMSPREE_ID;

  // Priorité 1: SMTP de l'hébergeur
  if (smtpHost && smtpPort && smtpUser && smtpPass && contactTo) {
    try {
      const transporter = nodemailer.createTransporter({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: parseInt(smtpPort) === 465, // true pour 465, false pour autres ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`, // Utilise l'email SMTP configuré
        to: contactTo,
        replyTo: email, // L'email du visiteur pour pouvoir répondre
        subject: `Contact Portfolio: ${name}`,
        text: `
Nouveau message de contact depuis le portfolio

Nom: ${name}
Email: ${email}

Message:
${message}
        `,
        html: `
<h2>Nouveau message de contact depuis le portfolio</h2>
<p><strong>Nom:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
  ${message.replace(/\n/g, '<br>')}
</div>
        `,
      });

      return NextResponse.json({ok: true});
    } catch (error) {
      console.error('SMTP Error:', error);
      return NextResponse.json({error: "SMTP send failed"}, {status: 500});
    }
  }

  // Priorité 2: Formspree comme fallback
  if (formspree) {
    try {
      const r = await fetch(`https://formspree.io/f/${formspree}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, message}),
      });
      if (r.ok) return NextResponse.json({ok: true});
      return NextResponse.json({error: "Formspree failed"}, {status: 502});
    } catch {
      return NextResponse.json({error: "Formspree error"}, {status: 500});
    }
  }

  return NextResponse.json({error: "No email provider configured"}, {status: 500});
}


