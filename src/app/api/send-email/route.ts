import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/emails/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = contactFormSchema.parse(body);

    const data = await resend.emails.send({
      from: "Eyesage Consult <contact@eyesageconsult.com>",
      to: ["your-email@example.com"],
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}