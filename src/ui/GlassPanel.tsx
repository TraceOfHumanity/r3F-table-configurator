import React from "react";

export const GlassPanel = ({children}: {children: React.ReactNode}) => {
  return <div className="flex flex-col gap-2 rounded-2xl bg-black bg-opacity-15 shadow backdrop-blur p-4 [&_h2]:font-bold [&_h2]:text-2xl min-w-52 [&_h2]:mb-2" >{children}</div>;
};
