import { NavLink } from "react-router-dom";

function NavbarItem({ to, label, activeColor = "blue-500", textColor = "gray-700" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `border-b-2 border-${activeColor} pb-1 text-${activeColor}`
          : `pb-1 text-${textColor} hover:text-${activeColor}`
      }
    >
      {label}
    </NavLink>
  );
}

export default NavbarItem;
