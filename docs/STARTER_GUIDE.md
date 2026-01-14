# 🚀 프로젝트 시작 가이드 (For Starter)

이 문서는 `next-minihome-main` 프로젝트를 처음 시작하는 개발자를 위한 가이드입니다. 특히 **Tailwind CSS**와 **React Query**의 원리와 사용법에 중점을 둡니다.

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [Tailwind CSS 원리와 사용법](#tailwind-css-원리와-사용법)
3. [React Query 원리와 사용법](#react-query-원리와-사용법)
4. [프로젝트 구조](#프로젝트-구조)
5. [주요 개념 설명](#주요-개념-설명)

---

## 프로젝트 개요

이 프로젝트는 **Next.js 15** 기반의 미니멀 웹 에이전시 포트폴리오 사이트입니다.

### 기술 스택
- **프레임워크**: Next.js 15.5.7 (App Router)
- **스타일링**: Tailwind CSS 3.4.1
- **데이터 페칭**: TanStack React Query 5.90.12
- **UI 라이브러리**: Radix UI (Dialog)
- **타입 안정성**: TypeScript 5
- **환경 변수 관리**: @t3-oss/env-nextjs

### 주요 기능
- 프로젝트 갤러리 표시
- 템플릿 목록 표시
- 다크 모드 지원
- 헬스 모니터링
- 연락처 폼

---

## Tailwind CSS 원리와 사용법

### 🎨 Tailwind CSS란?

Tailwind CSS는 **유틸리티 퍼스트(Utility-First)** CSS 프레임워크입니다. 기존 CSS 프레임워크와 달리 미리 정의된 클래스를 조합하여 스타일을 작성합니다.

#### 전통적인 CSS vs Tailwind CSS

**전통적인 방식:**
```css
/* styles.css */
.card {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

```jsx
<div className="card">내용</div>
```

**Tailwind 방식:**
```jsx
<div className="p-6 bg-white rounded-lg shadow-sm">내용</div>
```

### 🔧 프로젝트에서의 Tailwind 설정

#### 1. 설정 파일 (`tailwind.config.ts`)

```typescript
const config: Config = {
  darkMode: "class",  // 다크 모드 활성화 (class 기반)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        "background-light": "#fcfcfc",
        "background-dark": "#0f0f0f",
        // ... 커스텀 색상
      },
      fontFamily: {
        display: ['"Rubik"', "sans-serif"],
        body: ['"Noto Sans KR"', '"Inter"', "sans-serif"],
      },
    },
  },
};
```

**핵심 개념:**
- `content`: Tailwind가 스캔할 파일 경로. 이 경로에 있는 클래스만 최종 CSS에 포함됩니다.
- `theme.extend`: 기본 테마를 확장하여 커스텀 값 추가
- `darkMode: "class"`: HTML 요소에 `dark` 클래스를 추가하여 다크 모드 제어

#### 2. 전역 스타일 (`globals.css`)

```css
@tailwind base;      /* 기본 스타일 리셋 */
@tailwind components; /* 컴포넌트 클래스 */
@tailwind utilities;   /* 유틸리티 클래스 */
```

이 세 줄이 Tailwind의 모든 유틸리티 클래스를 생성합니다.

### 💡 Tailwind 사용 패턴

#### 1. 반응형 디자인

```jsx
// 모바일: text-2xl, 데스크톱: text-4xl
<h1 className="text-2xl md:text-4xl">제목</h1>

// 모바일: flex-col, 데스크톱: flex-row
<div className="flex flex-col md:flex-row">...</div>
```

**브레이크포인트:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

#### 2. 다크 모드

```jsx
// 라이트 모드: bg-white, 다크 모드: bg-[#141414]
<div className="bg-white dark:bg-[#141414]">
  <p className="text-gray-900 dark:text-gray-100">텍스트</p>
</div>
```

프로젝트에서는 `layout.tsx`의 `body`에 다크 모드 클래스가 적용됩니다:
```jsx
<body className="bg-background-light dark:bg-background-dark">
```

#### 3. 상태 기반 스타일 (Hover, Focus 등)

```jsx
// 호버 시 그림자와 이동 효과
<div className="shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
  카드
</div>

// 그룹 호버 (부모 호버 시 자식 스타일 변경)
<div className="group">
  <span className="text-gray-300 group-hover:text-black">아이콘</span>
</div>
```

#### 4. 실제 예시: `Projects.tsx`

```jsx
<section className="py-24 px-6 bg-white dark:bg-[#141414]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {projects.map((project) => (
        <a
          className="group cursor-pointer block"
          href={project.projectUrl}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg 
                          border border-gray-100 dark:border-gray-800 
                          shadow-sm transition-all duration-500 
                          group-hover:shadow-2xl group-hover:-translate-y-2">
            <img className="w-full h-full object-cover 
                           transition duration-1000 
                           group-hover:scale-105" 
                 src={project.imgUrl} 
            />
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
```

**분석:**
- `py-24 px-6`: 패딩 (상하 24, 좌우 6)
- `max-w-7xl mx-auto`: 최대 너비 제한 + 중앙 정렬
- `grid grid-cols-1 md:grid-cols-2`: 그리드 레이아웃 (모바일 1열, 데스크톱 2열)
- `group`: 그룹 호버 기능 활성화
- `transition-all duration-500`: 모든 속성에 500ms 전환 효과

### 🎯 Tailwind의 장점

1. **빠른 개발**: 클래스만 추가하면 스타일 완성
2. **일관성**: 디자인 시스템을 유틸리티로 강제
3. **번들 크기 최적화**: 사용하지 않는 클래스는 최종 CSS에서 제거
4. **반응형 디자인 용이**: 브레이크포인트 접두사만 추가
5. **다크 모드 간편**: `dark:` 접두사로 쉽게 구현

---

## React Query 원리와 사용법

### 🔄 React Query란?

React Query (TanStack Query)는 **서버 상태 관리**를 위한 라이브러리입니다. 데이터 페칭, 캐싱, 동기화, 에러 처리 등을 자동화합니다.

#### 왜 React Query를 사용하나요?

**기존 방식의 문제점:**
```jsx
// ❌ 문제점들
function Projects() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // 캐싱 없음, 리페칭 로직 없음, 로딩/에러 상태 관리 복잡
}
```

**React Query 사용:**
```jsx
// ✅ 간단하고 강력함
function Projects() {
  const { data, isLoading, error } = useProjects();
  // 캐싱, 리페칭, 에러 처리 모두 자동!
}
```

### 🏗️ 프로젝트에서의 React Query 설정

#### 1. QueryProvider 설정 (`src/providers/QueryProvider.tsx`)

```typescript
export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,        // 1분간 데이터를 "신선"하게 유지
            refetchOnWindowFocus: false,  // 창 포커스 시 자동 리페칭 비활성화
            retry: 1,                     // 실패 시 1번만 재시도
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
```

**핵심 개념:**
- `QueryClient`: 모든 쿼리 상태를 관리하는 중앙 저장소
- `staleTime`: 데이터가 "오래된(stale)" 것으로 간주되기까지의 시간
- `refetchOnWindowFocus`: 브라우저 탭이 다시 포커스될 때 자동 리페칭 여부
- `ReactQueryDevtools`: 개발 환경에서 쿼리 상태를 시각적으로 확인

#### 2. 앱에 Provider 적용 (`src/app/layout.tsx`)

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
```

