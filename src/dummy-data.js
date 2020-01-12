export const userData = {
  name: "Marie Kondo",
  username: "bringsJoy",
  password: "password",
  email: "email@email.com"
};

let valID = 0;
export const values = [
  { name: "Athletic ability", id: valID++, remove: false },
  { name: "Art and literature", id: valID++, remove: false },
  { name: "Creativity", id: valID++, remove: false },
  {
    name: "discovering, or inventing things to make a difference in the world",
    id: valID++,
    remove: false
  },
  { name: "Independence", id: valID++, remove: false },
  {
    name: "Kindness and generosity",
    id: valID++,
    remove: false
  },
  { name: "Living in the moment", id: valID++, remove: false },
  {
    name:
      "Membership in a social group (such as your community, racial group, or school club)",
    id: valID++,
    remove: false
  },
  { name: "Music", id: valID++, remove: false },
  { name: "My community", id: valID++, remove: false },
  { name: "My moral principles", id: valID++, remove: false },
  {
    name: "Nature and the environment",
    id: valID++,
    remove: false
  },
  {
    name: "Relationships with friends and family",
    id: valID++,
    remove: false
  },
  { name: "Sense of humor", id: valID++, remove: false },
  { name: "Success in my career", id: valID++, remove: false }
];

export const valueChoice = {
  value1: {
    name: "",
    explanation: "",
    id: ""
  },
  value2: {
    name: "",
    explanation: "",
    id: ""
  },
  value3: {
    name: "",
    explanation: "",
    id: ""
  }
};

export const projects = [
  { project: "project1", id: valID++ },
  { project: "project2", id: valID++ },
  { project: "project3", id: valID++ }
];
