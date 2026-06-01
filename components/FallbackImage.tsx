"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface FallbackImageProps extends Omit<ImageProps, "src" | "onError"> {
  src: string;
  fallback: string;
}

export default function FallbackImage({ src, fallback, quality = 100, ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      {...props}
      src={imgSrc}
      quality={quality}
      onError={() => setImgSrc(fallback)}
    />
  );
}
