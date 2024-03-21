import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import { MdOutlineClose } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
const NavComp = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains((event.target as Node) || null)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    const clickListener = document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () => document.removeEventListener("mousedown", clickListener); // Cleanup
  }, [open]);
  const toggle = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <>
      <nav className="fixed  left-0 right-0  top-0 z-50 backdrop-blur-md bg-white/10 px-10 py-3 ">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* nav logo  */}
          <div className="logo">
            <img src={logo} alt="logo" className="size-20" />
          </div>
          {/* nav logo  */}
          {/* nav link */}
          <ul className=" items-center space-x-7 hidden lg:flex ">
            <li>Home</li>
            <li>About US</li>
            <li>Tour Packages</li>
            <li>Contact US </li>
          </ul>
          {/* nav link */}
          {/* nav button */}
          <div className="flex items-center space-x-7">
            <select
              name="language"
              id="language"
              className="bg-transparent border-none focus:border-none focus:ring-0 transition-all ease-linear">
              <option value="eng">ENG</option>
              <option value="eng">BD</option>
            </select>
            <button onClick={toggle} className=" lg:hidden">
              <HiBars3 size={30} className="text-[#FA8B02] " />
            </button>
            <div className=" items-center space-x-7 hidden lg:flex">
              <button>Login</button>
              <button className="bg-[#FA8B02] px-8 py-2 text-base font-medium capitalize rounded-3xl hover:bg-[#E37A02] transition-all ease-linear duration-200 ">
                Sign Up{" "}
              </button>
            </div>
          </div>
          {/* nav button */}
        </div>
      </nav>
      {/* Responsive navbar  */}
      <div
        ref={navbarRef}
        className={`fixed w-full right-0 h-full  top-0 z-50 backdrop-blur-md bg-slate-200/10 transition-all ease-linear duration-200 px-10 py-3 max-w-sm ${
          open
            ? "translate-x-0 ease-linear duration-300 "
            : "translate-x-full duration-200 ease-linear "
        }  `}>
        <div>
          <button className="text-3xl absolute top-4 right-4" onClick={toggle}>
            <MdOutlineClose
              className="text-red-600 drop-shadow-lg border rounded p-1 hover:drop-shadow-2xl hover:bg-red-600 hover:text-white transition-all ease-linear duration-200"
              size={35}
            />
          </button>
        </div>
        {/* nav logo */}
        <img src={logo} className="mx-auto mb-10 mt-5 " alt="" />
        {/* nav logo */}

        {/* nav link */}
        <ul className="space-y-8 w-11/12 mx-auto text-center ">
          <li className="hover:font-semibold cursor-pointer text-lg caption-top capitalize">
            Home
          </li>
          <li className="hover:font-semibold cursor-pointer text-lg caption-top capitalize">
            About US
          </li>
          <li className="hover:font-semibold cursor-pointer text-lg caption-top capitalize">
            Tour Packages
          </li>
          <li className="hover:font-semibold cursor-pointer text-lg caption-top capitalize">
            Contact US{" "}
          </li>
        </ul>
        {/* nav link */}
        {/* nav button */}
        <div className="flex flex-col space-y-5 mt-5 w-1/2 mx-auto">
          <button>Login</button>
          <button className="bg-[#FA8B02] px-8 py-2 text-base font-medium capitalize rounded-3xl hover:bg-[#E37A02] transition-all ease-linear duration-200 ">
            Sign Up{" "}
          </button>
        </div>
        {/* nav button */}
      </div>

      {/* Responsive navbar  */}
    </>
  );
};

export default NavComp;
