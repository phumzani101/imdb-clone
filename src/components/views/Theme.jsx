"use client";
import { ThemeProvider } from "next-themes";

function Theme({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="transition-colors duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Theme;
