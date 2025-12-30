"use client";

import { useDialog } from "@/providers/DialogProvider";
import type { ConfirmOptions } from "@/providers/DialogProvider";

/**
 * Confirm 팝업을 사용하기 위한 hook
 * 
 * @example
 * ```tsx
 * const Confirm = useConfirm();
 * 
 * const confirmed = await Confirm({
 *   title: '충전이 필요합니다',
 *   message: '보유 충전머니가 부족합니다.<br/>충전을 진행하시겠습니까?',
 *   type: 'warning'
 * });
 * 
 * if (confirmed) {
 *   // 확인 버튼 클릭 시
 * }
 * ```
 */
export function useConfirm() {
  const { showConfirm } = useDialog();

  return async (options: ConfirmOptions): Promise<boolean> => {
    return showConfirm(options);
  };
}

