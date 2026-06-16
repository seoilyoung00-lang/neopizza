import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShieldCheck } from "lucide-react";

// 해당 id의 섹션으로 부드럽게 스크롤
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 클릭 시: 홈이면 바로 스크롤, 다른 페이지면 홈으로 이동 후 해당 섹션으로 스크롤
  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location === "/") {
      scrollToSection(id);
    } else {
      // Home 컴포넌트가 마운트되며 해시를 읽어 스크롤 처리
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
      style={isScrolled ? { backgroundColor: 'rgba(30, 67, 85, 0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' } : {}}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo-white.png" alt="네오피자" className="h-5 md:h-6 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => goToSection("menu")} className="font-medium transition-colors text-white/90 hover:text-white">메뉴소개</button>
            <Link href="/stores" className="font-medium transition-colors text-white/90 hover:text-white">매장찾기</Link>
            <button onClick={() => goToSection("story")} className="font-medium transition-colors text-white/90 hover:text-white">네오 스토리</button>
            <button onClick={() => goToSection("franchise")} className="font-medium transition-colors text-white/90 hover:text-white">가맹안내</button>
            <button onClick={() => goToSection("inquiry")} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
              <ShieldCheck className="w-5 h-5" />
              가맹 문의하기
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
          <button className="text-left text-secondary font-medium py-2 border-b border-gray-100" onClick={() => goToSection("menu")}>메뉴소개</button>
          <Link href="/stores" className="text-secondary font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>매장찾기</Link>
          <button className="text-left text-secondary font-medium py-2 border-b border-gray-100" onClick={() => goToSection("story")}>네오 스토리</button>
          <button className="text-left text-secondary font-medium py-2 border-b border-gray-100" onClick={() => goToSection("franchise")}>가맹안내</button>
          <button className="bg-primary text-white text-center font-bold py-3 mt-2 rounded-lg flex items-center justify-center gap-2" onClick={() => goToSection("inquiry")}>
            <ShieldCheck className="w-5 h-5" />
            가맹 문의하기
          </button>
        </div>
      )}
    </header>
  );
}
