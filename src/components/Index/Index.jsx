import React from "react";
import IndexMobile from './Mobile/IndexMobile'
import IndexDesktop  from "./Desktop/IndexDesktop";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <>

                              <IndexMobile/> 

                              </>;
                              
const DesktopComponent = () => <>

                              <IndexDesktop/> 

                              </>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 699.9;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
  return (
    <ViewportProvider>
      <MyComponent/>
    </ViewportProvider>
  );
}
