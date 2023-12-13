"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/common/menu";
import { cn } from "utils/cn";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <header className="w-full fixed top-0 py-4 md:py-[32px] select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image src="/logo.svg" alt="Logo - Van Tuan" width={22} height={22} />
        </a>
        <nav
          className={cn(
            "flex flex-row-reverse items-center rounded-sm  outer-menu",
            {
              "menu-visible": !menuVisible,
            }
          )}
        >
          <button
            className="hamburger  flex items-center  px-2 py-2 justify-center link relative"
            // onClick={setmenuVisible.bind(null, !menuVisible)}
            onClick={() => setmenuVisible(!menuVisible)}
          >
            <img src={"/hambuger.svg"} className="w-6 h-6" />
          </button>
          <Menu menuVisible={menuVisible} setmenuVisible={setmenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
