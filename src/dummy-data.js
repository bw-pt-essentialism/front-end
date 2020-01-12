export const userData = {
  name: "Marie Kondo",
  username: "bringsJoy",
  password: "password",
  email: "email@email.com"
};

let valID = Date.now();
export const values = [
  { name: "Athletic ability", id: valID + Math.random(), remove: false },
  { name: "Art and literature", id: valID + Math.random(), remove: false },
  { name: "Creativity", id: valID + Math.random(), remove: false },
  {
    name: "discovering, or inventing things to make a difference in the world",
    id: valID + Math.random(),
    remove: false
  },
  { name: "Independence", id: valID + Math.random(), remove: false },
  {
    name: "Kindness and generosity",
    id: valID + Math.random(),
    remove: false
  },
  { name: "Living in the moment", id: valID + Math.random(), remove: false },
  {
    name:
      "Membership in a social group (such as your community, racial group, or school club)",
    id: valID + Math.random(),
    remove: false
  },
  { name: "Music", id: valID + Math.random(), remove: false },
  { name: "My community", id: valID + Math.random(), remove: false },
  { name: "My moral principles", id: valID + Math.random(), remove: false },
  {
    name: "Nature and the environment",
    id: valID + Math.random(),
    remove: false
  },
  {
    name: "Relationships with friends and family",
    id: valID + Math.random(),
    remove: false
  },
  { name: "Sense of humor", id: valID + Math.random(), remove: false },
  { name: "Success in my career", id: valID + Math.random(), remove: false }
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
  { project: "project1", id: valID + Math.random() },
  { project: "project2", id: valID + Math.random() },
  { project: "project3", id: valID + Math.random() }
];
