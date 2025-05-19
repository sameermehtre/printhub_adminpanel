export interface Order {
  orderNo: string;
  date: string;
  assignedUser: string;
  status: string;
  printInstructions: string;
}

export interface User {
  name: string;
  mobileNo: string;
  email: string;
  address: string;
  orders: Order[];
}

export const users: User[] = [
  {
    name: "Sameer Mehtre",
    mobileNo: "1231231231",
    email: "abc.abc@gmail.com",
    address: "xyz street",
    orders: [
      {
        orderNo: "ORD003",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD002",
        date: "2024-04-15",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD001",
        date: "2024-04-01",
        assignedUser: "Admin1",
        status: "Completed",
        printInstructions: "Print on A4, double side",
      },
      {
        orderNo: "ORD004",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD005",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD006",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
    ],
  },
  {
    name: "Anup Mehtre",
    mobileNo: "1231231231",
    email: "anup.abc@gmail.com",
    address: "xyz street",
    orders: [
      {
        orderNo: "ORD003",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD002",
        date: "2024-04-15",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD001",
        date: "2024-04-01",
        assignedUser: "Admin1",
        status: "Completed",
        printInstructions: "Print on A4, double side",
      },
      {
        orderNo: "ORD004",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD005",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
      {
        orderNo: "ORD006",
        date: "2024-05-01",
        assignedUser: "Admin2",
        status: "Pending",
        printInstructions: "Color print, A3 size",
      },
    ],
  },
];
