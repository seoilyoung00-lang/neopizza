import { motion } from "framer-motion";

const cards = [
  {
    title: "칠곡경대병원 피자 기부",
    desc: "코로나19 지역사회 확산 방지를 위해 고군분투하고 있는 의료진과 방역관계자, 자원봉사자들에게 감사와 응원의 마음을 전하고자 피자 100판씩 기부했다.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80"
  },
  {
    title: "경대병원 피자 기부",
    desc: "지역 의료진들의 헌신에 감사함을 전하며 네오피자를 기부했다.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
  },
  {
    title: "(사)태선복지재단 사랑 나눔 물품 기부",
    desc: "어려움을 겪는 이웃에게 2천만원 상당의 사랑 나눔 물품을 전달했다.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80"
  }
];

export default function SocialContribution() {
  return (
    <section className="py-24 bg-[#F7F4E9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest mb-3 font-poppins"
          >
            Social Responsibility
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-secondary tracking-tight"
          >
            지역사회와 함께합니다
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-secondary mb-3 leading-snug">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
