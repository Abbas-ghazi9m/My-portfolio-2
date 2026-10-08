import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
    const recipientEmail = process.env.CONTACT_EMAIL || "contact.mohammadabbas@gmail.com";

    if (webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
          }),
        });

        if (webhookRes.ok) {
          return NextResponse.json({
            success: true,
            simulated: false,
            message: "Your message has been delivered to Mohammad Abbas! Thank you.",
          });
        }
      } catch (webhookErr) {
        console.warn("Contact webhook failed, falling back to simulated logger", webhookErr);
      }
    }

    // Honest fallback logging for development/demonstration
    console.log(`[CONTACT SUBMISSION] From: ${name} <${email}>\nMessage:\n${message}`);

    return NextResponse.json({
      success: true,
      simulated: true,
      recipientEmail,
      message:
        "Demo mode active: Your message was logged successfully! To guarantee direct contact, feel free to email contact.mohammadabbas@gmail.com.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing your request." },
      { status: 500 }
    );
  }
}
