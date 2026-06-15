# 네오피자 홈페이지 — 프로젝트 컨텍스트 (CLAUDE.md)

(주)네오에프앤비 네오피자 공식 홈페이지 리뉴얼 프로젝트.
Replit에서 제작 후 로컬(VS Code + Claude Code)로 이전하여 마무리 중.

## 핵심 목표
- 이중 타깃 구조: ① 일반 소비자(메뉴·매장·리뷰) + ② 예비 점주(가맹 창업 설득)
- 20년 전통의 신뢰감을 살리면서 가맹 전환율을 높이는 랜딩.

## 기술 스택
- 프론트: Vite 7 + React 19 + TypeScript, Tailwind CSS 4, shadcn/ui, framer-motion, wouter(라우팅), TanStack Query
- 백엔드: Express 5 (tsx로 실행), 진입점 `server/index.ts`. 저장소는 메모리 기반(`MemStorage`) — **DB 없이 동작함**
- DB: Drizzle ORM + PostgreSQL 스키마는 정의돼 있으나 런타임 미사용. `npm run db:push`는 DATABASE_URL 필요(지금은 불필요)

## 실행 방법
```bash
npm install          # 최초 1회 (이미 완료됨)
npm run dev          # 개발 서버 → http://localhost:3001
npm run build        # 프로덕션 빌드
npm start            # 프로덕션 실행
```
포트를 바꾸려면: `PORT=3002 npm run dev`

## macOS 관련 메모 (이전 시 수정한 부분)
- 원래 Replit 기본 포트 5000은 macOS의 AirPlay가 점유 → 기본 포트를 **3001**로 변경함
- `server/index.ts`의 `reusePort: true` 옵션은 macOS에서 미지원(ENOTSUP)이라 **제거**함 (Replit/Linux 동작엔 영향 없음)

## 현재 구현 상태
페이지: `client/src/pages/Home.tsx` (단일 라우트 `/`)
섹션 순서:
Nav → Hero → Stats → SignatureMenu → CustomerReviews → WhyNeoPizza → FranchiseBenefits → SocialContribution → FranchiseProcess → Events → 플로팅 '매장 찾기' 버튼 → Footer
- 각 섹션 컴포넌트: `client/src/components/*.tsx`
- 이미지: `client/src/assets/images/` (hero-pizza, menu-*)

## 남은 작업 (우선순위순)
1. **히어로 CTA 분리** — 소비자용('메뉴 보기')과 예비점주용('가맹 창업 안내') 동선을 시각적으로 명확히 구분
2. **가맹 섹션 강화** — 가맹 비용, 수익 데이터(2021 수익성 1위 수상 등), 가맹 절차를 예비점주가 설득되도록 구체화
3. **매장 찾기 기능 연결** — 현재 `href="#"` 상태(플로팅 버튼)
4. **푸터 링크 연결** — 이용약관 / 개인정보처리방침 / 가맹안내

## 브랜드 가이드
- 컬러: 틸 `#2A5A71` / 오렌지 `#DC5B21` / 베이지 `#F7F4E9` — (현재 코드엔 `#1E3F52` 계열도 사용 중, 통일 여부 확인 필요)
- 톤앤매너: 신뢰 · 20년 전통 · 가족 · 따뜻함. "동네 사장님이 직접 쓴 느낌"으로, 밝고 활기차되 신뢰감 있게
- 슬로건: "네가 오면 네오피자" / 시그니처 메뉴: 쪽파크림치즈피자
- 회사: (주)네오에프앤비 · 대구광역시 수성구 동인로 376-5, 3층 · 고객센터 1670-4538

## 코드 규칙
- 주석은 **한국어**로 작성
- 컴포넌트: `client/src/components/`, 페이지: `client/src/pages/`
- 경로 별칭: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`
