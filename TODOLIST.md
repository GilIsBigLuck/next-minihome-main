# Project TODO List

프로젝트를 깔끔한 Next.js 스타터 프로젝트로 정리하기 위한 작업 목록입니다.

## Completed

- [x] tailwind.config.ts 시맨틱 디자인 토큰 시스템으로 업데이트
- [x] .gitignore 정리 (IDE, OS, 캐시 파일 추가)
- [x] .env.example 생성
- [x] 문서 파일 docs/ 폴더로 정리

## High Priority

- [x] README.md 개선 (프로젝트 설명, 설치 가이드, 기술 스택 추가)
- [ ] (선택) 새 코드 작성 시 시맨틱 토큰 사용 권장
  - `text-gray-900` → `text-text-primary`
  - `bg-white` → `bg-bg-default`
  - 기존 스타일은 그대로 동작함

## Medium Priority

- [ ] Tailwind 플러그인 추가 검토
  - @tailwindcss/typography (prose 클래스)
  - @tailwindcss/forms (폼 스타일링)
  - @tailwindcss/aspect-ratio (비율 유틸리티)
- [ ] 공통 컴포넌트 추출 (Button, Card, Input 등)
- [ ] 에러 바운더리 추가
- [ ] 로딩 상태 UI 개선

## Low Priority

- [ ] 테스트 설정 (Jest, React Testing Library)
- [ ] Storybook 설정 (컴포넌트 문서화)
- [ ] Husky + lint-staged 설정 (커밋 훅)
- [ ] GitHub Actions CI/CD 파이프라인
- [ ] 성능 최적화
  - Next.js Image 컴포넌트 활용
  - Dynamic import (코드 스플리팅)
  - React Query 캐시 시간 조정
- [ ] SEO 최적화 (메타태그, Open Graph)
- [ ] 접근성(a11y) 개선
- [ ] 국제화(i18n) 지원 검토

## Optional

- [ ] 에러 추적 (Sentry)
- [ ] 분석 (Vercel Analytics / Google Analytics)
- [ ] PWA 지원

---

## 파일 구조 가이드

```
src/
├── api/           # API 호출 함수
├── app/           # Next.js App Router
│   ├── api/       # API Routes
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/    # React 컴포넌트
│   ├── ui/        # (추가 예정) 공통 UI 컴포넌트
│   └── dialogs/   # Dialog 컴포넌트
├── hooks/         # Custom Hooks
│   └── queries/   # React Query 훅
├── lib/           # 유틸리티 함수
├── providers/     # Context Providers
├── styles/        # 추가 스타일 (필요시)
└── types/         # TypeScript 타입
```

## 참고 문서

- `docs/STARTER_GUIDE.md` - Tailwind CSS, React Query 사용법
- `docs/REFACTORING.md` - 디자인 토큰 시스템 가이드
- `docs/DIALOG_USAGE.md` - Dialog 컴포넌트 사용법
