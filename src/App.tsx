import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import Header from "./components/Header";
import { dummyProfile, ProfileData } from "./pages/profile/data/dummyProfile";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [profile, setProfile] = useState<ProfileData>(dummyProfile);

  return (
    <div className="flex h-screen bg-[#FFFFFF] overflow-hidden">
      {/* Sticky sidebar */}
      <div className="sticky top-0 h-screen z-30">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Sticky header */}
        <div className="sticky top-0 z-20 bg-white  rounded-xl shadow-md">
          <Header
            profile={profile}
            onProfileClick={() => setActiveTab("Profile")}
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-2">
          <MainContent
            activeTab={activeTab}
            profile={profile}
            setProfile={setProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
