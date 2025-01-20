import Link from "next/link";
import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <Link href="/">
      <code className={className}>{children}</code>
    </Link>
  );
}
