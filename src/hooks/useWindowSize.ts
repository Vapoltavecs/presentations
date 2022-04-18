import { useEffect, useState } from "react";
export const useWindowSize = (defaults: {
  width?: number;
  height?: number;
}) => {
  const [sizes, setSizes] = useState<{ width?: number; height?: number }>(
    defaults
  );
  const onWindowResize = () =>
    setSizes({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return sizes;
};
