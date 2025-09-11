import React from "react";
import CheckmarkIcon from "../assets/images/icon-checkmark.svg?react";

export default function DropdownButton() {
  const [active, setActive] = React.useState(false);

  return (
    <button
      className={`${active && "bg-neutral-700"} flex cursor-pointer items-center justify-between gap-2.5 rounded-lg px-2 py-2.5 text-neutral-100 transition-colors hover:bg-neutral-700 focus:bg-neutral-700 focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2 focus:ring-offset-neutral-800`}
    >
      Switch to Imperial
      <CheckmarkIcon />
    </button>
  );
}
