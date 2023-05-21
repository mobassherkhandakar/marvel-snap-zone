import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/download.png"

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="alltoy">All Toys</Link>
      </li>
      {user ? (
        <li>
          <Link to="mytoy">My Toys</Link>
        </li>
      ) : null}
      {user ? (
        <li>
          <Link to="addtoy">Add Toys</Link>
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
    <>
      <div className="bg-base-100 shadow-md">
        <div className="navbar bg-base-100 my-container">
          <div className="navbar-start items-center">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost  lg:hidden">
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
            <Link  to="/">
              <img className="w-36" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-end  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}

              {user ? (
                <div className="ps-2  dropdown dropdown-bottom">
                  <label
                    tabIndex={0}
                    className="btn btn-accent btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user ? (
                        <img title={user?.displayName} src={user?.photoURL} />
                      ) : (
                        "login"
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3  p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-auto"
                  >
                    <li>
                      <button onClick={logOutUser} className="capitalize">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end lg:hidden">
            <div className="dropdown dropdown-end">
              {user ? (
                <>
                  <label
                    tabIndex={0}
                    className="btn btn-accent btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                    <img title={user?.displayName} src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3  p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-auto"
                  >
                    <li>
                      <button onClick={logOutUser} className="capitalize">
                        Logout
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <Link to="/login">
                  <button className="btn capitalize btn-primary">Login</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
