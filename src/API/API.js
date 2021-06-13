export const API_URL = `https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`;

export const DEMO = {
  gender: "female",
  name: { title: "Miss", first: "Faith", last: "Van den Boogert" },
  location: {
    street: { number: 8211, name: "In de Haofkes" },
    city: "Strijensas",
    state: "Flevoland",
    country: "Netherlands",
    postcode: 87065,
    coordinates: { latitude: "44.3426", longitude: "56.9079" },
    timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
  },
  email: "faith.vandenboogert@example.com",
  picture: {
    large: "https://randomuser.me/api/portraits/women/15.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
  },
  nat: "NL",
};
