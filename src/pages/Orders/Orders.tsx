import React from "react";
import OrderFilesTable from "./components/OrderFilesTable";

const Orders = () => {
  return (
    <div className="h-full overflow-y-auto text-gray-800 pr-2 scroll-smooth">
      <div className="space-y-5">
        <OrderFilesTable />
      </div>

      {/* Light theme scrollbar customization */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #cbd5e1; /* Tailwind slate-300 */
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8; /* Tailwind slate-400 */
          }

          ::-webkit-scrollbar-track {
            background-color: #f1f5f9; /* Tailwind slate-100 */
          }
        `}
      </style>
    </div>
  );
};

export default Orders;
