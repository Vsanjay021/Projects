import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";
import { LinkType } from "./data";

const Submenu: React.FC = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState<string>("col-2");

  type LocationType = {
    center: number;
    bottom: number;
  };

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location as LocationType;
    submenu!.style.left = `${center}px`;
    submenu!.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link: LinkType, index: number) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
