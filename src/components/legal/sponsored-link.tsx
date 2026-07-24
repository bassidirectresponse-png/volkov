import type { AnchorHTMLAttributes, ReactNode } from "react";

export function SponsoredLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a {...props} target="_blank" rel="sponsored nofollow noopener">
      {children}
    </a>
  );
}
