"use client";
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

const defaultLocation: string = "Miami";

export const LocationContext = createContext<ContextProps>({
  location: "",
  setLocation: () => "",
});

export const LocationProvider = ({ children }: ProviderProps) => {
  const [location, setLocation] = useState<string>(defaultLocation);
  const value: ContextProps = { location, setLocation };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
