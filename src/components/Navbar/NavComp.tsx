import logo from "../../assets/logo.svg";
const NavComp = () => {
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
          <ul className="flex items-center space-x-7 ">
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
            <button>Login</button>
            <button className="bg-[#FA8B02] px-8 py-2 text-base font-medium capitalize rounded-3xl hover:bg-[#E37A02] transition-all ease-linear duration-200 ">
              Sign Up{" "}
            </button>
          </div>
          {/* nav button */}
        </div>
      </nav>
    </>
  );
};

export default NavComp;
