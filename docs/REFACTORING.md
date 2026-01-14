# Refactoring Guide

## 추가된 디자인 토큰

기존 스타일을 유지하면서 새로운 시맨틱 토큰이 추가되었습니다.

### 추가된 시맨틱 색상

```
text-{primary|secondary|muted|inverse}  // 텍스트 색상
bg-{default|muted|elevated|inverse}     // 배경 색상
border-{default|subtle}                  // 테두리 색상
brand-{primary|accent}                   // 브랜드 색상
state-{success|warning|danger}           // 상태 색상
```

### 추가된 Z-Index

```
z-header:   800
z-dropdown: 900
z-modal:    1000
z-toast:    1100
```

### 추가된 Shadow

```
shadow-card  // 카드 elevation
```

## 기존 스타일 (그대로 유지)

기존에 사용하던 클래스들은 모두 그대로 동작합니다:

- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Colors: `primary`, `background-light`, `background-dark`, `surface-dark`, `card-light`, `card-dark`
- Font: `font-display`, `font-body`
- Border Radius: `rounded`, `rounded-lg`, `rounded-xl`, `rounded-full`, `rounded-oval`
- Animation: `animate-fadeIn`, `animate-slideUp`

## 마이그레이션 가이드 (선택사항)

새 코드 작성 시 시맨틱 토큰 사용을 권장합니다:

| 기존 | 시맨틱 토큰 |
|------|------------|
| `text-gray-900` | `text-text-primary` |
| `text-gray-500` | `text-text-secondary` |
| `bg-white` | `bg-bg-default` |
| `border-gray-200` | `border-border-default` |
