import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const ServerComponentsEx = async () => {
  // Necessary for getting user from supabase on BE
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('user from book page', user);

  return (
    <div>
      <h1>Hello, Server Components!</h1>
      <p>This is an example of a modern React component using server components.</p>
    </div>
  );
};
