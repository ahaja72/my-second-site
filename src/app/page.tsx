export default function Home() {
  return (
    /* 스카이블루 배경 전체 화면 */
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        backgroundColor: "#b2dfdb",
        padding: "clamp(40px, 8vw, 120px) clamp(16px, 6vw, 80px)",
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
          안녕하세요,
          <br />
          <span style={{ color: "#00897b" }}>Ai 에이전트 강사</span>
          <br />
          <span style={{ color: "#00897b" }}>노현희</span> 입니다
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
          Ai로 뭘 만들고 싶으신가요?{" "}
          <span style={{ color: "#1e3a8a", fontWeight: "700" }}>함께 만들어봐요.</span>
        </p>
      </div>
    </div>
  );
}
