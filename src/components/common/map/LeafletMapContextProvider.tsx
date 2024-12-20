import Leaflet from 'leaflet';
import { createContext, useState } from 'react';

interface MapContextValues {
  map: Leaflet.Map | undefined;
  setMap: (e: Leaflet.Map | undefined) => void;
  leafletLib: typeof Leaflet | undefined;
  setLeafletLib: (e: typeof Leaflet | undefined) => void;
}

export const MapContext = createContext<MapContextValues | undefined>(
  undefined,
);

interface MapContextProviderProps {
  children: React.ReactNode;
}

const LeafleftMapContextProvider = ({ children }: MapContextProviderProps) => {
  const [map, setMap] = useState<Leaflet.Map | undefined>();
  const [leafletLibrary, setLeafletLibrary] = useState<
    typeof Leaflet | undefined
  >();

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        leafletLib: leafletLibrary,
        setLeafletLib: setLeafletLibrary,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default LeafleftMapContextProvider;
