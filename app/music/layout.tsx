import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AudioPlex",
  description: "Plex Audio!",
  icons:{
    icon: "/music/icon.png",
    shortcut: "/music/icon.png",
    apple: "/music/icon.png"
  }
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
  
        <div className="relative">
          <section>
            <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
              {children}
            </div>
          </section>
        </div>
      
  );
}
