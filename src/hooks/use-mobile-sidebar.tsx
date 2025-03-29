

import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type MobileSidebarContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

const MobileSidebarContext = createContext<MobileSidebarContextType | undefined>(
  undefined
);

export function MobileSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <MobileSidebarContext.Provider value={{ isOpen, onOpen, onClose, toggle }}>
      {children}
    </MobileSidebarContext.Provider>
  );
}

export function useMobileSidebar() {
  const context = useContext(MobileSidebarContext);
  if (context === undefined) {
    throw new Error(
      "useMobileSidebar must be used within a MobileSidebarProvider"
    );
  }
  return context;
}