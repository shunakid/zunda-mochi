"use client";

import { createContext, useContext, useState } from "react";
import { createClient } from "../utils/supabase-server";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

type SupabaseContext = {
  supabase: SupabaseClient;
};

// コンテキスト
const Context = createContext<SupabaseContext>(null!);

// プロバイダー
export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClient());

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

// Supabaseクライアント
export const useSupabase = () => useContext(Context);
