import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BlogIt!. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
