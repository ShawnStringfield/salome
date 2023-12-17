import React from "react";
import { supabase } from "../../supabase";

export default async function Home() {
  const { data } = await supabase.from("notes").select();

  return (
    <div>
      <div>
       {data.map((note) => {
          return (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          )
       })}
      </div>
    </div>
  )
}
 