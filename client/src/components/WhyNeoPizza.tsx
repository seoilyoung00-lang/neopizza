import { motion } from "framer-motion";

export default function WhyNeoPizza() {
  return (
    <section id="story" className="py-24 bg-[#2E5266] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white/80 text-sm font-bold tracking-widest mb-6 border border-white/20 font-poppins">
              네오스토리
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              대구에서 시작된<br />
              <span className="text-primary">완벽주의 피자</span>{'의 여정'}
            </h2>
            <div className="space-y-5 text-white/70 leading-relaxed text-base md:text-lg">
              <p>
                2004년, 대구의 작은 매장에서 시작된 네오피자는 "최고의 재료로 최고의 맛을" 이라는 단 하나의 신념으로 출발했습니다.
              </p>
              <p>
                남들이 원가를 줄일 때, 우리는 재료에 투자했습니다. 남들이 빠른 확장을 택할 때, 우리는 맛의 완성도를 택했습니다. 그 결과 20년이 지난 지금, 전국 40여 개 가맹점 모두 변함없는 맛을 자랑합니다.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-primary font-bold text-sm tracking-widest mb-3">사회공헌</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>경대병원 피자 기부</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>(사)태선복지재단 사랑 나눔 물품 기부 (2천만원)</li>
                </ul>
              </div>
              <a href="#franchise" className="inline-flex items-center gap-1 mt-8 text-primary hover:text-primary/80 font-bold text-lg transition-colors group">
                가맹 창업 안내
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center gap-10"
          >
            <div className="relative w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/store-front.jpg"
                  alt="네오피자 매장"
                  className="w-full h-[350px] md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-primary text-white py-3 px-6 rounded-2xl shadow-lg shadow-primary/30">
                <p className="font-poppins font-black text-2xl md:text-3xl">20+</p>
                <p className="text-sm font-bold text-white/90">Years of History</p>
              </div>
            </div>

            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-primary font-bold text-xs tracking-widest mb-4 font-poppins">MILESTONES</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { year: "2004", text: "네오피자 창업\n대구 수성구" },
                  { year: "2017", text: "법인 전환\n(주)네오에프앤비" },
                  { year: "2018", text: "브랜드대상\n수상" },
                  { year: "2021", text: "수익성 1위\n뮤즈 3관왕" },
                  { year: "2022", text: "배달대상\n2관왕" },
                  { year: "2025", text: "마이피자\n런칭" }
                ].map((item, i, arr) => (
                  <div key={item.year} className="relative text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mb-2" />
                      {i < arr.length - 1 && (
                        <div className="hidden md:block absolute top-1.5 left-[calc(50%+6px)] w-[calc(100%-6px)] h-px bg-white/15" />
                      )}
                      <p className="font-poppins font-black text-primary text-sm">{item.year}</p>
                      <p className="text-white/50 text-[10px] mt-1 leading-snug whitespace-pre-line">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
