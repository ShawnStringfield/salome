import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const MaxWidthContainer = ({ children, className }: Props) => {
  return <div className={`container py-8 md:py-20 ${className}`}>{children}</div>;
};
