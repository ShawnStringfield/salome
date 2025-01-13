import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';

export const AvatarImg = () => {
  return (
    <Avatar
      className='w-64 h-64 border-4 border-white rounded-full overflow-hidden'
      style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    >
      <AvatarImage
        src={'/me3.jpg'}
        alt='Profile'
        className='object-cover w-full h-full'
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      <AvatarFallback>SS</AvatarFallback>
    </Avatar>
  );
};
