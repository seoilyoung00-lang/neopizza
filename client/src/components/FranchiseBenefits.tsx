import { motion } from "framer-motion";
import {
  MapPin,
  Paintbrush,
  Truck,
  GraduationCap,
  Megaphone,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  { emoji: "🎁", title: "가맹비 전액 면제", desc: "100호점까지" },
  { emoji: "📚", title: "교육비 전액 면제", desc: "100호점까지" },
  { emoji: "🛡️", title: "이행보증금 면제", desc: "초기 부담 없이" },
  { emoji: "📊", title: "수익성 1위 검증", desc: "2021 피자 프랜차이즈 1위" }
];

const awards = ["수익성 1위", "브랜드대상", "뮤즈 3관왕", "배달대상 2관왕"];

// 본사 지원 시스템 — 아이콘 그리드 6개
const supports = [
  { icon: MapPin, title: "상권분석·입지 선정", desc: "데이터 기반 최적 입지 컨설팅" },
  { icon: Paintbrush, title: "인테리어·오픈 지원", desc: "통일된 브랜드 인테리어 시공" },
  { icon: Truck, title: "도우·식자재 공급", desc: "20년 노하우의 안정적 물류" },
  { icon: GraduationCap, title: "운영·조리 교육", desc: "체계적인 점주·직원 교육" },
  { icon: Megaphone, title: "배달앱·마케팅 운영 지원", desc: "본사 주도 통합 마케팅" },
  { icon: ClipboardCheck, title: "슈퍼바이저 정기 관리", desc: "전담 슈퍼바이저 매장 관리" },
];

export default function FranchiseBenefits() {
  return (
    <section id="franchise" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-[#F7F4E9] rounded-[2.5rem] p-8 md:p-14 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <span className="text-sm text-[#2E5266] font-bold mb-4 block">(주)네오에프앤비 가맹 안내</span>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6 leading-tight">
                탄탄한 본사와 함께할<br />성공 파트너를 모십니다.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                2017년 법인전환 이후 체계적인 시스템과 투명한 경영으로 가맹점주와 함께 성장해 왔습니다. 본사의 노하우와 검증된 수익 모델을 바탕으로 안정적인 창업을 지원합니다.
              </p>
              <p className="text-primary font-bold text-lg mb-8">
                ★ 100호점까지 선착순 특별 혜택
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl mb-2 block">{b.emoji}</span>
                    <h4 className="font-bold text-secondary text-lg mb-1">{b.title}</h4>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href="tel:16704538"
                className="inline-flex items-center gap-2 bg-[#2E5266] hover:bg-[#254557] text-white font-bold text-lg py-4 px-8 rounded-full transition-colors shadow-lg"
              >
                📞 1670-4538 상담 전화
              </a>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center gap-8">
              <div className="w-44 h-44 rounded-full border-[3px] border-dashed border-primary flex flex-col items-center justify-center text-center">
                <p className="text-primary font-poppins font-black text-4xl leading-tight">100%</p>
                <p className="text-primary font-bold text-base mt-1">상생 경영</p>
              </div>

              <div className="w-full space-y-3">
                {awards.map((award) => (
                  <div key={award} className="bg-white border border-gray-100 rounded-xl px-5 py-4 text-center shadow-sm">
                    <p className="text-secondary font-bold">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 본사 지원 시스템 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mt-12 lg:mt-16"
        >
          <div className="text-center mb-10">
            <span className="text-sm text-[#2E5266] font-bold mb-3 block">A to Z 토탈 케어</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight">
              본사 지원 시스템
            </h2>
            <p className="text-muted-foreground mt-3">
              창업부터 운영까지, 사장님 혼자가 아닙니다.
            </p>
          </div>

          {/* 특별 강조 — OPEN 특별 지원 배너 (가장 먼저 시선이 가도록) */}
          <div className="relative overflow-hidden bg-primary rounded-[2rem] p-8 md:p-10 mb-8 shadow-xl shadow-primary/30">
            {/* 장식용 배경 원 */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-10 w-44 h-44 rounded-full bg-white/5" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 text-center md:text-left">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 bg-white text-primary text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> OPEN 특별 지원
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                  오픈 첫 달 배달앱 할인쿠폰
                  <br className="hidden md:block" /> 비용 <span className="text-[#F7F4E9]">50% 지원</span>
                </h3>
                <p className="text-white/90 mt-3 font-medium">
                  초기 매출 부스팅을 위한 본사 직접 지원으로 안정적인 오픈을 돕습니다.
                </p>
              </div>
              <div className="shrink-0 flex md:flex-col items-center justify-center bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl px-8 py-6">
                <span className="text-5xl md:text-6xl font-black text-white font-poppins leading-none">50%</span>
                <span className="text-white/90 font-bold mt-1 md:mt-2 ml-3 md:ml-0">비용 지원</span>
              </div>
            </div>
          </div>

          {/* 본사 지원 항목 — 아이콘 그리드 6개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {supports.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-[#F7F4E9] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2E5266] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-secondary text-lg mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
