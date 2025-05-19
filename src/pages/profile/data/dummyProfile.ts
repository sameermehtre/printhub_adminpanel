export interface ProfileData {
  profilePhoto: string;
  firstName: string;
  surname: string;
  shortName: string;
  email: string;
  phone: string;
}

export const dummyProfile: ProfileData = {
  profilePhoto: "https://randomuser.me/api/portraits/women/44.jpg",
  firstName: "Evan",
  surname: "Morales",
  shortName: "EM",
  email: "evan.morales@example.com",
  phone: "+1234567890",
};
