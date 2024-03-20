import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "gio.giorgadze.com",
    to: "giorgigiorgadze93@gmail.com",
    subject: "giorgigiorgadze93@gmail.com",
    react: <WelcomeTemplate name="Giorgi" />,
  });

  return NextResponse.json({});
}
