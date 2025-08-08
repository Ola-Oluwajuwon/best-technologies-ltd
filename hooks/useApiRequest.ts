"use client";

import { useState, useCallback } from "react";
import { getErrorMessage, ApiException } from "@/lib/api";

interface UseApiRequestState {
  loading: boolean;
  error: { message: string; statusCode?: number } | null;
  success: boolean;
}

interface UseApiRequestReturn<T, TArgs extends unknown[]>
  extends UseApiRequestState {
  execute: (...args: TArgs) => Promise<T | null>;
  reset: () => void;
}

export function useApiRequest<T, TArgs extends unknown[]>(
  apiFunction: (...args: TArgs) => Promise<T>
): UseApiRequestReturn<T, TArgs> {
  const [state, setState] = useState<UseApiRequestState>({
    loading: false,
    error: null,
    success: false,
  });

  const execute = useCallback(
    async (...args: TArgs): Promise<T | null> => {
      setState({
        loading: true,
        error: null,
        success: false,
      });

      try {
        const result = await apiFunction(...args);
        setState({
          loading: false,
          error: null,
          success: true,
        });
        return result;
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        const statusCode =
          error instanceof ApiException ? error.statusCode : undefined;
        setState({
          loading: false,
          error: { message: errorMessage, statusCode },
          success: false,
        });
        return null;
      }
    },
    [apiFunction]
  );

  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      success: false,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
