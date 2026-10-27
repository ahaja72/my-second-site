"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [statusText, setStatusText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isKakaoMenuOpen, setIsKakaoMenuOpen] = useState(false);

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
        setStatusText("소중한 문의가 성공적으로 전송되었습니다.");
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
    <div className="min-h-screen bg-[#f7f1e8] text-[#1c1b1a] flex flex-col justify-between selection:bg-[#2a72de] selection:text-white">
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#f7f1e8] border-b border-[#e1dcd3] py-2.5 px-4 text-center">
        <p className="text-[11px] md:text-[12px] font-bold tracking-[1.5px] uppercase text-[#4a4741]">
          생성형 AI 실무 컨설팅 & 1인 기업 맞춤형 워크숍 진행
        </p>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="w-full bg-[#f7f1e8] border-b border-[#e1dcd3] sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-serif-display text-2xl md:text-3xl font-normal tracking-tight text-[#1c1b1a]">
              missno
            </span>
            <span className="hidden sm:inline-block text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#e1dcd3]/60 text-[#4a4741] font-medium">
              Consulting
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[14px] text-[#4a4741] font-medium">
            <a href="#about" className="hover:text-[#1c1b1a] transition-colors">소개</a>
            <a href="#curriculum" className="hover:text-[#1c1b1a] transition-colors">주요 분야</a>
            <a href="#credentials" className="hover:text-[#1c1b1a] transition-colors">활동 이력</a>
            <a href="#contact" className="hover:text-[#1c1b1a] transition-colors">문의하기</a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#2a72de] hover:bg-[#1e5cb8] text-white text-[14px] md:text-[15px] font-semibold shadow-sm transition-all hover:shadow-md"
          >
            문의하기
          </a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center">
        {/* 3. HERO SECTION */}
        <section className="w-full max-w-5xl mx-auto px-6 pt-16 md:pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] border border-[#e1dcd3] text-[12px] font-bold tracking-[1px] uppercase text-[#6b443d] mb-8 shadow-xs">
            <span>AI × Human Potential</span>
          </div>

          <h1 className="font-serif-display text-[44px] sm:text-[64px] md:text-[88px] font-light leading-[1.05] tracking-tight text-[#1c1b1a] mb-8">
            Subtle Wisdom.<br />
            <span className="italic font-normal text-[#2a72de]">Powerful</span> AI Action.
          </h1>

          <p className="max-w-2xl mx-auto text-[17px] sm:text-[19px] md:text-[21px] text-[#4a4741] font-normal leading-[1.6] mb-12">
            1인 기업 컨설턴트 <strong>노현희</strong>입니다.<br className="hidden sm:inline" />
            실무와 일상에 바로 쓸 수 있는 맞춤형 생성형 AI 활용법과 비즈니스 성장을 전합니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#2a72de] hover:bg-[#1e5cb8] text-white text-[16px] font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              컨설팅 / 특강 문의
            </a>
            <a
              href="#curriculum"
              className="px-8 py-3.5 rounded-full bg-[#f7f1e8] hover:bg-[#eae3d5] text-[#4a4741] border border-[#4a4741] text-[16px] font-semibold transition-all"
            >
              주요 강의 분야 보기
            </a>
          </div>
        </section>

        {/* 4. PROFILE & STATS SHOWCASE (Warm-paper & Earth-tone accents) */}
        <section id="about" className="w-full max-w-5xl mx-auto px-6 py-16">
          <div className="bg-[#ffffff] border border-[#e1dcd3] rounded-[24px] p-8 md:p-14 shadow-sm relative overflow-hidden">
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6b443d] via-[#af751b] to-[#2a72de]" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Profile Photo */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#af751b] to-[#ced4b8] opacity-60 blur-xs" />
                  <img
                    src="/profile.jpg"
                    alt="노현희 강사 프로필 사진"
                    className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-[#ffffff] shadow-md"
                  />
                </div>
                <div className="mt-6 text-center">
                  <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#af751b] block mb-1">
                    FOUNDER & SPEAKER
                  </span>
                  <h2
                    className="font-script text-5xl sm:text-6xl text-[#2a72de] tracking-wide my-1 font-bold"
                    style={{
                      textShadow: "0 0 1px #2a72de",
                      WebkitTextStroke: "0.5px #2a72de",
                    }}
                  >
                    missno
                  </h2>
                  <p className="text-[14px] text-[#838280] font-medium">1인 기업 컨설턴트 전문가</p>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="inline-block mb-3">
                  <span className="text-[12px] font-bold tracking-[1.2px] uppercase text-[#6b443d] bg-[#f7f1e8] px-3 py-1 rounded-full border border-[#e1dcd3]">
                    About The Consultant
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#1c1b1a] mb-4 leading-snug">
                  복잡하고 어려운 인공지능을 누구나 손에 쥐는 실무 무기로 만듭니다.
                </h3>
                <p className="text-[#4a4741] text-[16px] leading-[1.7] mb-6">
                  기술 자체보다 중요한 것은 <strong>'나의 일과 삶에 어떻게 연결되는가'</strong>입니다. 공공기관부터 중소기업, 1인 창업가와 시니어까지 눈높이에 맞춘 쉽고 실천적인 AI 워크플로우를 설계해 드립니다.
                </p>

                {/* Stat Badges (Oura Style - Responsive on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#e1dcd3] w-full">
                  <div className="bg-[#f7f1e8] border border-[#e1dcd3]/60 rounded-[16px] p-4 text-center flex flex-col justify-center items-center">
                    <span className="font-serif-display text-2xl sm:text-3xl text-[#1c1b1a] block font-light leading-tight">100%</span>
                    <span className="text-[12px] text-[#4a4741] sm:text-[#838280] font-medium mt-1.5 leading-snug break-keep">
                      맞춤 실무 커리큘럼
                    </span>
                  </div>
                  <div className="bg-[#f7f1e8] border border-[#e1dcd3]/60 rounded-[16px] p-4 text-center flex flex-col justify-center items-center">
                    <span className="font-serif-display text-2xl sm:text-3xl text-[#af751b] block font-light leading-tight">Direct</span>
                    <span className="text-[12px] text-[#4a4741] sm:text-[#838280] font-medium mt-1.5 leading-snug break-keep">
                      즉시 적용 워크숍
                    </span>
                  </div>
                  <div className="bg-[#f7f1e8] border border-[#e1dcd3]/60 rounded-[16px] p-4 text-center flex flex-col justify-center items-center">
                    <span className="font-serif-display text-2xl sm:text-3xl text-[#224228] block font-light leading-tight">AI+1</span>
                    <span className="text-[12px] text-[#4a4741] sm:text-[#838280] font-medium mt-1.5 leading-snug break-keep">
                      1인 비즈니스 자동화
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXPERTISE & CURRICULUM (Earth-tone Clay & Olive rhythm) */}
        <section id="curriculum" className="w-full max-w-5xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#6b443d] block mb-2">
              CORE DOMAINS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-light text-[#1c1b1a] leading-snug">
              주요 강의<br />컨설팅 영역
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#ffffff] border border-[#e1dcd3] rounded-[24px] p-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f7f1e8] border border-[#e1dcd3] flex items-center justify-center text-[#6b443d] font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1a] mb-3">
                공공기관 · 지자체 역량 강화 교육
              </h3>
              <p className="text-[#4a4741] text-[15px] leading-relaxed mb-4">
                생성형 AI와 ChatGPT를 공공 행정 및 기획 보고서 작성에 안전하고 효율적으로 접목하는 실무 중심 맞춤형 교육입니다.
              </p>
              <ul className="text-[14px] text-[#4a4741] space-y-2 border-t border-[#f7f1e8] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#af751b]" />
                  공문서·보고서 작성 시간 단축 프롬프트
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#af751b]" />
                  데이터 분석 및 정책 아이디어 브레인스토밍
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff] border border-[#e1dcd3] rounded-[24px] p-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f7f1e8] border border-[#e1dcd3] flex items-center justify-center text-[#af751b] font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1a] mb-3">
                기업 맞춤형 AI 업무 자동화
              </h3>
              <p className="text-[#4a4741] text-[15px] leading-relaxed mb-4">
                반복적인 비즈니스 업무를 자동화하고 마케팅 카피, 프레젠테이션, 고객 커뮤니케이션 효율을 극대화합니다.
              </p>
              <ul className="text-[14px] text-[#4a4741] space-y-2 border-t border-[#f7f1e8] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#af751b]" />
                  현업 맞춤형 프롬프트 엔지니어링 실습
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#af751b]" />
                  AI 기반 기획서 및 콘텐츠 자동 생성 시스템 구축
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff] border border-[#e1dcd3] rounded-[24px] p-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f7f1e8] border border-[#e1dcd3] flex items-center justify-center text-[#224228] font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1a] mb-3">
                1인 기업가 · 강사 브랜딩 워크숍
              </h3>
              <p className="text-[#4a4741] text-[15px] leading-relaxed mb-4">
                혼자서 기획, 마케팅, 강의안 제작까지 해결해야 하는 1인 기업가를 위한 AI 비서 세팅 및 원스톱 제작 프로세스입니다.
              </p>
              <ul className="text-[14px] text-[#4a4741] space-y-2 border-t border-[#f7f1e8] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#224228]" />
                  SNS 콘텐츠 및 브랜드 스토리텔링 생성
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#224228]" />
                  전자책 및 강의안 구성 자동화
                </li>
              </ul>
            </div>

            <div className="bg-[#ffffff] border border-[#e1dcd3] rounded-[24px] p-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#f7f1e8] border border-[#e1dcd3] flex items-center justify-center text-[#4a4741] font-bold text-lg mb-6">
                04
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1a] mb-3">
                디지털 리터러시 & 친절한 AI 첫걸음
              </h3>
              <p className="text-[#4a4741] text-[15px] leading-relaxed mb-4">
                중장년층과 입문자를 위해 컴퓨터 용어 없이 일상 대화처럼 배우는 맞춤형 디지털 전환 강좌입니다.
              </p>
              <ul className="text-[14px] text-[#4a4741] space-y-2 border-t border-[#f7f1e8] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a4741]" />
                  스마트폰과 PC로 바로 쓰는 AI 음성비서
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4a4741]" />
                  일상 고민 해결 및 실생활 정보 탐색 실습
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. IN THE NEWS & ACTIVITY (Oura Ink Band World) */}
        <section id="credentials" className="w-full bg-[#19191c] text-white py-24 px-6 my-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-[12px] font-bold tracking-[2px] uppercase text-[#af751b] block mb-2">
                  PROVEN TRACK RECORD
                </span>
                <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-light text-[#ffffff]">
                  주요 활동 및 출강 이력
                </h2>
              </div>
              <p className="text-[#a8a5a0] text-[15px] max-w-md">
                다양한 공공기관과 기업 현장에서 입증된 높은 만족도와 실무 적용성을 보장합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#242322] border border-[#393734] rounded-[24px] p-6 flex flex-col justify-between hover:border-[#ced4b8]/50 transition-colors">
                <span className="text-[#af751b] text-2xl font-serif-display mb-4 block">01</span>
                <h4 className="text-lg font-bold text-white mb-2">공공기관 특강</h4>
                <p className="text-[#a8a5a0] text-[14px] leading-relaxed">
                  지자체 공무원 및 공공기관 실무자 대상 생성형 AI 활용 직무 역량 강화 교육
                </p>
                <div className="mt-6 pt-4 border-t border-[#393734] text-[12px] text-[#ced4b8]">
                  만족도 98%
                </div>
              </div>

              <div className="bg-[#242322] border border-[#393734] rounded-[24px] p-6 flex flex-col justify-between hover:border-[#ced4b8]/50 transition-colors">
                <span className="text-[#af751b] text-2xl font-serif-display mb-4 block">02</span>
                <h4 className="text-lg font-bold text-white mb-2">기업 임직원 교육</h4>
                <p className="text-[#a8a5a0] text-[14px] leading-relaxed">
                  사내 업무 자동화 및 챗GPT 프롬프트 엔지니어링 집중 워크숍
                </p>
                <div className="mt-6 pt-4 border-t border-[#393734] text-[12px] text-[#ced4b8]">
                  실습형 프로젝트
                </div>
              </div>

              <div className="bg-[#242322] border border-[#393734] rounded-[24px] p-6 flex flex-col justify-between hover:border-[#ced4b8]/50 transition-colors">
                <span className="text-[#af751b] text-2xl font-serif-display mb-4 block">03</span>
                <h4 className="text-lg font-bold text-white mb-2">시니어 디지털 리터러시</h4>
                <p className="text-[#a8a5a0] text-[14px] leading-relaxed">
                  중장년 세대를 위한 쉽고 친절한 생활 밀착형 AI 에이전트 활용 교육
                </p>
                <div className="mt-6 pt-4 border-t border-[#393734] text-[12px] text-[#ced4b8]">
                  눈높이 맞춤 강의
                </div>
              </div>

              <div className="bg-[#242322] border border-[#393734] rounded-[24px] p-6 flex flex-col justify-between hover:border-[#ced4b8]/50 transition-colors">
                <span className="text-[#af751b] text-2xl font-serif-display mb-4 block">04</span>
                <h4 className="text-lg font-bold text-white mb-2">1인 창업 컨설팅</h4>
                <p className="text-[#a8a5a0] text-[14px] leading-relaxed">
                  강사·지식창업가를 위한 콘텐츠 기획 및 비즈니스 브랜딩 맞춤 컨설팅
                </p>
                <div className="mt-6 pt-4 border-t border-[#393734] text-[12px] text-[#ced4b8]">
                  1:1 밀착 코칭
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT / INQUIRY SECTION (Feature Card + Action Blue) */}
        <section id="contact" className="w-full max-w-3xl mx-auto px-6 py-20">
          <div className="bg-[#ffffff] border border-[#e1dcd3] rounded-[24px] p-8 sm:p-12 md:p-14 shadow-sm relative overflow-hidden">
            {/* Top subtle blue action accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#2a72de]" />

            <div className="text-center mb-10">
              <span className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#4a4741] bg-[#f7f1e8] px-3.5 py-1 rounded-full border border-[#e1dcd3] inline-block mb-3">
                LET'S TALK
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-light text-[#1c1b1a] mb-3">
                무엇이 궁금하신가요?
              </h2>
              <p className="text-[#4a4741] text-[15px]">
                강의 의뢰, 기업 컨설팅, 협업 제안 등 궁금하신 점을 남겨주시면 신속하게 답변드리겠습니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[14px] font-medium text-[#4a4741] mb-2">
                  성함 / 소속 (기업·기관명)
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="예: 홍길동 (OO시청 또는 OO기업)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-[12px] bg-[#ffffff] border border-[#e1dcd3] text-[#1c1b1a] text-[15px] focus:outline-none focus:border-[#2a72de] focus:ring-1 focus:ring-[#2a72de] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[14px] font-medium text-[#4a4741] mb-2">
                  문의 내용 (교육 주제, 일정, 목적 등)
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="강의 희망 일정이나 구체적인 교육 목적, 궁금한 점을 적어주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-[12px] bg-[#ffffff] border border-[#e1dcd3] text-[#1c1b1a] text-[15px] focus:outline-none focus:border-[#2a72de] focus:ring-1 focus:ring-[#2a72de] transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-full bg-[#2a72de] hover:bg-[#1e5cb8] text-white text-[16px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all disabled:bg-[#cccac7] disabled:cursor-not-allowed"
              >
                {isLoading ? "전송 중입니다..." : "문의 메시지 보내기"}
              </button>
            </form>

            {statusText && (
              <div
                className={`mt-6 p-4 rounded-[12px] text-center text-[15px] font-medium border ${
                  isSuccess
                    ? "bg-[#ced4b8]/30 border-[#849671] text-[#224228]"
                    : "bg-[#ffebee] border-[#ef9a9a] text-[#e33a22]"
                }`}
              >
                {statusText}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 8. FOOTER (Oura Ink Band Soft World) */}
      <footer className="w-full bg-[#19191c] text-[#a8a5a0] border-t border-[#2a2927] py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-serif-display text-2xl text-[#ffffff] tracking-tight block mb-1">
              missno
            </span>
            <p className="text-[13px] text-[#838280]">
              노현희 1인 기업 컨설턴트 전문가 · 맞춤형 생성형 AI 비즈니스 솔루션
            </p>
          </div>

          <div className="flex items-center gap-6 text-[13px]">
            <a href="#about" className="hover:text-white transition-colors">소개</a>
            <a href="#curriculum" className="hover:text-white transition-colors">강의 분야</a>
            <a href="#credentials" className="hover:text-white transition-colors">활동 이력</a>
            <a href="#contact" className="hover:text-white transition-colors">문의하기</a>
          </div>

          <div className="text-[12px] text-[#838280]">
            © {new Date().getFullYear()} missno. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 9. FLOATING KAKAO BUTTON WITH CHAT & CHANNEL LINKS */}
      <aside aria-label="카카오톡 채널 및 채팅 문의" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Sub-menu with individual Kakao links */}
        {isKakaoMenuOpen && (
          <div className="mb-3 flex flex-col gap-2 bg-white/95 backdrop-blur-sm border border-[#e1dcd3] p-2.5 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-bottom-2 duration-200 min-w-[210px]">
            {/* 채팅 URL */}
            <a
              href="http://pf.kakao.com/_eQxbWX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-[14px] hover:bg-[#FEE500]/25 transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center text-[#191919] font-bold text-xs shrink-0 shadow-xs">
                💬
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#191919] group-hover:text-black">1:1 채팅 문의</span>
                <span className="text-[11px] text-[#838280]">실시간 상담 및 채팅 URL</span>
              </div>
            </a>

            {/* 채널 홈 URL */}
            <a
              href="http://pf.kakao.com/_eQxbWX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-[14px] hover:bg-[#FEE500]/25 transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center text-[#191919] font-bold text-xs shrink-0 shadow-xs">
                🏠
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#191919] group-hover:text-black">카카오 채널 홈</span>
                <span className="text-[11px] text-[#838280]">소식 확인 및 채널 URL</span>
              </div>
            </a>

            {/* 친구추가 URL */}
            <a
              href="http://pf.kakao.com/_eQxbWX/friend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-[14px] hover:bg-[#FEE500]/25 transition-colors group border-t border-[#f7f1e8] pt-2.5"
            >
              <span className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center text-[#191919] font-bold text-xs shrink-0 shadow-xs">
                ➕
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#191919] group-hover:text-black">카카오 친구추가</span>
                <span className="text-[11px] text-[#838280]">소식 받기 및 친구추가 URL</span>
              </div>
            </a>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          type="button"
          onClick={() => setIsKakaoMenuOpen(!isKakaoMenuOpen)}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-[14px] sm:text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.24)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
        >
          {/* Kakao Bubble Icon */}
          <svg
            className="w-5 h-5 fill-[#191919] shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.873 1.887 5.4 4.771 6.787l-1.22 4.476a.5.5 0 0 0 .762.532l5.228-3.468c.15.011.303.018.459.018 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
          </svg>
          <span className="whitespace-nowrap">
            {isKakaoMenuOpen ? "문의 닫기 ✕" : "카카오톡으로 문의하기"}
          </span>
        </button>
      </aside>
    </div>
  );
}
