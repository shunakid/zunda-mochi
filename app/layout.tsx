import "./globals.css";
import Navigation from "./components/navigation";
import SupabaseProvider from "./components/supabase-provider";

export const metadata = {
  title: "ずんだもち",
  description: "ずんだもちのサイトです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <SupabaseProvider>
          <div className="flex flex-col min-h-screen relative bg-slate-800">
            <Navigation />
            <div className="h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900 text-gray-500">
              sidebar
            </div>
            <main className="flex-1 container max-w-screen-sm mx-auto px-5 py-5">
              {children}
            </main>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
