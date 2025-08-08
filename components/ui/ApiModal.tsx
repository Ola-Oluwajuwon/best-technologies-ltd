"use client";

import React from "react";
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

interface SuccessModalProps extends BaseModalProps {
  type: "success";
}

interface ErrorModalProps extends BaseModalProps {
  type: "error";
  onRetry?: () => void;
  retryLabel?: string;
}

export type ApiModalProps = SuccessModalProps | ErrorModalProps;

export function ApiModal({
  isOpen,
  onClose,
  title,
  description,
  type,
  ...props
}: ApiModalProps) {
  const isError = type === "error";
  const errorProps = isError ? (props as ErrorModalProps) : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-gray-700 text-black max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center">
            {isError ? (
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            )}
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-700 mt-2 text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex flex-col gap-2">
          {isError && errorProps?.onRetry && (
            <Button
              onClick={errorProps.onRetry}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              {errorProps.retryLabel || "Try Again"}
            </Button>
          )}
          <Button
            onClick={onClose}
            className={`w-full font-semibold py-3 rounded-lg transition-all duration-200 ${
              isError
                ? "bg-gray-600 hover:bg-gray-700 text-white"
                : "bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white"
            }`}
          >
            {isError ? "Close" : "Continue"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Convenience components for specific use cases
export function SuccessModal(props: Omit<SuccessModalProps, "type">) {
  return <ApiModal {...props} type="success" />;
}

export function ErrorModal(props: Omit<ErrorModalProps, "type">) {
  return <ApiModal {...props} type="error" />;
}

// Duplicate Email Modal Component
interface DuplicateEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
}

export function DuplicateEmailModal({
  isOpen,
  onClose,
  email,
}: DuplicateEmailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-yellow-700 text-black max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-yellow-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
            Already Subscribed!
          </DialogTitle>
          <DialogDescription className="text-gray-700 mt-2 text-center">
            {email ? (
              <>
                The email address{" "}
                <span className="font-semibold text-yellow-600">{email}</span>{" "}
                is already subscribed to our newsletter. You&apos;re all set to
                receive our latest updates!
              </>
            ) : (
              "This email address is already subscribed to our newsletter. You're all set to receive our latest updates!"
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 border-yellow-500 hover:border-yellow-600"
          >
            Got it!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
