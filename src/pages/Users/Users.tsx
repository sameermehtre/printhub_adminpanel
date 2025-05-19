import React, { useState } from "react";
import { users, User } from "./data/usersData";
import { OrderList } from "./components/OrderList";

const Users: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen  text-gray-800">
      <div className="w-full md:w-2/3 px-2 scroll-smooth">
        <div
          className="bg-white rounded-lg p-4 shadow-md border border-gray-200"
          style={{
            background:
              "radial-gradient(ellipse at top right , #0DB5B5 -80%, white 70%, transparent 100%)",

            zIndex: 0,
          }}
        >
          <h1 className="text-lg font-semibold mb-4 text-indigo-600">
            User Data
          </h1>

          {/* Table Header */}
          <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 border-b border-gray-200 pb-2">
            <span>User Name</span>
            <span>Mobile No</span>
            <span>Email Id</span>
            <span>Address</span>
          </div>

          {/* User Rows */}
          {users.map((user, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors duration-200 ${
                selectedUser?.email === user.email
                  ? "text-medium font-semibold" // Black and semi-bold for selected row
                  : "text-gray-800" // Default black text for non-selected rows
              }`}
              onClick={() => setSelectedUser(user)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedUser(user); // Allow selection on Enter/Space for accessibility
                }
              }}
              tabIndex={0} // Make the div focusable
              role="button" // Indicate that it’s a clickable item
            >
              <span>{user.name}</span>
              <span>{user.mobileNo}</span>
              <span>{user.email}</span>
              <span>{user.address}</span>
            </div>
          ))}
        </div>

        {/* Scrollbar customization for light theme */}
        <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: #aaa;
            }

            ::-webkit-scrollbar-track {
              background-color: #f2f2f2;
            }
          `}
        </style>
      </div>

      {/* Order Details */}
      {selectedUser && (
        <OrderList userName={selectedUser.name} orders={selectedUser.orders} />
      )}
    </div>
  );
};

export default Users;
