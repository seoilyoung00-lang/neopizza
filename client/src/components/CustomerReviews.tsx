import { motion } from "framer-motion";

const reviews = [
  {
    quote: "쪽파크림치즈피자는 진짜 중독성 있어요. 다른 피자집은 못 가겠어요.",
    source: "배달앱 리뷰"
  },
  {
    quote: "20년 된 브랜드답게 맛이 일정해요. 어느 매장 가도 똑같이 맛있어요.",
    source: "네이버 리뷰"
  },
  {
    quote: "고르곤졸라 꿀 조합은 진짜 레전드. 가족들 모두 좋아하는 단골 피자집.",
    source: "카카오 리뷰"
  }
];

export default function CustomerReviews() {
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
            REVIEWS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            고객들의 이야기
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            전국 40개 매장 고객님들의 진짜 후기
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="text-xl mb-4 tracking-wider">
                ★★★★★
              </div>
              <p className="text-secondary text-lg font-medium leading-relaxed mb-6 flex-grow">
                "{review.quote}"
              </p>
              <p className="text-sm text-muted-foreground font-bold">
                — {review.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
