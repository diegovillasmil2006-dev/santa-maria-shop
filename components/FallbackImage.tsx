"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface FallbackImageProps extends Omit<ImageProps, "src" | "onError"> {
  src: string;
  fallback: string;
}

export default function FallbackImage({ src, fallback, quality = 100, alt, ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      quality={quality}
      onError={() => setImgSrc(fallback)}
    />
  );
}
