import type { ReactNode } from 'react';

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

export const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return <div className={className}>{children}</div>;
};
