export const userData = {
  name: "Marie Kondo",
  username: "bringsJoy",
  password: "password",
  email: "email@email.com"
};

let valID = Date.now();
export const values = [
  { value: "Athletic ability", id: valID + Math.random(), remove: false },
  { value: "Art and literature", id: valID + Math.random(), remove: false },
  { value: "Creativity", id: valID + Math.random(), remove: false },
  {
    value: "discovering, or inventing things to make a difference in the world",
    id: valID + Math.random(),
    remove: false
  },
  { value: "Independence", id: valID + Math.random(), remove: false },
  {
    value: "Kindness and generosity",
    id: valID + Math.random(),
    remove: false
  },
  { value: "Living in the moment", id: valID + Math.random(), remove: false },
  {
    value:
      "Membership in a social group (such as your community, racial group, or school club)",
    id: valID + Math.random(),
    remove: false
  },
  { value: "Music", id: valID + Math.random(), remove: false },
  { value: "My community", id: valID + Math.random(), remove: false },
  { value: "My moral principles", id: valID + Math.random(), remove: false },
  {
    value: "Nature and the environment",
    id: valID + Math.random(),
    remove: false
  },
  {
    value: "Relationships with friends and family",
    id: valID + Math.random(),
    remove: false
  },
  { value: "Sense of humor", id: valID + Math.random(), remove: false },
  { value: "Success in my career", id: valID + Math.random(), remove: false }
];

export const valueChoice = {
  value1: {
    value: "",
    explanation: "",
    id: ""
  },
  value2: {
    value: "",
    explanation: "",
    id: ""
  },
  value3: {
    value: "",
    explanation: "",
    id: ""
  }
};

export const projects = [
  { project: "project1", id: valID + Math.random() },
  { project: "project2", id: valID + Math.random() },
  { project: "project3", id: valID + Math.random() }
];
