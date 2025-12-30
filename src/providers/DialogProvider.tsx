"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import AlertDialog from "@/components/dialogs/AlertDialog";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";
import { setGlobalAlert, setGlobalConfirm } from "@/lib/dialog-global";

export type DialogType = "alert" | "confirm";

export type AlertOptions = {
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
};

export type ConfirmOptions = {
  title?: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
};

type DialogState =
  | {
      type: "alert";
      options: AlertOptions;
      resolve: () => void;
    }
  | {
      type: "confirm";
      options: ConfirmOptions;
      resolve: (confirmed: boolean) => void;
    }
  | null;

const DialogContext = createContext<{
  showAlert: (options: AlertOptions) => Promise<void>;
  showConfirm: (options: ConfirmOptions) => Promise<boolean>;
} | null>(null);

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within DialogProvider");
  }
  return context;
}

export default function DialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dialogState, setDialogState] = useState<DialogState>(null);

  const showAlert = useCallback((options: AlertOptions): Promise<void> => {
    return new Promise((resolve) => {
      setDialogState({
        type: "alert",
        options,
        resolve: () => {
          resolve();
          setDialogState(null);
        },
      });
    });
  }, []);

  const showConfirm = useCallback(
    (options: ConfirmOptions): Promise<boolean> => {
      return new Promise((resolve) => {
        setDialogState({
          type: "confirm",
          options,
          resolve: (confirmed: boolean) => {
            resolve(confirmed);
            setDialogState(null);
          },
        });
      });
    },
    []
  );

  // 전역 함수 등록
  useEffect(() => {
    setGlobalAlert(showAlert);
    setGlobalConfirm(showConfirm);
    
    return () => {
      setGlobalAlert(null);
      setGlobalConfirm(null);
    };
  }, [showAlert, showConfirm]);

  return (
    <DialogContext.Provider value={{ showAlert, showConfirm }}>
      {children}
      {dialogState?.type === "alert" && (
        <AlertDialog
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              dialogState.resolve();
            }
          }}
          title={dialogState.options.title}
          message={dialogState.options.message}
          type={dialogState.options.type || "info"}
          onConfirm={() => dialogState.resolve()}
        />
      )}
      {dialogState?.type === "confirm" && (
        <ConfirmDialog
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              dialogState.resolve(false);
            }
          }}
          title={dialogState.options.title}
          message={dialogState.options.message}
          type={dialogState.options.type || "info"}
          onConfirm={() => dialogState.resolve(true)}
          onCancel={() => dialogState.resolve(false)}
        />
      )}
    </DialogContext.Provider>
  );
}

