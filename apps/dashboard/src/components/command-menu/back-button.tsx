"use client";

import { MenuOption, useCommandStore } from "@/store/command";
import { Icons } from "@midday/ui/icons";

export function BackButton() {
  const { setMenu } = useCommandStore();

  return (
    <button
      type="button"
      className="items-center rounded border bg-muted p-1"
      onClick={() => setMenu(MenuOption.RootDesktop)}
    >
      <Icons.ArrowBack />
    </button>
  );
}
