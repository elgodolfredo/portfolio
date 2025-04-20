export const dynamic = 'force-dynamic';

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body as ContactFormData;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
