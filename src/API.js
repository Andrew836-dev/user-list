// import axios from "axios";

const API = {
  getUsers: async () => {
    return [
      {
        id: 0,
        firstName: "Andrew",
        lastName: "Pumpkin",
        role: "Healer",
        email: "jella@world.com"
      },
      {
        id: 1,
        firstName: "Kelly",
        lastName: "Eater",
        role: "Tank",
        email: "jell@world.com"
      },
      {
        id: 2,
        firstName: "Julia",
        lastName: "Peters",
        role: "Accountant",
        email: "jElly@aorld.com"
      }
    ]
  },
  getUsersSortedBy: async (field = "id") => {
    return API.getUsers().then(list => {
      return API.sortArray(list, field)
    });
  },
}

export default API;