import { MaxWidthContainer } from '@/app/components/blocks/MaxWidthContainer';

export default function NotFound() {
  return (
    <MaxWidthContainer className='min-h-[50vh] flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-slate-900 mb-4'>404 - Page Not Found</h1>
        <p className='text-slate-600 mb-8'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a href='/' className='text-blue-600 hover:text-blue-800 underline'>
          Return Home
        </a>
      </div>
    </MaxWidthContainer>
  );
}
