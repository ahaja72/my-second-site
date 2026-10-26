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
          className="font-extrabold leading-tight"
          style={{
            width: "100%",
            maxWidth: "580px",
            fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
            fontFamily: "Pretendard, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', sans-serif",
            letterSpacing: "-0.5px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ textAlign: "left", paddingLeft: "clamp(8px, 4vw, 24px)" }}>
            <span style={{ color: "#800020" }}>My History</span>
          </div>
          <div style={{ textAlign: "right", paddingRight: "clamp(8px, 4vw, 24px)" }}>
            <span style={{ color: "#4a2c11", letterSpacing: "1.5px" }}>
              AI&nbsp;&nbsp;HiStory
            </span>
          </div>
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
            border: "4.5px solid #eab308",
            boxShadow: "0 6px 24px rgba(234, 179, 8, 0.35)",
          }}
        />

        {/* 강사 소개 및 경력 카드 (구분되는 배경과 디자인 적용) */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "28px 30px",
            border: "2px solid #e0e7ff",
            width: "100%",
            maxWidth: "600px",
            boxShadow: "0 10px 30px -5px rgba(56, 189, 248, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            position: "relative",
            overflow: "hidden",
            fontFamily: "Pretendard, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', sans-serif",
          }}
        >
          {/* 상단 포인트 컬러 바 */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "5px",
              background: "linear-gradient(90deg, #e11d48, #38bdf8)",
            }}
          />

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#eff6ff",
                color: "#0284c7",
                border: "1px solid #bfdbfe",
                fontWeight: "700",
                fontSize: "0.82rem",
                padding: "4px 14px",
                borderRadius: "20px",
                marginBottom: "10px",
                letterSpacing: "0.5px",
              }}
            >
              PROFILE
            </span>
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: "800",
                color: "#0f172a",
                margin: "4px 0",
                letterSpacing: "0.5px",
              }}
            >
              <span>
                <span style={{ color: "#e11d48" }}>m</span>
                <span style={{ color: "#f97316" }}>i</span>
                <span style={{ color: "#eab308" }}>s</span>
                <span style={{ color: "#10b981" }}>s</span>
                <span style={{ color: "#06b6d4" }}>n</span>
                <span style={{ color: "#8b5cf6" }}>o</span>
              </span>{" "}
              <span style={{ fontSize: "1.05rem", fontWeight: "600", color: "#0284c7" }}>1인 기업 컨설턴트 전문가</span>
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#475569", margin: "6px 0 0", wordBreak: "keep-all" }}>
              실무와 일상에 바로 쓰는 맞춤형 생성형 AI 활용법을 전합니다.
            </p>
          </div>

          <div
            style={{
              borderTop: "2px dashed #e2e8f0",
              paddingTop: "18px",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "16px 18px",
            }}
          >
            <p
              style={{
                fontSize: "0.88rem",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: "#38bdf8" }}>✦</span> 주요 강의 및 활동 경력
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.88rem",
                color: "#334155",
              }}
            >
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#0284c7", fontWeight: "bold" }}>✔</span>
                <span>공공기관 및 지자체 대상 생성형 AI & 챗GPT 실무 역량 강화 교육</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#0284c7", fontWeight: "bold" }}>✔</span>
                <span>기업 맞춤형 AI 업무 자동화 및 프롬프트 엔지니어링 특강</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#0284c7", fontWeight: "bold" }}>✔</span>
                <span>중장년·시니어 디지털 리터러시 & AI 에이전트 활용 교육</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: "#0284c7", fontWeight: "bold" }}>✔</span>
                <span>1인 기업가·강사를 위한 AI 콘텐츠 제작 및 브랜딩 워크숍</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 문의하기 칸 — 상단 카드와 동일한 전체 크기(720px) 및 규격 */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 8px 40px rgba(30, 58, 138, 0.15)",
          padding: "clamp(48px, 8vw, 80px) clamp(32px, 8vw, 100px)",
          width: "100%",
          maxWidth: "720px",
          fontFamily: "Pretendard, 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', sans-serif",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 상단 포인트 컬러 바 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #e11d48, #38bdf8)",
          }}
        />

        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#eff6ff",
              color: "#0284c7",
              border: "1px solid #bfdbfe",
              fontWeight: "700",
              fontSize: "0.82rem",
              padding: "4px 14px",
              borderRadius: "20px",
              marginBottom: "8px",
              letterSpacing: "0.5px",
            }}
          >
            CONTACT
          </span>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              fontWeight: "800",
              color: "#0f172a",
              margin: "4px 0",
            }}
          >
            무엇이 궁금하세요?
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "700",
                color: "#1e293b",
                fontSize: "0.95rem",
              }}
            >
              당신은 누구십니까?
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
                transition: "all 0.2s",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "700",
                color: "#1e293b",
                fontSize: "0.95rem",
              }}
            >
              알고 싶어요
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="알고 싶은 내용을 입력하세요"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1.5px solid #cbd5e1",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.2s",
                boxSizing: "border-box",
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: "6px",
              padding: "14px 24px",
              borderRadius: "12px",
              backgroundColor: isLoading ? "#94a3b8" : "#0284c7",
              color: "#ffffff",
              fontSize: "1.05rem",
              fontWeight: "700",
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
              fontFamily: "inherit",
              boxShadow: "0 4px 14px rgba(2, 132, 199, 0.3)",
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
              fontFamily: "inherit",
            }}
          >
            {statusText}
          </div>
        )}
      </div>
    </div>
  );
}
