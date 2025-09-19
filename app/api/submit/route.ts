import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { company, email, role, message } = data;
    if (!company || !email) return NextResponse.json({ error: 'company and email required' }, { status: 400 });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || 'counsel@archonium.global',
      subject: `Dossier Request: ${company}` ,
      text: `Company: ${company}\nEmail: ${email}\nRole: ${role}\nMessage: ${message}` 
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    if (err instanceof Error) console.error(err.message);
    else console.error('Unknown error in /api/submit');
    return NextResponse.json({ error: 'internal' }, { status: 500 });
  }
}
