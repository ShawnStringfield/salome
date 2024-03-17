import { supabase } from '@/src/app/lib/supabaseClient';

export default async function Page() {
  // let { data: user, error } = await supabase.auth.signInWithOAuth({
  //   provider: 'google',
  // });
  // console.log('user', user);
  return <h1>Login</h1>;
}
