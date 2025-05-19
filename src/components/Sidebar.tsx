import React, { useState, useEffect } from "react";
import logo from "../assets/print_hub_logo.png";
import {
  FiMenu,
  FiX,
  FiHome,
  FiTrendingUp,
  FiUsers,
  FiUserCheck,
  FiSettings,
  FiUser,
} from "react-icons/fi";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { name: "Dashboard", icon: <FiHome /> },
  { name: "Orders", icon: <FiHome /> },
  { name: "Transactions", icon: <FiTrendingUp /> },
  { name: "Users", icon: <FiUsers /> },
  { name: "Employees", icon: <FiUserCheck /> },
  { name: "Settings", icon: <FiSettings /> },
  { name: "Profile", icon: <FiUser /> },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger button on mobile */}
      <div className="lg:hidden p-4 bg-[#0DB5B5] text-white">
        <button onClick={() => setIsOpen(true)} aria-label="Open sidebar">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-[#0DB5B5] text-white w-44 
              fixed top-2 left-0 z-40 rounded-xl shadow-xl p-4
              h-[calc(100vh-1rem)] transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"} 
              lg:translate-x-0 lg:relative lg:top-0 lg:left-0 lg:m-2`}
      >
        {/* Close button - only on small screens */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white lg:hidden"
          aria-label="Close sidebar"
        >
          <FiX size={24} />
        </button>

        {/* Logo */}
        <div className="bg-white px-1  rounded-full mb-5">
          <div className="flex justify-center items-center my-2">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          </div>
        </div>

        {/* Dividers */}
        <div className="border-t border-white opacity-30 mb-1"></div>
        <div className="border-t border-white opacity-30 mb-6"></div>

        {/* Menu Items */}
        <ul className="space-y-3 text-m" role="menu">
          {menuItems.map(({ name, icon }) => (
            <li
              key={name}
              role="menuitem"
              aria-current={activeTab === name ? "page" : undefined}
              onClick={() => {
                setActiveTab(name);
                setIsOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 rounded-md w-full flex items-center gap-3 transition-colors ${
                activeTab === name
                  ? "bg-white text-[#0DB5B5] font-semibold"
                  : "hover:bg-[#10cfcf]"
              }`}
            >
              {icon}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
