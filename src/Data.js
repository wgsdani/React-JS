import { faker } from "@faker-js/faker";


const date = new Date();
 const data = [
  {
    name : "Dani Mulyana",
    date : date.toLocaleDateString(),
    comment : "Halooo",
    avatar: faker.image.avatar()
  },
  {
    name : "Ronatio Silaban",
    date : date.toLocaleDateString(),
    comment : " Hiii",
    avatar: faker.image.avatar()
  },
  {
    name : "Ramdhani Arya",
    date : date.toLocaleDateString(),
    comment : "Hawaiii uu",
    avatar: faker.image.avatar()
  }
];

export default data;