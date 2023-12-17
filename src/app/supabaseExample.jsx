import React from "react";
import { supabase } from "../../supabase";

export const SupabaseExample = async () => {
  const { data } = await supabase.from("notes").select();
  return (
    <div>
      {data.map((note) => {
        return (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        );
      })}
    </div>
  );
};