모든 페이지와 컴포넌트가 QueryProvider 내부에 있어야 `useQuery` 훅을 사용할 수 있습니다.

### 📝 Custom Hook 패턴

#### 1. API 함수 정의 (`src/api/projects.ts`)

```typescript
export const projectsApi = {
  getProjects: async (): Promise<ProjectsResponse> => {
    return apiClient.get<ProjectsResponse>("/projects");
  },
};
```

#### 2. Custom Hook 생성 (`src/hooks/queries/useProjects.ts`)

```typescript
export function useProjects() {
  return useQuery<ProjectsResponse>({
    queryKey: ["projects"],                    // 쿼리 식별자
    queryFn: () => projectsApi.getProjects(),  // 데이터 페칭 함수
    staleTime: 5 * 60 * 1000,                  // 5분간 캐시 유지
    refetchOnMount: true,                      // 컴포넌트 마운트 시 리페칭
    refetchOnWindowFocus: false,               // 창 포커스 시 리페칭 비활성화
  });
}
```

**핵심 개념:**
- `queryKey`: 쿼리의 고유 식별자. 배열 형태로 계층 구조 표현 가능
  - 예: `["projects", { id: 1 }]`, `["projects", "list", { page: 1 }]`
- `queryFn`: 실제 데이터를 가져오는 비동기 함수
- `staleTime`: 이 시간 동안은 데이터를 "신선한" 것으로 간주하여 리페칭하지 않음

