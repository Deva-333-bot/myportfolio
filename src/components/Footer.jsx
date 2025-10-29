import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-green-700 text-white text-center text-sm">
      © {new Date().getFullYear()} Daivine Oluoch. All rights reserved.
    </footer>
  );
}
