import { supabase } from '@/supabase';
import { AuthButton } from '../auth/AuthButton';

export const NavBar = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <AuthButton />
    </>
  );
};
