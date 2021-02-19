import { useState } from "react";
import { MenuButton } from "theme-ui";
import BottomSheet from "~/components/common/BottomSheet";

export default function NavMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuButton
        aria-label="open navigation menu"
        onClick={() => setIsOpen(true)}
      />
      <BottomSheet open={isOpen} onChange={(isOpen) => setIsOpen(isOpen)}>
        {children}
      </BottomSheet>
    </>
  );
}
