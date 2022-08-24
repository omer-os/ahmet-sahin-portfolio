import React from "react";
import Bottom from "./bottom";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full">
      {children}

      <Bottom />
    </div>
  );
}
