import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user,logOutUser } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link>All Toys</Link>
      </li>
      {user ? (
        <li>
          <Link>My Toys</Link>
        </li>
      ) : null}
      {user ? (
        <li>
          <Link>Add Toys</Link>
        </li>
      ) : null}
      <li>
        <Link to="blog">Blog</Link>
      </li>
      {!user ? (
        <li>
          <Link to="login">Login</Link>
        </li>
      ) : null}
    </>
  );
  return (
    <div className="navbar shadow-lg mb-2 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
          {/* <li>
            <div className="avatar">
              <div className="w-11 rounded-full">
                {user ? (
                  <img title={user?.displayName} src={user?.photoURL} />
                ) : (
                  <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" />
                )}
              </div>
            </div>
          </li> */}
        </ul>
      </div>
      {/* <div className="navbar-end w-16 md:hidden lg:hidden">
        
      </div> */}
      <div className="dropdown  dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-16 lg:text-end  rounded-full">
        {user ? (
          <img title={user?.displayName} src={user?.photoURL} />
        ) : (
          <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" />
        )}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-24">
        <li><a onClick={logOutUser}>Logout</a></li>
      </ul>
    </div>
    </div>
  );
};

export default Header;
