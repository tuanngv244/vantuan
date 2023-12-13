import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { MENULINKS } from "../../constants";
import { cn } from "utils/cn";

const Menu = ({
  setmenuVisible,
  menuVisible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
  menuVisible: boolean;
}) => {
  const _onScrollIntroEle =
    (el: { name: string; ref: string }) =>
    (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      setmenuVisible(!menuVisible);
      const ele = document.getElementById(el.ref);
      ele.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <section className="menu  overflow-hidden" style={{}}>
      <ul
        className={cn("flex duration-300 flex-nowrap p-0 m-0", {
          active: menuVisible,
        })}
        role="menu"
      >
        {MENULINKS.map((el) => (
          <li className="py-2 px-5  m-0  block" key={el.name} role="menuitem">
            <a
              className="link relative inline  text-lg leading-5 duration-300 hover:no-underline"
              href={`#`}
              onClick={_onScrollIntroEle(el)}
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
