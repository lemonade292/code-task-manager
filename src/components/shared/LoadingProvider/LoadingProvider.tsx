import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

interface LoadingContent {
  loading: boolean;
  setLoading: (bool: boolean) => void;
  reloadCount:  number;
  setReloadCount: (num: number) => void;
}

const LoadingContext = createContext<LoadingContent>({} as LoadingContent);

/**
 * TODO: Add doc
 * @param param0 
 * @returns 
 */
export const LoadingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [reloadCount, setReloadCount] = useState<number>(0);

  const value = { loading, setLoading, reloadCount, setReloadCount };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
