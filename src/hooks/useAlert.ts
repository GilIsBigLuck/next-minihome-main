"use client";

import { useDialog } from "@/providers/DialogProvider";
import type { AlertOptions } from "@/providers/DialogProvider";

/**
 * Alert 팝업을 사용하기 위한 hook
 * 
 * @example
 * ```tsx
 * const Alert = useAlert();
 * 
 * await Alert({
 *   message: '사용자 정보가 없습니다. 다시 인증해주세요.',
 *   title: '오류',
 * });
 * ```
 */
export function useAlert() {
  const { showAlert } = useDialog();

  return async (options: AlertOptions): Promise<void> => {
    return showAlert(options);
  };
}

