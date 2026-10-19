"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [statusText, setStatusText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusText("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setStatusText("보냈어요!");
        setName("");
        setMessage("");
      } else {
        setIsSuccess(false);
        setStatusText(typeof data === "string" ? data : data?.error || "전송에 실패했습니다.");
      }
    } catch (err: unknown) {
      setIsSuccess(false);
      setStatusText(
        err instanceof Error ? err.message : "전송 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* 스카이블루 배경 전체 화면 */
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        backgroundColor: "#b2dfdb",
        padding: "clamp(40px, 8vw, 120px) clamp(16px, 6vw, 80px)",
        gap: "32px",
      }}
    >
      {/* 흰색 카드 — 내용 둘레에 여백 */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 8px 40px rgba(30, 58, 138, 0.15)",
          padding: "clamp(48px, 8vw, 100px) clamp(32px, 8vw, 120px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "720px",
          gap: "clamp(32px, 5vw, 64px)",
        }}
      >
        <h1
          className="font-extrabold text-center leading-tight"
          style={{
            color: "#1e293b",
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
          }}
        >
          Ai로 뭘 만들고 싶으십니까?
          <br />
          <span style={{ fontSize: "clamp(1.3rem, 3vw, 2.4rem)" }}>
            <span style={{ color: "#00897b" }}>Ai 에이전트 강사</span>
            <br />
            <span style={{ color: "#00897b" }}>노현희</span> 입니다
          </span>
        </h1>

        {/* 동그란 프로필 사진 */}
        <img
          src="/profile.jpg"
          alt="노현희 강사 프로필 사진"
          style={{
            width: "clamp(120px, 22vw, 200px)",
            height: "clamp(120px, 22vw, 200px)",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #1e3a8a",
            boxShadow: "0 4px 20px rgba(30, 58, 138, 0.25)",
          }}
        />

        <p
          className="text-center"
          style={{
            color: "#334155",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          }}
        >
          당신에게 Ai는 무엇입니까?{" "}
          <span style={{ color: "#1e3a8a", fontWeight: "700" }}>함께 만들어봐요.</span>
        </p>
      </div>

      {/* 연락하기 칸 */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 8px 40px rgba(30, 58, 138, 0.15)",
          padding: "clamp(32px, 6vw, 48px) clamp(24px, 6vw, 56px)",
          width: "100%",
          maxWidth: "720px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
            fontWeight: "800",
            color: "#1e293b",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          연락하기
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#334155",
                fontSize: "0.95rem",
              }}
            >
              이름
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1.5px solid #cbd5e1",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#334155",
                fontSize: "0.95rem",
              }}
            >
              하고 싶은 말
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="하고 싶은 말을 입력하세요"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1.5px solid #cbd5e1",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: "8px",
              padding: "14px 24px",
              borderRadius: "12px",
              backgroundColor: isLoading ? "#94a3b8" : "#00897b",
              color: "#ffffff",
              fontSize: "1.05rem",
              fontWeight: "700",
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {isLoading ? "보내는 중..." : "보내기"}
          </button>
        </form>

        {statusText && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px 16px",
              borderRadius: "12px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "0.95rem",
              backgroundColor: isSuccess ? "#e8f5e9" : "#ffebee",
              color: isSuccess ? "#2e7d32" : "#c62828",
              border: `1px solid ${isSuccess ? "#a5d6a7" : "#ef9a9a"}`,
            }}
          >
            {statusText}
          </div>
        )}
      </div>
    </div>
  );
}
