import { TError } from "@/types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "./axios";

interface UseRequestOptions<TData> {
  onSuccess?: (data: TData) => void;
}

export const useRequest = <TData, TBody = unknown>(
  mainConfig?: AxiosRequestConfig,
  options?: UseRequestOptions<TData>
) => {
  const [data, setData] = useState<AxiosResponse<TData, TBody>>();
  const [error, setError] = useState<TError>();
  const [isPending, setIsPending] = useState(false);

  const request = useCallback(
    async (config: AxiosRequestConfig<TBody>) => {
      setIsPending(true);

      try {
        const data = await axiosInstance<TData>({
          ...mainConfig,
          ...config,
        });
        setData(data);
        options?.onSuccess?.(data.data);
        toast.success("");
      } catch (error) {
        const errorMessage = (error as TError).response.data.detail;
        setError(error as TError);
        toast.error(errorMessage);
      }
      setIsPending(false);
    },
    [mainConfig, options]
  );

  useEffect(() => {
    if (mainConfig?.method === "GET") {
      request?.(mainConfig);
    }
  }, []);

  return {
    request,
    data,
    isPending,
    error,
  };
};
export const request = (config: AxiosRequestConfig) => {
  return axiosInstance(config);
};
