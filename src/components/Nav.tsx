import { useState } from "react";
import { TripleSpin as Hamburger, Link, UnstyledLink } from "@adamjanicki/ui";
import "src/components/nav.css";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const Navlink = (props: NavlinkProps) => (
    <li className="navlink-li">
      <Link className="navlink" onClick={closeMenu} {...props} />
    </li>
  );

  return (
    <nav className="flex items-center justify-between w-100 nav pv2 ph4">
      <div className="flex items-center justify-between bar-container">
        <UnstyledLink className="nav-title" to="#home">
          Matthew Janicki
        </UnstyledLink>
        <div className="mobile">
          <Hamburger
            open={open}
            onClick={() => setOpen(!open)}
            duration={0.4}
          />
        </div>
      </div>
      <ul
        className="flex items-center desktop link-container ma0"
        style={{ display: open ? "flex" : undefined }}
      >
        <Navlink to="#home">Home</Navlink>
        <Navlink to="#about-me">About Me</Navlink>
        <Navlink to="#contact-information">Contact Information</Navlink>
      </ul>
    </nav>
  );
};

export default Nav;
