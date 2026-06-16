import heroBg from "@/assets/images/hero-pizza.png";
import { motion } from "framer-motion";
import { ChevronRight, Pizza, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Pizza Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="NEO PIZZA Signature"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 어두운 그라데이션 오버레이 — 위/아래는 진하게(가독성), 가운데는 옍게(피자가 먹음직스럽게 보이도록) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,28,34,0.88) 0%, rgba(16,28,34,0.58) 42%, rgba(16,28,34,0.42) 64%, rgba(16,28,34,0.82) 100%)',
        }}
      />

      {/* Large "20" Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none overflow-hidden">
        <span 
          className="text-[40vw] font-black tracking-tighter text-transparent"
          style={{ 
            WebkitTextStroke: '2px rgba(255,255,255,0.07)', 
            lineHeight: 1 
          }}
        >
          20
        </span>
      </div>

      {/* Content */}
      <div className="container relative z-[10] mx-auto px-4 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary text-white text-sm font-bold tracking-wider mb-6">
            SINCE 2004
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}>
            20년의 맛, <br />
            <span className="text-primary">변하지 않는</span> 신뢰
          </h1>
          
          <p className="text-2xl md:text-4xl text-white font-bold mb-10" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
            네가 오면 네오피자
          </p>

          {/* 이중 타깃 CTA 섹션 — 가독성을 위해 반투명 어두운 패널 위에 배치 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-6 sm:p-8">
            {/* 소비자용: 메뉴 보기 */}
            <div className="flex flex-col items-center text-center sm:border-r border-white/20 sm:pr-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-white/70 mb-3 uppercase">
                <Pizza className="w-4 h-4" /> 고객님께
              </span>
              <p className="text-sm text-white/80 mb-4 font-medium">
                우리의 맛을 경험하세요
              </p>
              <a
                href="#menu"
                className="w-full text-base h-12 px-8 rounded-lg shadow-lg shadow-primary/40 flex items-center justify-center gap-2 group bg-primary hover:bg-orange-600 text-white font-bold transition-all"
              >
                🍕 메뉴 보기
              </a>
            </div>
            
            {/* 예비점주용: 가맹 창업 안내 */}
            <div className="flex flex-col items-center text-center sm:pl-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-white/70 mb-3 uppercase">
                <Briefcase className="w-4 h-4" /> 창업예정자님께
              </span>
              <p className="text-sm text-white/80 mb-4 font-medium">
                신뢰의 파트너가 되세요
              </p>
              <a
                href="#franchise"
                className="w-full text-base h-12 px-8 rounded-lg bg-white/15 border-2 border-white hover:bg-white/25 text-white flex items-center justify-center gap-2 group font-bold transition-all"
              >
                가맹 창업 안내
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-white/60 text-xs font-medium tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
