// import axios from "axios";

const API = {
  getUsers: () => {
    return [
      {
        name: "Andrew",
        role: "Healer",
        email: "hello@world.com"
      },
      {
        name: "Kelly",
        role: "Tank",
        email: "Kelly@world.com"
      },
      {
        name: "Julia",
        role: "Accountant",
        email: "Julia@world.com"
      }
    ]
  }
}

export default API;