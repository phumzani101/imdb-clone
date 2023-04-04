import Header from "@/components/views/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "MDB Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* Navbar */}
        {/* Search */}
        {children}
      </body>
    </html>
  );
}
