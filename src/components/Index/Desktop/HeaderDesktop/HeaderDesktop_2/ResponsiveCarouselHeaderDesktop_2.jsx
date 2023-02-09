import React from "react";
import HeaderDesktop_2 from "./HeaderD2/HeaderDesktop_2";
import CarouselDesktop2 from "./CarouselD2/CarouselHeaderDesktop_2";

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
const CarouselUnder = () => (
  <>
    <HeaderDesktop_2 />
  </>
);

const CarouselOver = () => (
  <>
    <CarouselDesktop2 />
  </>
);

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 1599.9;

  return width < breakpoint ? <CarouselDesktop2 /> : <HeaderDesktop_2 />;
};
export default function ResponsiveCarouselHeaderDesktop2() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
