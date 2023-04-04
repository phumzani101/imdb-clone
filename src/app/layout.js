import Header from "@/components/views/Header";
import "./globals.css";
import Theme from "@/components/views/Theme";
import Navbar from "@/components/views/Navbar";

export const metadata = {
  title: "IMDB Clone",
  description: "MDB Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* Search */}
          {children}
        </Theme>
      </body>
    </html>
  );
}
