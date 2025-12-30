# Dialog 사용 가이드

Radix UI Dialog를 사용한 Alert와 Confirm 팝업 컴포넌트 사용 방법입니다.

## 설치

이미 설치되어 있습니다:
- `@radix-ui/react-dialog`

## 기본 사용법

### 1. Alert 사용

```tsx
"use client";

import { Alert } from "@/lib/dialog";

export default function MyComponent() {
  const handleError = async () => {
    await Alert({
      message: '사용자 정보가 없습니다. 다시 인증해주세요.',
      title: '오류',
    });
    router.push('/auth/reset-pw');
    return;
  };

  return <button onClick={handleError}>에러 발생</button>;
}
```

### 2. Confirm 사용

```tsx
"use client";

import { Confirm } from "@/lib/dialog";

export default function MyComponent() {
  const handlePayment = async () => {
    if (cocoMoneyBalance < paymentData.amount) {
      const confirmed = await Confirm({
        title: '충전이 필요합니다',
        message: '보유 충전머니가 부족합니다.<br/>충전을 진행하시겠습니까?',
        type: 'warning'
      });
      
      if (confirmed) {
        // 충전 팝업 열기
        setIsCocoMoneyChargePopupOpen(true);
      }
      return;
    }
  };

  return <button onClick={handlePayment}>결제하기</button>;
}
```

## 타입 옵션

### AlertOptions

```typescript
{
  message: string;        // 필수: 표시할 메시지
  title?: string;        // 선택: 팝업 제목 (기본값: "알림")
  type?: "info" | "success" | "warning" | "error";  // 선택: 팝업 타입 (기본값: "info")
}
```

### ConfirmOptions

```typescript
{
  message: string;        // 필수: 표시할 메시지
  title?: string;         // 선택: 팝업 제목 (기본값: "확인")
  type?: "info" | "success" | "warning" | "error";  // 선택: 팝업 타입 (기본값: "info")
}
```

## 타입별 스타일

- **info**: 파란색 (기본)
- **success**: 초록색
- **warning**: 노란색
- **error**: 빨간색

## HTML 메시지 지원

메시지에 `<br/>` 또는 `<br>` 태그를 사용할 수 있습니다:

```tsx
await Alert({
  message: '첫 번째 줄<br/>두 번째 줄',
  title: '알림',
});
```

## Hook 방식 사용 (권장)

전역 함수 대신 hook을 사용하는 것도 가능합니다:

```tsx
"use client";

import { useAlert, useConfirm } from "@/hooks";

export default function MyComponent() {
  const Alert = useAlert();
  const Confirm = useConfirm();

  const handleClick = async () => {
    await Alert({
      message: '알림 메시지',
      title: '제목',
    });

    const confirmed = await Confirm({
      message: '확인하시겠습니까?',
      type: 'warning',
    });
  };

  return <button onClick={handleClick}>클릭</button>;
}
```

## 주의사항

1. **컴포넌트 내부에서만 사용**: `Alert`와 `Confirm` 함수는 React 컴포넌트 내부에서만 사용할 수 있습니다.
2. **DialogProvider 필요**: `layout.tsx`에 `DialogProvider`가 포함되어 있어야 합니다 (이미 설정됨).
3. **비동기 처리**: `Alert`와 `Confirm`은 Promise를 반환하므로 `await`를 사용해야 합니다.

