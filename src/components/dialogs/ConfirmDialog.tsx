"use client";

import * as Dialog from "@radix-ui/react-dialog";

type ConfirmDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  onConfirm: () => void;
  onCancel: () => void;
};

const typeStyles = {
  info: {
    icon: "ℹ️",
    titleColor: "text-blue-600 dark:text-blue-400",
    confirmButtonColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  success: {
    icon: "✓",
    titleColor: "text-green-600 dark:text-green-400",
    confirmButtonColor: "bg-green-600 hover:bg-green-700 text-white",
  },
  warning: {
    icon: "⚠",
    titleColor: "text-yellow-600 dark:text-yellow-400",
    confirmButtonColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
  },
  error: {
    icon: "✕",
    titleColor: "text-red-600 dark:text-red-400",
    confirmButtonColor: "bg-red-600 hover:bg-red-700 text-white",
  },
};

export default function ConfirmDialog({
  open,
  onOpenChange,
  title,
  message,
  type = "info",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const styles = typeStyles[type];

  // HTML 태그가 포함된 메시지 처리
  const renderMessage = () => {
    if (message.includes("<br/>") || message.includes("<br>")) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: message.replace(/<br\/?>/g, "<br />"),
          }}
        />
      );
    }
    return <p>{message}</p>;
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className={`text-xl font-bold mb-4 ${styles.titleColor}`}>
            {title || "확인"}
          </Dialog.Title>
          <Dialog.Description className="text-gray-700 dark:text-gray-300 mb-6">
            {renderMessage()}
          </Dialog.Description>
          <div className="flex justify-end gap-3">
            <Dialog.Close asChild>
              <button
                onClick={onCancel}
                className="px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
              >
                취소
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                onClick={onConfirm}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${styles.confirmButtonColor}`}
              >
                확인
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close"
              onClick={onCancel}
            >
              <span className="text-xl">×</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

