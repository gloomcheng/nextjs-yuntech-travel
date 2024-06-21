import Image from "next/image";
import { useState, useEffect } from "react";

const AutoSizeImage = ({ src, alt }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setSize({ width: img.width, height: img.height });
    };
  }, [src]);

  return <Image src={src} alt={alt} width={size.width} height={size.height} />;
};

export default AutoSizeImage;
