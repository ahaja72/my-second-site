import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      "버셀(또는 .env)에 RESEND_API_KEY · CONTACT_EMAIL 이 있는지 확인하세요",
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        "이름과 하고 싶은 말을 입력해 주세요.",
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `[웹사이트 문의] ${name}님의 메시지`,
      text: `이름: ${name}\n\n내용:\n${message}`,
    });

    if (error) {
      return NextResponse.json(error.message || "메일 전송에 실패했습니다.", {
        status: 500,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "메일 전송 중 오류가 발생했습니다.";
    return NextResponse.json(errorMessage, { status: 500 });
  }
}
