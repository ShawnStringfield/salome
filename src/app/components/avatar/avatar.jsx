import { Badge } from '@nextui-org/react';

export const AvatarWithBadge = ({ src, alt, content }) => {
  return (
    <Badge content={content} color="primary">
      <img className="rounded-md w-full h-[200px]" src={src} alt={alt} width="100" height="100" />
    </Badge>
  );
};