#### 3. 컴포넌트에서 사용 (`src/components/Projects.tsx`)

```tsx
export default function Projects() {
  const { data, isLoading, error } = useProjects();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류 발생</div>;
  }

  const projects = data?.data?.projects || [];

  return (
    <section>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </section>
  );
}
```

### 🔑 React Query의 핵심 개념

#### 1. 쿼리 상태 (Query States)

```typescript
const {
  data,           // 성공 시 받은 데이터
  isLoading,      // 첫 로딩 중 (캐시 없음)
  isFetching,     // 데이터 페칭 중 (캐시 있어도 true)
  isError,        // 에러 발생 여부
  error,          // 에러 객체
  isSuccess,      // 성공 여부
  refetch,        // 수동 리페칭 함수
} = useQuery({ ... });
```

**`isLoading` vs `isFetching`:**
- `isLoading`: 캐시가 없을 때 첫 로딩 중
- `isFetching`: 데이터를 가져오는 중 (캐시가 있어도 true)

#### 2. 캐싱 (Caching)

React Query는 자동으로 데이터를 캐싱합니다:

```typescript
// 첫 번째 컴포넌트
const { data } = useProjects(); // API 호출 발생

// 두 번째 컴포넌트 (같은 queryKey)
const { data } = useProjects(); // 캐시에서 가져옴 (API 호출 없음)
```

**캐시 무효화:**
```typescript
import { useQueryClient } from "@tanstack/react-query";

function MyComponent() {
  const queryClient = useQueryClient();

  const handleRefresh = () => {
    // 특정 쿼리 무효화 (다음 접근 시 리페칭)
    queryClient.invalidateQueries({ queryKey: ["projects"] });
  };
}
```

#### 3. Stale Time vs Cache Time

```typescript
{
  staleTime: 5 * 60 * 1000,  // 5분: 이 시간 동안은 "신선한" 데이터로 간주
  gcTime: 10 * 60 * 1000,    // 10분: 사용하지 않는 캐시를 메모리에서 제거
}
```

- **staleTime**: 데이터가 "오래된" 것으로 간주되기까지의 시간. 이 시간 내에는 리페칭하지 않음
- **gcTime** (구 cacheTime): 사용하지 않는 쿼리 데이터를 메모리에서 유지하는 시간

#### 4. 자동 리페칭 (Automatic Refetching)

React Query는 다음 상황에서 자동으로 데이터를 다시 가져옵니다:

- 컴포넌트 마운트 시 (`refetchOnMount`)
- 창 포커스 시 (`refetchOnWindowFocus`)
- 네트워크 재연결 시 (`refetchOnReconnect`)
- 데이터가 stale 상태일 때 (`refetchInterval`)

### 🎯 React Query의 장점

1. **자동 캐싱**: 같은 데이터를 여러 번 요청해도 한 번만 API 호출
2. **백그라운드 업데이트**: 사용자가 보는 화면은 캐시 데이터, 백그라운드에서 최신 데이터 가져옴
3. **에러 처리**: 자동 재시도 및 에러 상태 관리
4. **로딩 상태**: `isLoading`, `isFetching` 등 다양한 로딩 상태 제공
5. **옵티미스틱 업데이트**: 낙관적 UI 업데이트 지원
6. **무한 스크롤**: `useInfiniteQuery`로 무한 스크롤 구현 용이

### 📊 데이터 흐름도

```
1. 컴포넌트 마운트
   ↓
2. useProjects() 호출
   ↓
3. React Query가 queryKey ["projects"] 확인
   ↓
4. 캐시에 데이터가 있는가?
   ├─ Yes → staleTime 확인
   │        ├─ 신선함 → 캐시 데이터 반환
   │        └─ 오래됨 → 백그라운드 리페칭
   └─ No → API 호출 (queryFn 실행)
           ↓
5. 성공 → 캐시 저장 → 컴포넌트에 데이터 전달
   실패 → 에러 상태 설정 → 재시도 (retry 옵션에 따라)
```

---

## 프로젝트 구조

