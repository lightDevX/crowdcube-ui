import { Link, NavLink } from "react-router";

const Header = () => {
  const navLink = (
    <div className="flex gap-4">
      <NavLink className="text-base font-medium hover:text-red-300" to="/">
        Home
      </NavLink>
      <NavLink className="text-base font-medium hover:text-red-300" to="/about">
        About
      </NavLink>
      <NavLink
        className="text-base font-medium hover:text-red-300"
        to="/donor-list"
      >
        Donor List
      </NavLink>
      <NavLink
        className="text-base font-medium hover:text-red-300"
        to="/campaign"
      >
        Campaign
      </NavLink>
      <NavLink className="text-base font-medium hover:text-red-300" to="/event">
        Event
      </NavLink>
    </div>
  );

  return (
    <>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-base">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end gap-4">
          <Link
            to="/donate"
            className="btn border-0 bg-teal-300 outline outline-red-300"
          >
            Donate
          </Link>
          <Link
            to="/login"
            className="btn border-0 bg-teal-300 outline outline-red-300"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
