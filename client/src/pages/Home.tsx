import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SignatureMenu from "@/components/SignatureMenu";
import CustomerReviews from "@/components/CustomerReviews";
import WhyNeoPizza from "@/components/WhyNeoPizza";
import FranchiseBenefits from "@/components/FranchiseBenefits";
import SocialContribution from "@/components/SocialContribution";
import FranchiseProcess from "@/components/FranchiseProcess";
import FranchiseInquiry from "@/components/FranchiseInquiry";
import Events from "@/components/Events";

export default function Home() {
  // 다른 페이지(/stores 등)에서 해시(/#menu 등)로 진입한 경우 해당 섹션으로 스크롤
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    // 섹션이 렌더된 뒤 스크롤되도록 약간 지연
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Nav />
      <Hero />
      <Stats />
      <SignatureMenu />
      <CustomerReviews />
      <WhyNeoPizza />
      <SocialContribution />
      <FranchiseBenefits />
      <FranchiseProcess />
      <FranchiseInquiry />
      <Events />

      <footer className="bg-[#1E3F52] py-16 text-white/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10 mb-10">
            <div>
              <h2 className="mb-4">
                <img src="/logo-white.png" alt="네오피자" className="h-5 md:h-6 w-auto" />
              </h2>
              <p className="text-sm text-white/40 leading-relaxed">
                20년의 노하우로 검증된 맛과 수익성,<br />네오피자와 함께 성공적인 창업을 시작하세요.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">회사 정보</h4>
              <div className="text-sm text-white/40 leading-relaxed space-y-1">
                <p>(주)네오에프앤비</p>
                <p>대구광역시 수성구 들안로 376-5, 3층</p>
                <p>사업자등록번호: 446-87-00599</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">고객센터</h4>
              <p className="text-2xl font-poppins font-black text-primary mb-2">1670-4538</p>
              <div className="text-sm text-white/40 space-y-1">
                <p>평일 10:00 - 18:00</p>
                <p>토 · 일 · 공휴일 휴무</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors font-bold text-white/80">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">가맹안내</a>
            </div>
            <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} NEO PIZZA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
