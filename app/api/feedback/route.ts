import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, category, message } = body;

    if (!name || !email || !category || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // TODO: wire up to an email service (e.g. Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "noreply@chandraskinner.com",
    //   to: "hello@chandraskinner.com",
    //   subject: `MySeedBook Feedback: ${category}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    console.log("MySeedBook feedback received:", { name, email, category, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
