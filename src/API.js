// import axios from "axios";

const API = {
  getUsers: async () => {
    return [
      {
        id: 0,
        name: "Andrew",
        role: "Healer",
        email: "hello@world.com"
      },
      {
        id: 1,
        name: "Kelly",
        role: "Tank",
        email: "Kelly@world.com"
      },
      {
        id: 2,
        name: "Julia",
        role: "Accountant",
        email: "Julia@world.com"
      }
    ]
  },
  getUsersSortedBy: async (field = "id") => {
    return API.getUsers().then(list => {
        let sorted;
        do {
          sorted = true;
          for (let i = 0; i < list.length - 1; i++) {
            if (list[i][field] > list[i + 1][field]) {
              sorted = false;
              [list[i], list[i + 1]] = [list[i + 1], list[i]]
            }
          }
        } while (!sorted);
        return list;
      });
  }
}

export default API;