import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "메뉴", href: "#" },
    { label: "브랜드스토리", href: "#" },
    { label: "가맹창업", href: "#" },
    { label: "회사소개", href: "#" },
    { label: "가맹문의", href: "#" },
  ];

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
          <Link href="/" className="font-poppins text-3xl font-black tracking-tighter text-white">
            NEO<span className="text-primary">PIZZA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="font-medium transition-colors text-white/90 hover:text-white">메뉴소개</a>
            <a href="#" className="font-medium transition-colors text-white/90 hover:text-white">매장찾기</a>
            <a href="#story" className="font-medium transition-colors text-white/90 hover:text-white">네오 스토리</a>
            <a href="#franchise" className="font-medium transition-colors text-white/90 hover:text-white">가맹안내</a>
            <a href="#" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
              <ShieldCheck className="w-5 h-5" />
              가맹 문의하기
            </a>
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
          <a href="#" className="text-secondary font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>메뉴소개</a>
          <a href="#" className="text-secondary font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>매장찾기</a>
          <a href="#" className="text-secondary font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>네오 스토리</a>
          <a href="#" className="text-secondary font-medium py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>가맹안내</a>
          <a href="#" className="bg-primary text-white text-center font-bold py-3 mt-2 rounded-lg flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <ShieldCheck className="w-5 h-5" />
            가맹 문의하기
          </a>
        </div>
      )}
    </header>
  );
}
