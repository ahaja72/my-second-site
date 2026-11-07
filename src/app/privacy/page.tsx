import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | missno",
  description: "missno 개인정보처리방침 및 방문 통계(Google Analytics) 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#1c1b1a] flex flex-col justify-between selection:bg-[#2a72de] selection:text-white">
      {/* 1. 상단 내비게이션 바 */}
      <header className="w-full bg-[#f7f1e8]/90 backdrop-blur-md border-b border-[#e1dcd3] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#4a4741] hover:text-[#1c1b1a] font-medium transition-colors group"
          >
            <span className="text-base group-hover:-translate-x-0.5 transition-transform">←</span>
            <span>메인으로 돌아가기</span>
          </Link>

          <Link href="/" className="font-serif-display text-xl text-[#1c1b1a] tracking-tight">
            missno
          </Link>
        </div>
      </header>

      {/* 2. 본문 컨텐츠 영역 */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 w-full flex-1">
        {/* 헤더 타이틀 */}
        <div className="mb-10">
          <div className="inline-block text-xs font-semibold tracking-wider text-[#2a72de] uppercase mb-2">
            Legal & Privacy
          </div>
          <h1 className="text-3xl md:text-4xl font-serif-display text-[#1c1b1a] tracking-tight mb-3">
            개인정보처리방침
          </h1>
          <p className="text-sm text-[#838280]">
            시행일자: 2026년 11월 7일 · 최종 수정일: 2026년 11월 7일
          </p>
        </div>

        {/* 운영자 안내 배너 (초안 안내) */}
        <div className="mb-10 p-5 rounded-2xl bg-[#ffffff] border border-[#e1dcd3] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex items-start gap-3">
            <span className="text-lg">📋</span>
            <div className="text-xs md:text-sm text-[#4a4741] leading-relaxed">
              <strong className="text-[#1c1b1a] font-semibold block mb-1">
                운영자 안내 (초안)
              </strong>
              본 개인정보처리방침은 missno 웹사이트의 <strong>문의하기 폼</strong> 및 <strong>구글 애널리틱스(GA4) 방문 통계 분석</strong> 운영에 맞춰 작성된 기본 초안입니다.
              하단의 <span className="bg-[#fef3c7] text-[#92400e] px-1.5 py-0.5 rounded font-medium">[노란색 강조 항목]</span>은 실제 운영자 정보(연락처, 이메일, 데이터 보관 기간 등)에 맞게 확인 후 직접 수정하실 수 있습니다.
            </div>
          </div>
        </div>

        {/* 방침 본문 카드 */}
        <div className="space-y-8 text-[15px] leading-relaxed text-[#383632]">
          {/* 제1조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제1조 (총칙 및 목적)
            </h2>
            <p className="mb-3">
              <strong>missno</strong>(이하 &apos;운영자&apos;)는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하며, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
            </p>
            <p>
              본 개인정보처리방침은 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </p>
          </section>

          {/* 제2조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제2조 (처리하는 개인정보 항목 및 수집 방법)
            </h2>
            <p className="mb-4">
              운영자는 서비스 제공, 문의 응대 및 통계 분석을 위해 아래와 같은 개인정보를 처리하고 있습니다.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f7f1e8]/60 border border-[#e1dcd3]">
                <h3 className="font-semibold text-[#1c1b1a] text-sm mb-1">1. 문의 접수 시 수집 항목 (문의하기 폼)</h3>
                <ul className="list-disc list-inside text-sm text-[#4a4741] space-y-1">
                  <li><strong>필수 항목:</strong> 이름(성명), 문의 내용(하고 싶은 말)</li>
                  <li><strong>선택 항목:</strong> 문의 내용 내에 이용자가 직접 기재한 연락처 또는 이메일 주소</li>
                  <li><strong>수집 방법:</strong> 웹사이트 문의 폼을 통한 이용자의 직접 입력</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#f7f1e8]/60 border border-[#e1dcd3]">
                <h3 className="font-semibold text-[#1c1b1a] text-sm mb-1">2. 웹사이트 이용 과정에서 자동 생성·수집되는 항목 (방문 통계)</h3>
                <ul className="list-disc list-inside text-sm text-[#4a4741] space-y-1">
                  <li><strong>수집 항목:</strong> 쿠키(Cookie), 접속 IP 주소, 브라우저 종류 및 OS, 방문 일시, 서비스 이용 기록, 페이지 뷰, 유입 경로</li>
                  <li><strong>수집 도구:</strong> Google Analytics 4 (측정 ID: G-KQ2JL8P1XD)</li>
                  <li><strong>수집 목적:</strong> 웹사이트 트래픽 분석, 방문 통계 확인 및 서비스 품질 개선</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 제3조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제3조 (개인정보의 처리 및 보유 기간)
            </h2>
            <p className="mb-3">
              운영자는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보 수집 시에 동의받은 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#4a4741]">
              <li>
                <strong>문의 접수 정보:</strong> 문의 처리 및 상담 완료 후 <span className="bg-[#fef3c7] text-[#92400e] px-1.5 py-0.5 rounded font-medium">[1년]</span> 간 보관 후 안전하게 파기 (원치 않으실 경우 언제든 즉시 파기를 요청하실 수 있습니다.)
              </li>
              <li>
                <strong>구글 애널리틱스 통계 데이터:</strong> 구글 정책에 따라 익명화된 통계 데이터로 기본 <span className="bg-[#fef3c7] text-[#92400e] px-1.5 py-0.5 rounded font-medium">[14개월]</span> 동안 보관 후 자동 삭제
              </li>
            </ul>
          </section>

          {/* 제4조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제4조 (구글 애널리틱스(GA4) 및 쿠키의 운용·거부 안내)
            </h2>
            <p className="mb-3">
              운영자는 이용자의 웹사이트 방문 통계를 파악하고 더 나은 사용자 경험을 제공하기 위해 구글(Google LLC)이 제공하는 웹 분석 서비스인 <strong>Google Analytics</strong>를 사용하고 있습니다.
            </p>
            <p className="mb-4 text-sm text-[#4a4741]">
              구글 애널리틱스는 웹사이트 이용 현황을 분석하기 위해 이용자의 컴퓨터에 &apos;쿠키(Cookie)&apos;를 저장합니다. 쿠키는 웹사이트를 방문할 때 웹 서버가 이용자의 브라우저에 전송하는 아주 작은 텍스트 파일입니다.
            </p>

            <div className="p-4 rounded-xl bg-[#f7f1e8]/60 border border-[#e1dcd3] space-y-2 text-sm">
              <strong className="text-[#1c1b1a] block font-medium">쿠키 설치 거부 및 구글 애널리틱스 수집 차단 방법:</strong>
              <ol className="list-decimal list-inside space-y-1.5 text-[#4a4741]">
                <li>
                  <strong>웹 브라우저 설정을 통한 쿠키 거부:</strong>
                  <ul className="list-disc list-inside pl-4 text-xs text-[#838280] space-y-0.5 mt-1">
                    <li>Chrome: 설정 &gt; 개인정보 보호 및 보안 &gt; 서드 파티 쿠키 차단</li>
                    <li>Safari: 환경설정 &gt; 개인정보 보호 &gt; 모든 쿠키 차단</li>
                    <li>Edge: 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터 관리 및 삭제</li>
                  </ul>
                </li>
                <li>
                  <strong>Google Analytics 차단 전용 부가기능 설치:</strong>
                  <p className="text-xs text-[#838280] pl-4 mt-0.5">
                    구글에서 제공하는 [Google Analytics 차단 브라우저 부가기능(Opt-out Browser Add-on)]을 브라우저에 설치하여 통계 수집을 완전히 비활성화할 수 있습니다.
                  </p>
                </li>
              </ol>
            </div>
          </section>

          {/* 제5조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제5조 (개인정보의 제3자 제공 및 위탁 안내)
            </h2>
            <p className="mb-3">
              운영자는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 원활한 서비스 제공 및 기술 운영을 위해 아래와 같이 전문 서비스에 일부 업무를 위탁하고 있습니다.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border border-[#e1dcd3] rounded-xl overflow-hidden">
                <thead className="bg-[#f7f1e8] text-[#1c1b1a]">
                  <tr>
                    <th className="p-3 border-b border-[#e1dcd3] font-semibold">수탁 업체</th>
                    <th className="p-3 border-b border-[#e1dcd3] font-semibold">위탁 업무 내용</th>
                    <th className="p-3 border-b border-[#e1dcd3] font-semibold">보유 및 이용 기간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e1dcd3] text-[#4a4741]">
                  <tr>
                    <td className="p-3 font-medium text-[#1c1b1a]">Google LLC</td>
                    <td className="p-3">웹사이트 방문 통계 분석 도구(Google Analytics 4) 제공</td>
                    <td className="p-3">서비스 해지 시 또는 관련 약관에 따름</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#1c1b1a]">Resend Inc.</td>
                    <td className="p-3">문의하기 폼 접수 시 운영자 알림 이메일 발송 대행</td>
                    <td className="p-3">이메일 발송 및 오류 확인 목적 달성 시까지</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 제6조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제6조 (정보주체의 권리·의무 및 행사 방법)
            </h2>
            <p className="mb-3">
              이용자는 개인정보주체로서 언제든지 다음 각 호의 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-[#4a4741] mb-3">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="text-sm text-[#4a4741]">
              권리 행사는 하단의 [개인정보 보호책임자 및 문의처]에 기재된 이메일 또는 카카오톡 채널을 통해 요청하실 수 있으며, 운영자는 지체 없이 필요한 조치를 취하겠습니다.
            </p>
          </section>

          {/* 제7조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제7조 (개인정보의 파기 절차 및 방법)
            </h2>
            <p className="mb-3">
              운영자는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-[#4a4741]">
              <li><strong>파기 절차:</strong> 이용자가 입력한 정보는 목적 달성 후 내부 방침 및 법령에 따라 일정 기간 저장된 후 파기됩니다.</li>
              <li><strong>파기 방법:</strong> 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 이용하여 안전하게 삭제합니다.</li>
            </ul>
          </section>

          {/* 제8조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제8조 (개인정보 보호책임자 및 문의처)
            </h2>
            <p className="mb-4">
              운영자는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>

            <div className="p-5 rounded-xl bg-[#f7f1e8]/70 border border-[#e1dcd3] space-y-2 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-[#1c1b1a] min-w-[120px]">성명 / 상호:</span>
                <span className="text-[#4a4741]">노현희 / missno</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-[#1c1b1a] min-w-[120px]">직책 / 역할:</span>
                <span className="text-[#4a4741]">대표 / 1인 기업 컨설턴트</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-[#1c1b1a] min-w-[120px]">문의 이메일:</span>
                <span className="bg-[#fef3c7] text-[#92400e] px-2 py-0.5 rounded font-mono text-xs font-semibold">
                  [문의 수신용 이메일 주소를 입력해 주세요 - 예: contact@missno.com]
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-[#1c1b1a] min-w-[120px]">카카오톡 문의:</span>
                <a
                  href="http://pf.kakao.com/_eQxbWX/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2a72de] hover:underline"
                >
                  missno 카카오톡 채널 채팅 바로가기
                </a>
              </div>
            </div>
          </section>

          {/* 제9조 */}
          <section className="bg-[#ffffff] p-6 md:p-8 rounded-2xl border border-[#e1dcd3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-semibold text-[#1c1b1a] mb-4 pb-2 border-b border-[#e1dcd3]">
              제9조 (개인정보처리방침의 변경)
            </h2>
            <p className="text-sm text-[#4a4741]">
              본 개인정보처리방침은 2026년 11월 7일부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 웹사이트 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>
      </main>

      {/* 3. 푸터 */}
      <footer className="w-full bg-[#19191c] text-[#a8a5a0] border-t border-[#2a2927] py-12 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="font-serif-display text-xl text-[#ffffff] tracking-tight block">
                missno
              </span>
              <p className="text-xs text-[#838280] mt-0.5">
                노현희 1인 기업 컨설턴트 전문가
              </p>
            </div>
            <Link
              href="/"
              className="text-xs text-[#a8a5a0] hover:text-white transition-colors underline underline-offset-4"
            >
              메인 홈으로 이동
            </Link>
          </div>

          <div className="pt-4 border-t border-[#2a2927] flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-[#838280]">
            <p>이 사이트는 방문 통계를 보려고 구글 애널리틱스를 써요.</p>
            <p>© {new Date().getFullYear()} missno. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

