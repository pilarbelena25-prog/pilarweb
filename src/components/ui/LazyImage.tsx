import { ImgHTMLAttributes } from "react";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  eager?: boolean;
}

export function LazyImage({ eager = false, ...props }: LazyImageProps) {
  return <img loading={eager ? "eager" : "lazy"} {...props} />;
}
