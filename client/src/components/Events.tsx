import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "쪽파크림치즈피자 신메뉴 출시",
    date: "2025.01 ~ 상시",
    badgeText: "진행중",
    bgColor: "bg-[#005F73]",
    badgeColor: "bg-primary"
  },
  {
    id: 2,
    title: "마이피자 브랜드 런칭 기념 이벤트",
    date: "2025.07 ~",
    badgeText: "NEW",
    bgColor: "bg-[#3D7A4A]",
    badgeColor: "bg-primary"
  },
  {
    id: 3,
    title: "가맹점 모집",
    date: "2025년 상시 모집중",
    badgeText: "모집중",
    bgColor: "bg-primary",
    badgeColor: "bg-[#005F73]"
  }
];

export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest mb-3 font-poppins"
          >
            NEWS & EVENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-secondary tracking-tight"
          >
            최신 이벤트
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F7F4E9] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className={`aspect-[4/3] relative overflow-hidden flex items-center justify-center ${event.bgColor}`}>
                <span className="text-white/20 font-black text-4xl font-poppins tracking-tighter">
                  NEO PIZZA
                </span>
                <div className={`absolute top-4 left-4 ${event.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {event.badgeText}
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <span className="inline-block w-fit px-3 py-1 bg-white text-muted-foreground text-xs font-bold rounded-full mb-3">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <button className="w-full text-center text-primary font-bold text-sm hover:bg-primary/5 py-3 rounded-xl transition-colors">
                    자세히 보기
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
