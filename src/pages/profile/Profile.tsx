import React, { useState } from "react";
import { ProfileData } from "./data/dummyProfile";

interface ProfileProps {
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
}

const Profile: React.FC<ProfileProps> = ({ profile, setProfile }) => {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<ProfileData>(profile);

  const handleSave = () => {
    setProfile(editData);
    setEditMode(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData({ ...editData, profilePhoto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12  bg-white rounded-2xl shadow-lg border border-gray-200">
      {!editMode ? (
        <>
          <div className="flex items-center justify-between border-b pb-6 mb-6 bg-[#E5F9F9] rounded-2xl px-6 pt-6">
            <div className="flex items-center space-x-5">
              <img
                src={profile.profilePhoto}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#083D3D]">
                  {profile.firstName} {profile.surname}
                </h2>
                <p className="text-sm text-gray-500">{profile.shortName}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setEditData(profile);
                setEditMode(true);
              }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
            >
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  px-6 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold">First Name</h4>
              <p>{profile.firstName}</p>
            </div>
            <div>
              <h4 className="font-semibold">Surname</h4>
              <p>{profile.surname}</p>
            </div>
            <div>
              <h4 className="font-semibold">Short Name</h4>
              <p>{profile.shortName}</p>
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>{profile.email}</p>
            </div>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <p>{profile.phone}</p>
            </div>
          </div>

          <div className="flex justify-end mt-6 p-6">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full"
              onClick={() => alert("Change Password flow")}
            >
              Change Password
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center ">
          <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="w-full flex flex-col md:flex-row gap-8"
          >
            {/* Left: Profile Image */}
            <div className="flex flex-col items-center md:w-1/3">
              <img
                src={editData.profilePhoto}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 mb-4"
              />
              <label className="cursor-pointer text-blue-600 hover:underline">
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Right: Input Fields */}
            <div className="flex flex-col space-y-4 md:w-2/3">
              <input
                type="text"
                placeholder="First Name"
                value={editData.firstName}
                onChange={(e) =>
                  setEditData({ ...editData, firstName: e.target.value })
                }
                className="border rounded px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Surname"
                value={editData.surname}
                onChange={(e) =>
                  setEditData({ ...editData, surname: e.target.value })
                }
                className="border rounded px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Short Name"
                value={editData.shortName}
                onChange={(e) =>
                  setEditData({ ...editData, shortName: e.target.value })
                }
                className="border rounded px-4 py-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                className="border rounded px-4 py-2"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={editData.phone}
                onChange={(e) =>
                  setEditData({ ...editData, phone: e.target.value })
                }
                className="border rounded px-4 py-2"
                required
              />

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="px-5 py-2 rounded-full border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
