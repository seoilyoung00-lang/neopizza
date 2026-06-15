import heroBg from "@/assets/images/hero-pizza.png";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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

      {/* Semi-transparent Teal Overlay */}
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(30, 70, 95, 0.88)' }} />

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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight">
            20년의 맛, <br />
            <span className="text-primary">변하지 않는</span> 신뢰
          </h1>
          
          <p className="text-2xl md:text-4xl text-white font-bold mb-4">
            네가 오면 네오피자
          </p>
          
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-10 font-medium bg-white/10 py-2 px-6 rounded-full backdrop-blur-sm border border-white/20">
            쪽파크림치즈피자 — 20년의 노하우가 빚어낸 네오피자의 시그니처
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
            <a
              href="#menu"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group bg-primary hover:bg-primary/90 text-white font-bold transition-all"
            >
              🍕 메뉴 보기
            </a>
            
            <a
              href="#franchise"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 flex items-center justify-center gap-2 group font-bold transition-all"
            >
              가맹 창업 안내
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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
