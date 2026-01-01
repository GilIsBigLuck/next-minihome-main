"use client";

/**
 * 전역 Alert 함수
 * 컴포넌트 내부에서 useAlert hook을 사용하는 것을 권장합니다.
 * 이 함수는 내부적으로 전역 상태를 사용합니다.
 * 
 * @deprecated useAlert hook을 사용하세요
 */
let globalShowAlert: ((options: {
  message: string;
  title?: string;
  type?: "info" | "success" | "warning" | "error";
}) => Promise<void>) | null = null;

export function setGlobalAlert(
  showAlert: ((options: {
    message: string;
    title?: string;
    type?: "info" | "success" | "warning" | "error";
  }) => Promise<void>) | null
) {
  globalShowAlert = showAlert;
}

export async function Alert(options: {
  message: string;
  title?: string;
  type?: "info" | "success" | "warning" | "error";
}): Promise<void> {
  if (!globalShowAlert) {
    throw new Error(
      "Alert is not initialized. Make sure DialogProvider is mounted."
    );
  }
  return globalShowAlert(options);
}

/**
 * 전역 Confirm 함수
 * 컴포넌트 내부에서 useConfirm hook을 사용하는 것을 권장합니다.
 * 이 함수는 내부적으로 전역 상태를 사용합니다.
 * 
 * @deprecated useConfirm hook을 사용하세요
 */
let globalShowConfirm: ((options: {
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
}) => Promise<boolean>) | null = null;

export function setGlobalConfirm(
  showConfirm: ((options: {
    title?: string;
    message: string;
    type?: "info" | "success" | "warning" | "error";
  }) => Promise<boolean>) | null
) {
  globalShowConfirm = showConfirm;
}

export async function Confirm(options: {
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
}): Promise<boolean> {
  if (!globalShowConfirm) {
    throw new Error(
      "Confirm is not initialized. Make sure DialogProvider is mounted."
    );
  }
  return globalShowConfirm(options);
}

