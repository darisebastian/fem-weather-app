import UnitsIcon from "../assets/images/icon-units.svg?react";
import DropdownIcon from "../assets/images/icon-dropdown.svg?react";

export default function Dropdown() {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-neutral-800 px-4 py-2.5">
      <UnitsIcon />
      <span className="text-sm">Units</span>
      <DropdownIcon />
    </div>
  );
}
