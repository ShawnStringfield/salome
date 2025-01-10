import type { ReactNode } from 'react';

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

export const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return <div className={`container py-8 md:py-20 ${className}`}>{children}</div>;
};
