import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { dummyEmployees } from "./data/dummyData";

interface Employee {
  id: number;
  name: string;
  employeeId: string;
  department: string;
  role: string;
  email: string;
}

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(dummyEmployees);
  const [addMode, setAddMode] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: Date.now(),
    name: "",
    employeeId: "",
    department: "",
    role: "",
    email: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleFieldChange = (
    index: number,
    field: keyof Employee,
    value: string
  ) => {
    const updated = [...employees];
    updated[index] = { ...updated[index], [field]: value };
    setEmployees(updated);
  };

  const handleSaveEdit = () => {
    setEditIndex(null);
  };

  const handleDelete = (id: number) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    setNewEmployee({
      id: Date.now(),
      name: "",
      employeeId: "",
      department: "",
      role: "",
      email: "",
    });
    setAddMode(false);
  };

  return (
    <div className="min-h-screen bg-White p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-indigo-600">
            Employee Data
          </h1>
          <Button
            onClick={() => setAddMode(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow"
          >
            + Add Employee
          </Button>
        </div>

        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden bg-white">
          <thead className="bg-[#BAECEC]">
            <tr>
              {["Employee Name", "Department", "Role", "Email", "Actions"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((emp, index) => (
              <tr key={emp.id} className="hover:bg-[#E9FAFA]">
                {editIndex === index ? (
                  <>
                    <td className="px-3 py-2">
                      <input
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        value={emp.name}
                        onChange={(e) =>
                          handleFieldChange(index, "name", e.target.value)
                        }
                      />
                    </td>

                    <td className="px-3 py-2">
                      <input
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        value={emp.department}
                        onChange={(e) =>
                          handleFieldChange(index, "department", e.target.value)
                        }
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        value={emp.role}
                        onChange={(e) =>
                          handleFieldChange(index, "role", e.target.value)
                        }
                      />
                    </td>
                    <td className="px-3 py-2">
                      <input
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        value={emp.email}
                        onChange={(e) =>
                          handleFieldChange(index, "email", e.target.value)
                        }
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <Button
                        onClick={handleSaveEdit}
                        className="bg-green-500 text-white px-3 py-1 rounded-full mr-2 text-sm"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={() => setEditIndex(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm"
                      >
                        Cancel
                      </Button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {emp.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {emp.department}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {emp.role}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {emp.email}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setEditIndex(index)}
                        className="text-yellow-500 hover:text-yellow-600 mr-2"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {addMode && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Add New Employee
              </h2>
              <form className="grid grid-cols-1 gap-4">
                <input
                  value={newEmployee.name}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                  placeholder="Name"
                  className="input px-4 py-2 border rounded-md"
                />

                <input
                  value={newEmployee.department}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      department: e.target.value,
                    })
                  }
                  placeholder="Department"
                  className="input px-4 py-2 border rounded-md"
                />
                <input
                  value={newEmployee.role}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, role: e.target.value })
                  }
                  placeholder="Role"
                  className="input px-4 py-2 border rounded-md"
                />
                <input
                  value={newEmployee.email}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, email: e.target.value })
                  }
                  placeholder="Email"
                  className="input px-4 py-2 border rounded-md"
                />
              </form>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handleAddEmployee}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setAddMode(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;
