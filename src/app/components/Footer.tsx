import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navigation = {
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/shawnstringfield',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shawnstringfield',
      icon: FaLinkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className='bg-slate-800 text-slate-200' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8'>
        <div className='space-y-8 flex flex-col items-center text-center'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl leading-tight text-slate-200 font-bold tracking-wide max-w-4xl'>
            Frontend Engineer specializing in React, TypeScript, and modern web technologies.
          </h2>
          <div className='flex space-x-8'>
            {navigation.social.map(item => (
              <a
                key={item.name}
                href={item.href}
                className='text-slate-400 hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-8 w-8 md:h-10 md:w-10' aria-hidden='true' />
              </a>
            ))}
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-slate-700/60 text-center'>
          <p className='text-xs leading-5 text-slate-400'>
            &copy; {new Date().getFullYear()} Shawn Stringfield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
