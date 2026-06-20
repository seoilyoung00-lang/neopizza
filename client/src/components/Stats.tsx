import { motion } from "framer-motion";

const stats = [
  {
    value: "20년+",
    label: "브랜드 역사",
    description: "2004년 창업"
  },
  {
    value: "40개",
    label: "전국 가맹점",
    description: "현재 운영 중"
  },
  {
    value: "수익성 1위",
    label: "피자 프랜차이즈",
    description: "2021년 수상"
  },
  {
    value: "2관왕",
    label: "배달대상",
    description: "배달 서비스 부문"
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#F7F4E9] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-md" />
              <h3 className="text-4xl md:text-5xl font-black text-primary font-poppins mb-4 tracking-tighter">
                {stat.value}
              </h3>
              <h4 className="text-xl font-bold text-[#005F73] mb-2">
                {stat.label}
              </h4>
              <p className="text-muted-foreground font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
