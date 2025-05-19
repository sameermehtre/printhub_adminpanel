import React from "react";
import { transactions } from "../data/dummyData";

const ROWS_TO_SHOW = 6;
const ROW_HEIGHT = 28;

const RecentTransactions: React.FC = () => {
  const scrollHeight = ROWS_TO_SHOW * ROW_HEIGHT;

  return (
    <div className="p-2 bg-white rounded-xl border border-gray-200 shadow-md w-full">
      <h2 className="text-sm font-semibold mb-3">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="py-1.5 px-2">Order No</th>
              <th className="py-1.5 px-2">Payment Method</th>
              <th className="py-1.5 px-2">Payment</th>
            </tr>
          </thead>
        </table>

        <div
          className="overflow-y-auto"
          style={{
            maxHeight: scrollHeight,
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <table className="min-w-full text-left border-collapse text-sm">
            <tbody>
              {transactions.map(({ orderNo, paymentMethod, payment }) => (
                <tr key={orderNo} className="hover:bg-gray-100">
                  <td className="py-1.5 px-2 border-b border-gray-200">
                    {orderNo}
                  </td>
                  <td className="py-1.5 px-2 border-b border-gray-200">
                    {paymentMethod}
                  </td>
                  <td className="py-1.5 px-2 border-b border-gray-200">
                    {payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
