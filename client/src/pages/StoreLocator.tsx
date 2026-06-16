import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Phone, Navigation } from "lucide-react";
import Nav from "@/components/Nav";
import storesData from "@/data/stores.json";

// stores.json 타입 정의
interface Store {
  id: string;
  name: string;
  region: string;
  address: string;
  phone: string;
  type: string;
}

const regions: string[] = storesData.regions;
const stores: Store[] = storesData.stores;

// 카카오맵 길찾기 URL 생성
function kakaoMapUrl(store: Store) {
  return `https://map.kakao.com/?q=${encodeURIComponent(`${store.name} ${store.address}`)}`;
}

export default function StoreLocator() {
  // 선택된 지역 탭 ('전체' 또는 region 값)
  const [activeRegion, setActiveRegion] = useState<string>("전체");

  // 페이지 진입 시 항상 최상단부터 보이도록 (메인에서 스크롤 후 진입해도 맨 위로)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 지역별 매장 수 (탭 라벨에 표시)
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const region of regions) {
      counts[region] = stores.filter((s) => s.region === region).length;
    }
    return counts;
  }, []);

  // 현재 탭에 해당하는 매장 목록
  const visibleStores = useMemo(
    () =>
      activeRegion === "전체"
        ? stores
        : stores.filter((s) => s.region === activeRegion),
    [activeRegion]
  );

  // 탭 구성: '전체' + regions 순서
  const tabs: { label: string; count: number }[] = [
    { label: "전체", count: stores.length },
    ...regions.map((r) => ({ label: r, count: regionCounts[r] })),
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Nav />

      {/* 헤더 */}
      <section className="relative pt-32 pb-12 bg-[#1E3F52] text-white">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> 홈으로
          </Link>
          <span className="text-sm text-primary font-bold mb-3 block">STORE</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3">
            네오피자 매장 찾기
          </h1>
          <p className="text-white/70">
            전국 <span className="text-primary font-bold">{stores.length}개</span> 매장에서
            20년 전통의 맛을 만나보세요.
          </p>
        </div>
      </section>

      {/* 지역 필터 탭 (상단 네비 바로 아래에 고정) */}
      <div className="sticky top-[64px] md:top-[72px] z-40 bg-[#F7F4E9] border-b border-black/5 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeRegion === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveRegion(tab.label)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "bg-white text-secondary hover:bg-[#2E5266]/10 border border-black/5"
                  }`}
                >
                  {tab.label}{" "}
                  <span className={isActive ? "text-white/80" : "text-muted-foreground"}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 매장 카드 그리드 */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground mb-6">
            <span className="font-bold text-secondary">{visibleStores.length}개</span> 매장
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleStores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-secondary text-lg leading-snug">
                    {store.name}
                  </h3>
                  {store.type === "직영" && (
                    <span className="shrink-0 bg-primary text-white text-xs font-black px-2.5 py-1 rounded-full">
                      직영
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-5 flex-1">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#2E5266]" />
                    <span>{store.address}</span>
                  </p>
                  <a
                    href={`tel:${store.phone}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors w-fit"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-[#2E5266]" />
                    <span className="font-medium">{store.phone}</span>
                  </a>
                </div>

                <a
                  href={kakaoMapUrl(store)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#2E5266] hover:bg-[#254557] text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  카카오맵 길찾기
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
