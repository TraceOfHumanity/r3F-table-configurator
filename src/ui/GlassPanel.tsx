import React from "react";

export const GlassPanel = ({children}: {children: React.ReactNode}) => {
  return <div className="flex flex-col gap-2 rounded-2xl bg-black bg-opacity-15 shadow backdrop-blur p-4" >{children}</div>;
};
