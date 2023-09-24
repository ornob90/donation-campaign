import React, { useState } from "react";
import Container from "../Shared/Container";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Container>
      <nav className="z-1 w-full py-4 flex justify-between items-center">
        <div className="">
          <img
            className="w-2/5 md:w-3/5 lg:w-4/5"
            src="/assets/Logo.png"
            alt=""
          />
        </div>
        <div className="hidden text-lg md:text-xl  w-3/5 lg:flex justify-end gap-8 items-center">
          <NavLink>Home</NavLink>
          <NavLink>Donation</NavLink>
          <NavLink>Statistics</NavLink>
        </div>

        <GiHamburgerMenu
          className="block lg:hidden text-2xl"
          onClick={() => setMenu(!menu)}
        />

        {menu && (
          <div
            className={`absolute ${
              menu ? "top-0 right-0" : "top-0 -right-[100%]"
            }  flex flex-col w-full h-full gap-16   bg-blue-400 duration-300 transition-all ease-in-out`}
          >
            <div className="flex justify-end w-[93%] mt-5">
              <CgCloseO
                className="block lg:hidden text-2xl"
                onClick={() => setMenu(!menu)}
              />
            </div>
            <div
              className="
         flex flex-col lg:hidden z-[10] justify-center items-center gap-8 text-xl"
            >
              <NavLink>Home</NavLink>
              <NavLink>Donation</NavLink>
              <NavLink>Statistics</NavLink>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
