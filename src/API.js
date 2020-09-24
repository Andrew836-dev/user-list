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
    const output = axios.get("https://randomuser.me/api/?inc=name,email,phone&results=100")
      .then(({ data }) => {
        return data.results.map((person, index) => {
          return {
            id: index + 1,
            firstName: person.name.first,
            lastName: person.name.last,
            email: person.email,
            phone: person.phone
          }
        });
      }).catch(error => {
        console.log(error);
        return backup;
      });

    return output;
  }
}

export default API;

const backup = [
  {
    "id": 0,
    "firstName": "Ian",
    "lastName": "Stephens",
    "email": "ian.stephens@example.com",
    "phone": "061-637-1171"
  },
  {
    "id": 1,
    "firstName": "Mikkel",
    "lastName": "Skotnes",
    "email": "mikkel.skotnes@example.com",
    "phone": "28204208"
  },
  {
    "id": 2,
    "firstName": "Lucia",
    "lastName": "Castro",
    "email": "lucia.castro@example.com",
    "phone": "976-964-825"
  },
  {
    "id": 3,
    "firstName": "Gül",
    "lastName": "Kuday",
    "email": "gul.kuday@example.com",
    "phone": "(977)-870-1697"
  },
  {
    "id": 4,
    "firstName": "Lenni",
    "lastName": "Makela",
    "email": "lenni.makela@example.com",
    "phone": "07-062-243"
  },
  {
    "id": 5, "firstName": "Nikolaj",
    "lastName": "Christensen",
    "email": "nikolaj.christensen@example.com",
    "phone": "10272963"
  },
  {
    "id": 6,
    "firstName": "Charlotte",
    "lastName": "King",
    "email": "charlotte.king@example.com",
    "phone": "051-286-8194"
  },
  {
    "id": 7,
    "firstName": "Eetu",
    "lastName": "Takala",
    "email": "eetu.takala@example.com",
    "phone": "03-005-292"
  },
  {
    "id": 8,
    "firstName": "Cedric",
    "lastName": "Moreau",
    "email": "cedric.moreau@example.com",
    "phone": "077 551 02 00"
  },
  {
    "id": 9,
    "firstName": "Thea",
    "lastName": "Johansen",
    "email": "thea.johansen@example.com",
    "phone": "01532624"
  }
];