import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export const MaxWidthContainer = ({ children, className }: Props) => {
  return <div className={`container py-8 md:py-20 ${className}`}>{children}</div>;
};
