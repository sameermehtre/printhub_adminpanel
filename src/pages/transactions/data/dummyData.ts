export const todaysRevenueData = {
  todayRevenue: 12345.67, // example revenue value
};

export interface YearlyRevenueRecord {
  year: number;
  totalRevenue: number;
}

export const yearlyRevenueData: YearlyRevenueRecord[] = [
  { year: 2023, totalRevenue: 75000 },
  { year: 2024, totalRevenue: 102000 },
  { year: 2025, totalRevenue: 136500 },
];

export const summaryData = [
  {
    title: "This Week's Orders",
    value: 456,
    change: 12.5,
  },
  {
    title: "This Month's Orders",
    value: 1890,
    change: -5.3,
  },
  {
    title: "Users",
    value: 230,
    change: 3.4,
  },
];

export const revenueData = {
  weekly: {
    total: 9800,
    cards: [1204, 1204, 1204, 1204],
    donut: [
      { label: "Mon", value: 1800, date: "2025-05-01" },
      { label: "Tue", value: 1200, date: "2025-05-02" },
      { label: "Wed", value: 1500, date: "2025-05-03" },
      { label: "Thu", value: 1000, date: "2025-05-04" },
      { label: "Fri", value: 1800, date: "2025-05-05" },
      { label: "Sat", value: 2500, date: "2025-05-06" },
      { label: "Sun", value: 2500, date: "2025-05-07" },
    ],
  },
  monthly: {
    total: 43000,
    cards: [1000, 1200, 8500, 43000],
    donut: [
      { label: "Jan", value: 8200 },
      { label: "Feb", value: 9000 },
      { label: "Mar", value: 8500 },
      { label: "Apr", value: 9500 },
      { label: "May", value: 9800 },
    ],
  },
};

export interface Transaction {
  orderNo: string;
  paymentMethod: string;
  payment: string;
}

export const transactions: Transaction[] = [
  {
    orderNo: "ORD123456",
    paymentMethod: "Credit Card",
    payment: "$120.00",
  },
  {
    orderNo: "ORD123457",
    paymentMethod: "PayPal",
    payment: "$75.50",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123459",
    paymentMethod: "Bank Transfer",
    payment: "$200.00",
  },
  {
    orderNo: "ORD123460",
    paymentMethod: "Credit Card",
    payment: "$89.99",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
  {
    orderNo: "ORD123458",
    paymentMethod: "Cash",
    payment: "$40.00",
  },
];

export const acceptedOrdersData = [
  {
    day: "Day 1",
    admin: 20,
    user1: 29,
    user2: 50,
  },
  {
    day: "Day 2",
    admin: 15,
    user1: 35,
    user2: 40,
  },
  {
    day: "Day 3",
    admin: 25,
    user1: 20,
    user2: 60,
  },
  {
    day: "Day 4",
    admin: 30,
    user1: 45,
    user2: 70,
  },
  {
    day: "Day 5",
    admin: 22,
    user1: 32,
    user2: 55,
  },
];
