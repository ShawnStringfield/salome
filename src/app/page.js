import React from "react";
import {Button} from '@nextui-org/button'; 
import { supabase } from "../../supabase";

export default async function Home() {
  const { data, error } = await supabase.from("notes").select();
  console.log('supabase data', data);
  console.log('error', error);
  return (
    <div>
      <div>
          <Button color="primary">Click me</Button>
      </div>
    </div>
  )
}
 