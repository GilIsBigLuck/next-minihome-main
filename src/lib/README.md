# API 구조 가이드

## 구조 개요

```
src/
├── lib/
│   └── api-client.ts      # API 클라이언트 (fetch 래퍼)
├── api/
│   └── health.ts          # Health API 함수
├── types/
│   └── api.ts             # API 타입 정의
├── hooks/
│   └── queries/
│       └── useHealth.ts   # React Query 훅
└── providers/
    └── QueryProvider.tsx  # React Query Provider
```

## 사용 방법

### 1. API 함수 추가

`src/api/` 디렉토리에 새로운 API 파일을 생성합니다.

```typescript
// src/api/example.ts
import { apiClient } from "@/lib/api-client";
import type { ExampleResponse } from "@/types/api";

export const exampleApi = {
  getExample: async (): Promise<ExampleResponse> => {
    return apiClient.get<ExampleResponse>("/api/example");
  },
  
  postExample: async (data: ExampleRequest): Promise<ExampleResponse> => {
    return apiClient.post<ExampleResponse>("/api/example", data);
  },
};
```

### 2. 타입 정의 추가

`src/types/api.ts`에 타입을 추가합니다.

```typescript
export interface ExampleResponse {
  id: string;
  name: string;
}
```

### 3. React Query 훅 생성

`src/hooks/queries/` 디렉토리에 훅을 생성합니다.

```typescript
// src/hooks/queries/useExample.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { exampleApi } from "@/api/example";
import type { ExampleResponse } from "@/types/api";

export function useExample() {
  return useQuery<ExampleResponse>({
    queryKey: ["example"],
    queryFn: () => exampleApi.getExample(),
    staleTime: 5 * 60 * 1000, // 5분
  });
}
```

### 4. 컴포넌트에서 사용

```typescript
"use client";

import { useHealth } from "@/hooks/queries/useHealth";

export default function MyComponent() {
  const { data, isLoading, error } = useHealth();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.message}</div>;
}
```

## 환경 변수

`.env.local` 파일에 API URL을 설정할 수 있습니다:

```env
NEXT_PUBLIC_API_URL=https://api.minihome.page
```

설정하지 않으면 기본값 `https://api.minihome.page`가 사용됩니다.

