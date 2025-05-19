import React from "react";
import { Order } from "../data/usersData";

interface Props {
  userName: string;
  orders: Order[];
}

export const OrderList: React.FC<Props> = ({ userName, orders }) => {
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="p-4 bg-white border border-gray-200 shadow-lg rounded-lg text-gray-800 w-full md:w-1/3 max-h-[600px] overflow-y-auto scroll-smooth custom-scroll">
      {/* Sticky header with user info */}
      <div className="sticky top-0 bg-white z-10 pb-3 flex items-center justify-between border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-500 mb-1">
            Order List for:
          </h2>
          <h1 className="text-xl font-semibold text-indigo-600">{userName}</h1>
        </div>
        {/* Optional avatar */}
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold ml-2">
          {userName.charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="mt-3">
        {sortedOrders.length === 0 ? (
          <p className="text-gray-500 italic">No orders found for this user.</p>
        ) : (
          sortedOrders.map((order) => (
            <div
              key={order.orderNo}
              className="mb-4 border-b border-gray-200 pb-3"
            >
              <p>
                <span className="font-semibold text-gray-600">Order No:</span>{" "}
                {order.orderNo}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Date:</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold text-gray-600">
                  Assigned User:
                </span>{" "}
                {order.assignedUser}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Status:</span>{" "}
                {order.status}
              </p>
              <p>
                <span className="font-semibold text-gray-600">
                  Print Instructions:
                </span>{" "}
                {order.printInstructions}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Scoped scrollbar styles */}
      <style>
        {`
          .custom-scroll::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scroll::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 4px;
          }

          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background-color: #aaa;
          }

          .custom-scroll::-webkit-scrollbar-track {
            background-color: #f2f2f2;
          }
        `}
      </style>
    </div>
  );
};
