import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const steps = [
  { num: "01", title: "전화 · 온라인 상담", desc: "전문 컨설턴트 1:1 맞춤 상담" },
  { num: "02", title: "상권 분석", desc: "최적의 입지 선정 및 타당성 검토" },
  { num: "03", title: "계약 체결", desc: "투명하고 합리적인 가맹 계약" },
  { num: "04", title: "매장 시공", desc: "NEO PIZZA만의 트렌디한 인테리어" },
  { num: "05", title: "교육 및 오픈", desc: "본사 집중 교육 후 그랜드 오픈" },
];

export default function FranchiseProcess() {
  return (
    <section className="py-24 bg-[#2E5266] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest mb-3 font-poppins"
          >
            FRANCHISE PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            가맹 절차
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60"
          >
            체계적인 지원 시스템으로 성공적인 창업을 약속합니다
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 min-w-[150px] bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 text-xl z-10">›</div>
              )}
              <div className="text-3xl font-poppins font-black text-primary mb-3 opacity-80">{step.num}</div>
              <h4 className="text-base font-bold mb-2">{step.title}</h4>
              <p className="text-xs text-white/50">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="text-left">
              <p className="text-sm text-white/50 mb-1">창업 문의 대표전화</p>
              <p className="text-4xl font-poppins font-black text-primary tracking-wider">1670-4538</p>
              <p className="text-xs text-white/40 mt-2">평일 10:00-18:00 / 월요일·공휴일 휴무</p>
            </div>
            <div className="w-px h-16 bg-white/20 hidden sm:block" />
            <a
              href="tel:16704538"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-8 rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Phone className="w-5 h-5" />
              전화 상담하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
