// import axios from "axios";

const API = {
  getUsers: async () => {
    return [
      {
        id: 0,
        name: "Andrew",
        role: "Healer",
        email: "jella@world.com"
      },
      {
        id: 1,
        name: "Kelly",
        role: "Tank",
        email: "jell@world.com"
      },
      {
        id: 2,
        name: "Julia",
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
  sortArray: async (array, field) => {
    return array.sort((a, b) => {
      if (typeof a[field] === "string") {
        let length = (a[field].length > b[field.length] ? a[field].length : b[field].length)
        for (let i = 0; i < length; i++) {
          const compareChar = a[field].toLowerCase().charCodeAt(i) - b[field].toLowerCase().charCodeAt(i);
          if (compareChar !== 0) return compareChar;
        }
        return 0;
      } else if (typeof a[field] === "number") {
        return a[field] - b[field];
      } else {
        return 0;
      }
    });
  }
}

export default API;