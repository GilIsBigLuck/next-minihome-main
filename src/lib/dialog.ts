/**
 * Alert와 Confirm 함수를 export합니다.
 * 
 * @example
 * ```tsx
 * "use client";
 * 
 * import { Alert, Confirm } from "@/lib/dialog";
 * 
 * export default function MyComponent() {
 *   const handleError = async () => {
 *     await Alert({
 *       message: '사용자 정보가 없습니다. 다시 인증해주세요.',
 *       title: '오류',
 *     });
 *   };
 * 
 *   const handleConfirm = async () => {
 *     const confirmed = await Confirm({
 *       title: '충전이 필요합니다',
 *       message: '보유 충전머니가 부족합니다.<br/>충전을 진행하시겠습니까?',
 *       type: 'warning'
 *     });
 *     
 *     if (confirmed) {
 *       // 충전 팝업 열기
 *     }
 *   };
 * 
 *   return <div>...</div>;
 * }
 * ```
 */

// 전역 함수를 re-export
export { Alert, Confirm } from "./dialog-global";
