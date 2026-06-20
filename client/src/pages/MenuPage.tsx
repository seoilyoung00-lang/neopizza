import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ImageIcon } from "lucide-react";
import Nav from "@/components/Nav";
import menuData from "@/data/menu.json";

// menu.json 타입 정의
interface MenuOption {
  size?: string;
  delivery: number;
  pickup: number;
  original?: number;
  discount?: number;
}
interface MenuItem {
  name: string;
  desc?: string;
  badges?: string[];
  image?: string;
  options: MenuOption[];
}
interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
interface MenuData {
  updatedAt: string;
  note: string;
  categories: MenuCategory[];
}

const data = menuData as unknown as MenuData;
const categories = data.categories;

// 원 단위 가격 포맷
const won = (n: number) => `${n.toLocaleString()}원`;

// 배지 색상 구분 (브랜드 톤 유지)
function badgeClass(badge: string) {
  switch (badge) {
    case "인기":
      return "bg-primary text-white"; // 오렌지
    case "사장님 추천":
      return "bg-[#005F73] text-white"; // 틸
    case "한그릇 할인":
      return "bg-[#B91C1C] text-white"; // 할인 강조(레드)
    default:
      return "bg-[#F7F4E9] text-secondary border border-black/10"; // 베이지
  }
}

// 가격 한 줄 렌더 (배달/픽업, 할인 표시)
function PriceLine({ opt }: { opt: MenuOption }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
      {opt.size && (
        <span className="text-xs font-bold text-white bg-[#005F73] rounded px-1.5 py-0.5">
          {opt.size}
        </span>
      )}
      {opt.discount != null && (
        <span className="text-sm font-black text-[#B91C1C]">{opt.discount}%</span>
      )}
      {opt.original != null && (
        <span className="text-sm text-muted-foreground line-through">{won(opt.original)}</span>
      )}
      {opt.delivery === opt.pickup ? (
        <span className="text-base font-bold text-secondary">{won(opt.delivery)}</span>
      ) : (
        <span className="text-base font-bold text-secondary">
          {won(opt.delivery)}
          <span className="text-muted-foreground font-medium mx-1">/</span>
          {won(opt.pickup)}
        </span>
      )}
    </div>
  );
}

export default function MenuPage() {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? "");

  // 페이지 진입 시 항상 최상단부터 보이도록 (메인에서 스크롤 후 진입해도 맨 위로)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 스크롤에 따라 현재 보고 있는 카테고리 추적 (상단 고정바 높이만큼 보정)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id.replace("cat-", ""));
        }
      },
      { rootMargin: "-150px 0px -55% 0px", threshold: 0 }
    );
    categories.forEach((cat) => {
      const el = document.getElementById(`cat-${cat.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // 활성 탭이 바뀌면 탭바 안에서 해당 탭이 보이도록 가로 스크롤
  useEffect(() => {
    const btn = document.getElementById(`tab-${activeId}`);
    btn?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [activeId]);

  // 카테고리 탭 클릭 → 해당 섹션으로 스크롤 (고정바에 안 가리게 scroll-mt 적용됨)
  const scrollToCategory = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(`cat-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Nav />

      {/* 헤더 */}
      <section className="relative pt-32 pb-12 bg-[#004858] text-white">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> 홈으로
          </Link>
          <span className="text-sm text-primary font-bold mb-3 block">MENU</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3">전체 메뉴</h1>
          <p className="text-white/70">
            네가 오면 네오피자 — 20년 전통의 맛을 메뉴판에서 만나보세요.
          </p>
        </div>
      </section>

      {/* 카테고리 바로가기 탭 (상단 네비 바로 아래에 고정) */}
      <div className="sticky top-[64px] md:top-[72px] z-40 bg-[#F7F4E9] border-b border-black/5 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => {
              const active = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.id}`}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                    active
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-secondary border-black/5 hover:bg-primary/10"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 카테고리별 메뉴 섹션 */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((cat) => (
            <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-[150px]">
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-5 pb-3 border-b-2 border-primary">
                {cat.name}
              </h2>

              <div className="divide-y divide-gray-100">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex gap-4 py-5">
                    {/* 왼쪽: 정보 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="font-bold text-secondary text-lg leading-snug">
                          {item.name}
                        </h3>
                        {item.badges?.map((badge) => (
                          <span
                            key={badge}
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${badgeClass(badge)}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {item.desc && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {item.desc}
                        </p>
                      )}

                      <div className="space-y-1.5">
                        {item.options.map((opt, i) => (
                          <PriceLine key={i} opt={opt} />
                        ))}
                      </div>
                    </div>

                    {/* 오른쪽: 정사각 썸네일 */}
                    <div className="shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover bg-[#F7F4E9]"
                        />
                      ) : (
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-[#F7F4E9] border border-black/5 flex items-center justify-center text-[#005F73]/40">
                          <ImageIcon className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
