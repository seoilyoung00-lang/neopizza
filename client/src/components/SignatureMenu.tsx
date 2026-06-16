import { motion } from "framer-motion";
import { Link } from "wouter";

const featured = {
  name: "쪽파크림치즈피자",
  badge: "★ SIGNATURE",
  description: "20년간 사랑받아 온 네오피자의 대표 시그니처 메뉴. 신선한 쪽파와 부드러운 크림치즈의 완벽한 조화.",
  price: "중 23,000 / 대 27,000원",
  image: "/menu/jjokpa.jpg"
};

const sideItems = [
  {
    name: "콤비네이션",
    badge: "BEST",
    price: "중 21,000 / 대 25,000원",
    image: "/menu/combination.jpg"
  },
  {
    name: "반반피자",
    badge: "HIT",
    price: "중 22,000 / 대 26,000원",
    image: "/menu/banban.jpg"
  },
  {
    name: "매콤카레",
    badge: "NEW",
    price: "중 23,000 / 대 27,000원",
    image: "/menu/curry.jpg"
  }
];

export default function SignatureMenu() {
  return (
    <section id="menu" className="py-24 bg-[#F7F4E9] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest mb-3 font-poppins"
          >
            MENU
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-secondary mb-4 font-poppins tracking-tight"
          >
            추천 메뉴
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden group cursor-pointer"
            style={{ minHeight: "420px" }}
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <span className="inline-block w-fit bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wider">
                {featured.badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">{featured.name}</h3>
              <p className="text-white/85 text-sm md:text-base max-w-md mb-4 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">{featured.description}</p>
              <p className="text-white font-bold text-lg font-poppins [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">{featured.price}</p>
            </div>
          </motion.div>

          {/* Right Side - 3 Stacked Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer flex-1"
                style={{ minHeight: "120px" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/50" />
                <div className="absolute inset-0 p-5 flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full mb-2 tracking-wider">
                      {item.badge}
                    </span>
                    <h4 className="text-xl font-bold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">{item.name}</h4>
                  </div>
                  <p className="text-white text-sm font-poppins font-semibold [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/menu" className="text-primary hover:text-primary/80 font-bold text-lg transition-colors inline-flex items-center gap-1 group">
            전체 메뉴 보기
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
