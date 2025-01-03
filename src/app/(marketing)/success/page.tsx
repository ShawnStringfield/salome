import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tighter'>Message Sent Successfully!</h1>
          <p className='text-gray-500'>{`Thank you for reaching out. I'll get back to you as soon as possible.`}</p>
        </div>
        <Link href='/'>
          <Button className='w-full'>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
