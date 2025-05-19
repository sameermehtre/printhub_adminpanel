import React from "react";
import { User } from "../data/usersData";

interface Props {
  user: User;
  onSelect: () => void;
  isSelected: boolean;
}

export const UserInfo: React.FC<Props> = ({ user, onSelect, isSelected }) => {
  return (
    <div
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(); // Allow selection on Enter/Space for accessibility
        }
      }}
      tabIndex={0} // Makes the div focusable
      role="button" // Indicates that it's clickable
      className={`cursor-pointer p-4 border-b border-gray-200 hover:bg-[#E9FAFA] transition-colors duration-200 ${
        isSelected ? "text-medium font-semibold" : "text-gray-800"
      }`}
    >
      {user.name}
    </div>
  );
};
