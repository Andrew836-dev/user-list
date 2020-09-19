// import axios from "axios";

const API = {
  getUsers: () => {
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
  }
}

export default API;