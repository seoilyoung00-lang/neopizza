import { motion } from "framer-motion";

const benefits = [
  { emoji: "🎁", title: "가맹비 전액 면제", desc: "100호점까지" },
  { emoji: "📚", title: "교육비 전액 면제", desc: "100호점까지" },
  { emoji: "🛡️", title: "이행보증금 면제", desc: "초기 부담 없이" },
  { emoji: "📊", title: "수익성 1위 검증", desc: "2021 피자 프랜차이즈 1위" }
];

const awards = ["수익성 1위", "브랜드대상", "뮤즈 3관왕", "배달대상 2관왕"];

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
      </div>
    </section>
  );
}
