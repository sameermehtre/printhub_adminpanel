import React from "react";
import logo from "../assets/logo_color_cration.png";
import { Bell } from "lucide-react";
import { ProfileData } from "../pages/profile/data/dummyProfile";

interface HeaderProps {
  profile: ProfileData;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ profile, onProfileClick }) => {
  return (
    <header className="w-full bg-white shadow-md border border-gray-200 rounded-xl flex items-center justify-between px-6 py-1">
      {/* Left: Search */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
        />
      </div>

      {/* Center: Logo */}
      <div className="flex items-center justify-center flex-grow">
        <img
          src={logo}
          alt="Color Cration Logo"
          className="h-10 object-contain"
        />
      </div>

      {/* Right: Notification and Profile */}
      <div className="flex items-center space-x-4">
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-purple-600" />
          <span className="absolute top-1.5 right-1.5 inline-block w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div
          onClick={onProfileClick}
          className="flex items-center space-x-2 px-4 py-1 border border-gray-300 rounded-lg cursor-pointer hover:shadow-sm transition"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onProfileClick();
            }
          }}
        >
          <img
            src={profile.profilePhoto}
            alt={`${profile.shortName} `}
            className="w-9 h-9 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">
            {profile.shortName}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
