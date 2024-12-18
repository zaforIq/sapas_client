import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

export const metadata = {
  title: "sapas",
  description: "Starter Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen grid grid-cols-6  gap-4 p-8">
        <Sidebar className="md:col-span-1 h-full"/>
        <div className="col-span-6 md:col-span-5 flex flex-col h-full">
          <Header className="flex-none"/>
          <main className="flex-grow overflow-auto">
            {children}
          </main>
          {/* <Footer className="flex-none"/> */}
        </div>
      </body>
    </html>
  );
}