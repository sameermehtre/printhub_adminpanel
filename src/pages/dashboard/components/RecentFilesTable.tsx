import React, { useState, useRef } from "react";
import { files as initialFiles } from "../data/dummyData";
import { FaChevronDown } from "react-icons/fa";

type FileData = {
  orderNumber: string;
  fileName: string;
  date: string;
  userAssign: string;
  status: string;
  price: string;
  printInstruction: string;
};

const statusColors: { [key: string]: string } = {
  Pending: "#ef4444",
  "In Process": "#f59e0b",
  Completed: "#22c55e",
  Delivered: "#4338ca",
};

const users = ["Not Assigned", "Admin", "user1", "user2"];

const RecentFilesTable: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>(initialFiles);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [openUserDropdownIndex, setOpenUserDropdownIndex] = useState<
    number | null
  >(null);
  const [dropdownDirection, setDropdownDirection] = useState<"up" | "down">(
    "down"
  );
  const [userDropdownDirection, setUserDropdownDirection] = useState<
    "up" | "down"
  >("down");

  const statusRef = useRef<HTMLDivElement[]>([]);
  const userRef = useRef<HTMLDivElement[]>([]);

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedFiles = [...files];
    updatedFiles[index].status = newStatus;
    setFiles(updatedFiles);
    setOpenDropdownIndex(null);
  };

  const handleUserAssignChange = (index: number, newUser: string) => {
    const updatedFiles = [...files];
    updatedFiles[index].userAssign = newUser;
    setFiles(updatedFiles);
    setOpenUserDropdownIndex(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-gray-800 border border-gray-200">
      <h3 className="text-xl font-semibold mb-3">Recent Files</h3>

      <div className="max-h-96 overflow-y-auto overflow-x-auto">
        <table className="min-w-full text-left table-auto border-collapse">
          <thead className="bg-gray-100 sticky top-0 z-10 border-b border-gray-300">
            <tr>
              {[
                "Order Number",
                "File Name",
                "Date",
                "User Assign",
                "Status",
                "Price",
                "Download",
                "Print Instruction",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {files.map((file: FileData, index: number) => (
              <tr
                key={file.orderNumber}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition duration-200 border-b border-gray-200`}
              >
                <td className="px-6 py-3 text-sm">{file.orderNumber}</td>
                <td className="px-6 py-3 text-sm">{file.fileName}</td>
                <td className="px-6 py-3 text-sm">{file.date}</td>

                {/* User Assign with dropdown */}
                <td className="px-6 py-3 text-sm relative">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    ref={(el) => {
                      if (el) userRef.current[index] = el;
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect =
                        userRef.current[index]?.getBoundingClientRect();
                      const shouldOpenUp =
                        rect && window.innerHeight - rect.bottom < 150;
                      setUserDropdownDirection(shouldOpenUp ? "up" : "down");
                      setOpenUserDropdownIndex(
                        openUserDropdownIndex === index ? null : index
                      );
                    }}
                  >
                    <span
                      className={`font-medium ${
                        file.userAssign === "Not Assigned"
                          ? "text-red-500"
                          : "text-gray-800"
                      }`}
                    >
                      {file.userAssign}
                    </span>
                    <FaChevronDown className="text-xs text-gray-500" />
                  </div>

                  {openUserDropdownIndex === index && (
                    <div
                      className={`absolute w-32 bg-white border border-gray-300 shadow-md rounded z-20 ${
                        userDropdownDirection === "up"
                          ? "bottom-full mb-2"
                          : "mt-2"
                      }`}
                    >
                      {users.map((user) => (
                        <div
                          key={user}
                          onClick={() => handleUserAssignChange(index, user)}
                          className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                        >
                          {user}
                        </div>
                      ))}
                    </div>
                  )}
                </td>

                {/* Status with dropdown */}
                <td className="px-6 py-3 text-sm relative">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    ref={(el) => {
                      if (el) statusRef.current[index] = el;
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect =
                        statusRef.current[index]?.getBoundingClientRect();
                      const shouldOpenUp =
                        rect && window.innerHeight - rect.bottom < 150;
                      setDropdownDirection(shouldOpenUp ? "up" : "down");
                      setOpenDropdownIndex(
                        openDropdownIndex === index ? null : index
                      );
                    }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: statusColors[file.status] || "#6b7280" }}
                    >
                      {file.status}
                    </span>
                    <FaChevronDown className="text-xs text-gray-500" />
                  </div>

                  {openDropdownIndex === index && (
                    <div
                      className={`absolute w-32 bg-white border border-gray-300 shadow-md rounded z-20 ${
                        dropdownDirection === "up" ? "bottom-full mb-2" : "mt-2"
                      }`}
                    >
                      {Object.keys(statusColors).map((status) => (
                        <div
                          key={status}
                          onClick={() => handleStatusChange(index, status)}
                          className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                          style={{ color: statusColors[status] }}
                        >
                          {status}
                        </div>
                      ))}
                    </div>
                  )}
                </td>

                <td className="px-6 py-3 text-sm">{file.price}</td>
                <td className="px-6 py-3 text-sm">
                  <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded transition duration-200">
                    Download
                  </button>
                </td>
                <td className="px-6 py-3 text-sm">{file.printInstruction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentFilesTable;
