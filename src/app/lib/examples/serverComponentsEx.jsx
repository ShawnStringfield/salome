import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function ServerComponent() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error('User not found');
    }

    return (
      <div>
        <h1>Hello, {user.email}</h1>
        {/* Rest of your component */}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error loading user data</h1>
      </div>
    );
  }
}
