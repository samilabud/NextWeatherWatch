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
  location?: string | undefined;
  setLocation?: Dispatch<SetStateAction<string | undefined>>;
};

const defaultLocation = "Miami";

export const LocationContext = createContext({
  location: undefined,
  setLocation: () => undefined,
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
