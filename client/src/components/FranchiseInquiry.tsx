import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MapPin, Mail } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export default function FranchiseInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.budget) {
      toast({
        title: "입력 확인",
        description: "성함, 연락처, 예산 범위는 필수 항목입니다.",
        variant: "destructive",
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "전송 설정 누락",
        description: "EmailJS 환경변수가 설정되지 않았습니다. 관리자에게 문의해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          brand: "네오피자",
          name: formData.name,
          phone: formData.phone,
          budget: formData.budget,
          location: formData.location || "미기입",
          message: `[네오피자 가맹문의]\n${formData.message || "없음"}`,
          submitted_at: new Date().toLocaleString("ko-KR"),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: "가맹 문의가 접수되었습니다",
        description: "담당자가 확인 후 빠르게 연락드리겠습니다. 감사합니다.",
      });
      setFormData({ name: "", phone: "", budget: "", location: "", message: "" });
    } catch (error) {
      console.error("[EmailJS] send failed:", error);
      const detail =
        error && typeof error === "object" && "text" in error
          ? String((error as { text?: unknown }).text)
          : error instanceof Error
            ? error.message
            : String(error);
      toast({
        title: "전송 실패",
        description: `잠시 후 다시 시도하거나 전화로 문의해주세요. (${detail})`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="py-24 relative"
      style={{ background: "linear-gradient(135deg, #2E5266 0%, #1E3F52 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-bold text-primary tracking-widest mb-3 font-poppins">
            FRANCHISE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            가맹 창업 문의
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            20년 노하우로 검증된 네오피자, 전화 없이도 여기서 바로 상담 신청하세요.
            <br className="hidden md:block" />
            남겨주시면 담당자가 직접 연락드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 폼 */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8 shadow-2xl shadow-black/30 border-0 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="inq-name" className="text-sm font-bold text-secondary mb-2 block">
                      성함 <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="inq-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="inq-phone" className="text-sm font-bold text-secondary mb-2 block">
                      연락처 <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="inq-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="010-0000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label className="text-sm font-bold text-secondary mb-2 block">
                      창업 예산 <span className="text-primary">*</span>
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="예산 범위를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3,000만원 이하">3,000만원 이하</SelectItem>
                        <SelectItem value="3,000만원~5,000만원">3,000만원~5,000만원</SelectItem>
                        <SelectItem value="5,000만원~1억원">5,000만원~1억원</SelectItem>
                        <SelectItem value="1억원~2억원">1억원~2억원</SelectItem>
                        <SelectItem value="상담 후 결정">상담 후 결정</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="inq-location" className="text-sm font-bold text-secondary mb-2 block">
                      개설 희망지역
                    </Label>
                    <Input
                      id="inq-location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="예: 대구시 수성구"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inq-message" className="text-sm font-bold text-secondary mb-2 block">
                    문의사항
                  </Label>
                  <Textarea
                    id="inq-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    placeholder="창업 관련 궁금한 점이나 요청사항을 자유롭게 남겨주세요."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl font-bold text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all"
                >
                  <Send className="mr-2 w-5 h-5" />
                  {isSubmitting ? "전송 중..." : "가맹 문의 신청하기"}
                </Button>

                <p className="text-xs text-secondary/50 text-center pt-1">
                  남겨주신 정보는 가맹 상담 목적으로만 사용됩니다.
                </p>
              </form>
            </Card>
          </div>

          {/* 연락처 안내 */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white">전화 문의</h4>
              </div>
              <p className="text-white/70 text-lg font-bold font-poppins">1670-4538</p>
              <p className="text-white/40 text-xs mt-1">평일 10:00 - 18:00 (토·일·공휴일 휴무)</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white">이메일</h4>
              </div>
              <p className="text-white/70 text-sm">neofnb@naver.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-white">본사</h4>
              </div>
              <p className="text-white/70 text-sm">대구광역시 수성구 들안로 376-5, 3층</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
