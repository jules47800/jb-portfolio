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
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: parseInt(smtpPort) === 465, // true pour 465, false pour autres ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${smtpUser}>`,
        to: contactTo,
        replyTo: email,
        subject: `🚀 Nouveau contact portfolio • ${name}`,
        text: `
NOUVEAU CONTACT PORTFOLIO
========================

👤 Contact: ${name}
📧 Email: ${email}

💬 Message:
${message}

---
Envoyé depuis votre portfolio professionnel
        `,
        html: `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau Contact Portfolio</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
    
    <!-- Container principal -->
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
        
        <!-- Header avec gradient moderne -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <div style="background-color: rgba(255, 255, 255, 0.15); border-radius: 50px; display: inline-flex; align-items: center; padding: 8px 20px; margin-bottom: 20px;">
                <div style="width: 8px; height: 8px; background-color: #10b981; border-radius: 50%; margin-right: 8px; animation: pulse 2s infinite;"></div>
                <span style="color: white; font-size: 14px; font-weight: 500;">NOUVEAU CONTACT</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                📬 Message Portfolio
            </h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">
                Un nouveau contact souhaite échanger avec vous
            </p>
        </div>

        <!-- Contenu principal -->
        <div style="padding: 40px 30px;">
            
            <!-- Informations contact avec design carte -->
            <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 16px; padding: 24px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                        <span style="color: white; font-size: 20px;">👤</span>
                    </div>
                    <div>
                        <h2 style="margin: 0; color: #1e293b; font-size: 20px; font-weight: 600;">${name}</h2>
                        <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 500; font-size: 16px;">${email}</a>
                    </div>
                </div>
                
                <!-- Badges informatifs -->
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">
                        📧 Contact direct
                    </span>
                    <span style="background-color: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">
                        ✅ Vérifié
                    </span>
                    <span style="background-color: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">
                        🚀 Portfolio
                    </span>
                </div>
            </div>

            <!-- Message avec design moderne -->
            <div style="margin-bottom: 30px;">
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                    <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                        <span style="color: white; font-size: 16px;">💬</span>
                    </div>
                    <h3 style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">Message</h3>
                </div>
                
                <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; position: relative; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
                    <!-- Quote indicator -->
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 0 2px 2px 0;"></div>
                    
                    <div style="color: #374151; font-size: 16px; line-height: 1.7; padding-left: 16px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>

            <!-- Actions rapides -->
            <div style="background: linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%); border-radius: 12px; padding: 20px; text-align: center;">
                <h4 style="margin: 0 0 16px 0; color: #374151; font-size: 16px; font-weight: 600;">Actions rapides</h4>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <a href="mailto:${email}" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center;">
                        📧 Répondre
                    </a>
                    <a href="mailto:${email}?subject=Re: Contact Portfolio&body=Bonjour ${name},%0A%0AMerci pour votre message !" style="background-color: white; color: #374151; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; border: 2px solid #e5e7eb; display: inline-flex; align-items: center;">
                        ⚡ Réponse rapide
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer professionnel -->
        <div style="background-color: #1f2937; color: white; padding: 30px; text-align: center;">
            <div style="margin-bottom: 16px;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                    <span style="font-size: 18px;">🚀</span>
                </div>
                <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Portfolio Professionnel</h3>
            </div>
            
            <p style="margin: 0; color: #9ca3af; font-size: 14px; line-height: 1.5;">
                Email automatique généré par votre système de contact<br>
                <strong style="color: #d1d5db;">Répondez directement</strong> pour continuer la conversation
            </p>
            
            <!-- Signature moderne -->
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #374151;">
                <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 12px;">
                    <div style="width: 8px; height: 8px; background-color: #3b82f6; border-radius: 50%;"></div>
                    <div style="width: 8px; height: 8px; background-color: #10b981; border-radius: 50%;"></div>
                    <div style="width: 8px; height: 8px; background-color: #f59e0b; border-radius: 50%;"></div>
                </div>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                    Développé avec ❤️ • Next.js & Nodemailer
                </p>
            </div>
        </div>
    </div>

    <!-- Styles pour l'animation -->
    <style>
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        @media only screen and (max-width: 600px) {
            .mobile-padding { padding: 20px !important; }
            .mobile-text { font-size: 14px !important; }
        }
    </style>
</body>
</html>
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


