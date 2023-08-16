import GlobalNavigation from "@/components/GlobalNavigation";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import GlobalNavigationMobile from "app/components/GlobalNavigationMobile";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <GlobalNavigation />
        <main className="mx-auto min-h-screen w-full max-w-5xl px-6 xl:px-0">
          {children}
        </main>
        <Footer />
        <GlobalNavigationMobile />
      </body>
    </html>
  );
}