```
src/
├── api/              # API 호출 함수들
│   ├── projects.ts
│   ├── templates.ts
│   └── health.ts
│
├── app/              # Next.js App Router
│   ├── api/         # API Routes (프록시 역할)
│   ├── layout.tsx   # 루트 레이아웃
│   ├── page.tsx     # 메인 페이지
│   └── globals.css  # 전역 스타일
│
├── components/       # React 컴포넌트
│   ├── Header.tsx
│   ├── Projects.tsx
│   ├── Templates.tsx
│   └── ...
│
├── hooks/            # Custom Hooks
│   ├── queries/     # React Query 훅들
│   │   ├── useProjects.ts
│   │   ├── useTemplates.ts
│   │   └── useHealth.ts
│   └── useDarkMode.ts
│
├── lib/              # 유틸리티 함수들
│   ├── api-client.ts    # API 클라이언트
│   ├── image-url.ts     # 이미지 URL 처리
│   └── dialog.ts        # 다이얼로그 유틸
│
├── providers/        # Context Providers
│   ├── QueryProvider.tsx
│   └── DialogProvider.tsx
│
└── types/            # TypeScript 타입 정의
    └── api.ts
```

### 주요 디렉토리 설명

#### `api/`
- 외부 API를 호출하는 함수들을 모아둔 곳
- `projectsApi.getProjects()` 같은 형태로 사용

#### `app/api/`
- Next.js API Routes
- CORS 문제 해결을 위한 프록시 역할
- 클라이언트 → Next.js API Route → 외부 API

#### `hooks/queries/`
- React Query를 사용하는 커스텀 훅
- 컴포넌트에서 직접 `useQuery`를 호출하지 않고, 이 훅들을 사용

#### `lib/`
- 재사용 가능한 유틸리티 함수들
- `api-client.ts`: fetch 래퍼
- `image-url.ts`: 이미지 URL 변환 로직

---

## 주요 개념 설명

### 1. Next.js App Router

이 프로젝트는 Next.js 15의 **App Router**를 사용합니다.

**특징:**
- `app/` 디렉토리 기반 라우팅
- Server Components가 기본 (클라이언트 컴포넌트는 `"use client"` 필요)
- 레이아웃 중첩 지원

### 2. API 프록시 패턴

```typescript
// 클라이언트 컴포넌트
const data = await projectsApi.getProjects();
// → /api/projects 호출
// → Next.js API Route가 외부 API 호출
// → CORS 문제 해결
```

**왜 프록시를 사용하나요?**
- 브라우저의 CORS 정책 우회
- API 키 등 민감한 정보를 서버에서만 관리
- 요청/응답 변환 및 로깅 가능

### 3. 타입 안전성

```typescript
// types/api.ts
export interface Project {
  id: number;
  title: string;
  // ...
}

// hooks/queries/useProjects.ts
export function useProjects() {
  return useQuery<ProjectsResponse>({ ... });
  //                    ^ 타입 지정으로 자동완성 및 타입 체크
}
```

TypeScript를 사용하여 API 응답의 타입을 정의하고, 이를 React Query와 연결하여 타입 안전성을 보장합니다.

### 4. 다크 모드 구현

```tsx
// layout.tsx
<body className="bg-background-light dark:bg-background-dark">
  {/* dark 클래스가 추가되면 다크 모드 스타일 적용 */}
</body>
```

Tailwind의 `dark:` 접두사와 HTML의 `dark` 클래스를 조합하여 다크 모드를 구현합니다.

---

## 🚀 다음 단계

1. **프로젝트 실행**
   ```bash
   npm install
   npm run dev
   ```

2. **개발 도구 활용**
   - React Query Devtools: 브라우저에서 쿼리 상태 확인
   - Tailwind IntelliSense: VS Code 확장 프로그램 설치

3. **코드 탐색**
   - `src/components/Projects.tsx`: Tailwind + React Query 사용 예시
   - `src/hooks/queries/useProjects.ts`: 커스텀 훅 패턴
   - `tailwind.config.ts`: 커스텀 테마 설정

4. **학습 자료**
   - [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
   - [React Query 공식 문서](https://tanstack.com/query/latest)
   - [Next.js 공식 문서](https://nextjs.org/docs)

---

## 💡 팁

### Tailwind CSS
- 클래스 이름이 길어지면 컴포넌트로 추출 고려
- `@apply` 지시어로 반복되는 클래스 조합을 CSS 클래스로 만들 수 있음
- JIT(Just-In-Time) 모드로 사용한 클래스만 생성되어 번들 크기 최적화

### React Query
- `queryKey`는 항상 배열로, 계층 구조를 명확히 표현
- `staleTime`과 `gcTime`을 적절히 설정하여 불필요한 API 호출 방지
- `useQuery`의 옵션을 각 쿼리별로 세밀하게 조정 가능

---

**Happy Coding! 🎉**
