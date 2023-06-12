import { useEffect, useState } from "react";
import "./Resizable.css";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import { ResizeCallbackData } from "react-resizable";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [width, setWidth] = useState<number>(window.innerWidth * 0.75);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width,
      resizeHandles: ["e"],
      onResizeStop: (
        event: React.SyntheticEvent,
        data: ResizeCallbackData
      ) => {},
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
