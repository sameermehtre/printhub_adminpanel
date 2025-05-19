import React from "react";

import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";
import Transactions from "../pages/transactions/Transactions";
import Users from "../pages/Users/Users";
import Employees from "../pages/employees/Employees";
import Settings from "../pages/Settings";
import Profile from "../pages/profile/Profile";
import { ProfileData } from "../pages/profile/data/dummyProfile";

interface MainContentProps {
  activeTab: string;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
}

export const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  profile,
  setProfile,
}) => {
  const renderComponent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <Orders />;
      case "Transactions":
        return <Transactions />;
      case "Users":
        return <Users />;
      case "Employees":
        return <Employees />;
      case "Settings":
        return <Settings />;
      case "Profile":
        return <Profile profile={profile} setProfile={setProfile} />;
      default:
        return <Dashboard />;
    }
  };

  return <div className="flex-1 p-2">{renderComponent()}</div>;
};
