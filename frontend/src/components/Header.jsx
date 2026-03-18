import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
    setMobileOpen(false);
  };

  const commonLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-violet-600" : "text-gray-700 hover:text-violet-600"
    }`;

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-3">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          CourseHub
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">

          <NavLink
            to="/"
            className={commonLinkClass}
          >
            Home
          </NavLink>

          {user && user.role === "STUDENT" && (
            <NavLink
              to="/student-dashboard"
              className={commonLinkClass}
            >
              My Dashboard
            </NavLink>
          )}

          {user && user.role === "STUDENT" && (
            <NavLink
              to="/all-courses"
              className={commonLinkClass}
            >
              All Courses
            </NavLink>
          )}

          {user && user.role === "STUDENT" && (
            <NavLink
              to="/my-courses"
              className={commonLinkClass}
            >
              My Courses
            </NavLink>
          )}

          {user && user.role === "INSTRUCTOR" && (
            <>
              <NavLink
                to="/instructor-dashboard"
                className={commonLinkClass}
              >
                Instructor Panel
              </NavLink>
              <NavLink
                to="/instructor-my-courses"
                className={commonLinkClass}
              >
                My Courses
              </NavLink>
              <NavLink
                to="/instructor-reviews"
                className={commonLinkClass}
              >
                Reviews
              </NavLink>
            </>
          )}

          {user && user.role === "ADMIN" && (
            <NavLink
              to="/admin-dashboard"
              className={commonLinkClass}
            >
              Admin Panel
            </NavLink>
          )}

          {!user ? (
            <>
              <NavLink
                to="/login"
                className={commonLinkClass}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-500 transition"
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink
                to="/profile"
                title={`${user.firstName} ${user.lastName}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-violet-100 text-violet-700"
                      : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                  }`
                }
              >
                <div className="w-7 h-7 rounded-lg bg-linear-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </div>
                <span className="hidden sm:block">{user.firstName}</span>
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}

        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-3">
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={closeMobileMenu} className={commonLinkClass}>
              Home
            </NavLink>

            {user && user.role === "STUDENT" && (
              <>
                <NavLink to="/student-dashboard" onClick={closeMobileMenu} className={commonLinkClass}>
                  My Dashboard
                </NavLink>
                <NavLink to="/all-courses" onClick={closeMobileMenu} className={commonLinkClass}>
                  All Courses
                </NavLink>
                <NavLink to="/my-courses" onClick={closeMobileMenu} className={commonLinkClass}>
                  My Courses
                </NavLink>
                <NavLink to="/profile" onClick={closeMobileMenu} className={commonLinkClass}>
                  Profile
                </NavLink>
              </>
            )}

            {user && user.role === "INSTRUCTOR" && (
              <>
                <NavLink to="/instructor-dashboard" onClick={closeMobileMenu} className={commonLinkClass}>
                  Instructor Panel
                </NavLink>
                <NavLink to="/instructor-my-courses" onClick={closeMobileMenu} className={commonLinkClass}>
                  My Courses
                </NavLink>
                <NavLink to="/instructor-reviews" onClick={closeMobileMenu} className={commonLinkClass}>
                  Reviews
                </NavLink>
              </>
            )}

            {user && user.role === "ADMIN" && (
              <NavLink to="/admin-dashboard" onClick={closeMobileMenu} className={commonLinkClass}>
                Admin Panel
              </NavLink>
            )}

            {!user ? (
              <>
                <NavLink to="/login" onClick={closeMobileMenu} className={commonLinkClass}>
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={closeMobileMenu}
                  className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;