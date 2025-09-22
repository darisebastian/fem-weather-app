import Logo from "../assets/images/logo.svg?react";
import UnitsIcon from "../assets/images/icon-units.svg?react";
import DropdownIcon from "../assets/images/icon-dropdown.svg?react";

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between">
//       <Logo />
//       <div className="flex cursor-pointer items-center gap-1.5 rounded-md bg-neutral-800 px-2.5 py-2">
//         <UnitsIcon /> Units <DropdownIcon />
//       </div>
//     </header>
//   );
// }

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo className="h-7 w-auto" />
      <button className="flex cursor-pointer items-center gap-1.5 rounded-md bg-neutral-800 px-2.5 py-2">
        <UnitsIcon />
        <span className="text-xs">Units</span>
        <DropdownIcon />
      </button>
    </header>
  );
}
