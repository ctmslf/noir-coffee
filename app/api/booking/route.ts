import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, date, time, comment } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Все обязательные поля должны быть заполнены" },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #FF4D00;">Новая бронь столика</h1>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Дата:</strong> ${date}</p>
            <p><strong>Время:</strong> ${time}</p>
            ${comment ? `<p><strong>Комментарий:</strong> ${comment}</p>` : ""}
          </div>
          <p style="color: #666; font-size: 14px;">
            Свяжитесь с клиентом в течение 15 минут для подтверждения брони.
          </p>
        </div>
      `;

      await resend.emails.send({
        from: "НУАР <onboarding@resend.dev>",
        to: process.env.OWNER_EMAIL || "info@noir-coffee.ru",
        subject: `Новая бронь: ${name} на ${date} ${time}`,
        html: emailContent,
      });
    } else {
      console.log("Booking request:", { name, phone, date, time, comment });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Не удалось обработать заявку" },
      { status: 500 }
    );
  }
}
