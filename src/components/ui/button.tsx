import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
    {...props}
  >
    {children}
  </button>
);
