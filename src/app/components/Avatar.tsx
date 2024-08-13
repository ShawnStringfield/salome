import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarImg = () => {
  return (
    <Avatar className='w-64 h-64 border-4 border-white'>
      <AvatarImage src={'/me2.jpg'} />
      <AvatarFallback>SS</AvatarFallback>
    </Avatar>
  );
};
