import {LegsColorInterface} from "./LegsColorInterface";
import {LegsTypeInterface} from "./LegsTypeInterface";
import { TableWidthInterface } from "./TableWidthInterface";

export const Interface = () => {
  return (
    <div className="fixed top-0 right-0 max-h-screen p-2 overflow-y-auto grid gap-5 items-start">
      <LegsTypeInterface />
      <LegsColorInterface />
      <TableWidthInterface />
    </div>
  );
};
