import axios from "axios";

const API = {
  getUsers: async () => {
    // return [
    //   {
    //     id: 0,
    //     firstName: "Andrew",
    //     lastName: "Pumpkin",
    //     role: "Healer",
    //     email: "jella@world.com"
    //   },
    //   {
    //     id: 1,
    //     firstName: "Kelly",
    //     lastName: "Eater",
    //     role: "Tank",
    //     email: "jell@world.com"
    //   },
    //   {
    //     id: 2,
    //     firstName: "Julia",
    //     lastName: "Peters",
    //     role: "Accountant",
    //     email: "jElly@aorld.com"
    //   }
    // ]
    return axios.get("https://randomuser.me/api/?inc=name,email,phone&results=10")
    .then(({data}) => {
      return data.results.map((person, index) => {
        return {
          id: index,
          firstName: person.name.first,
          lastName: person.name.last,
          email: person.email,
          phone: person.phone
        }
      });
    });
  },
}

export default API;