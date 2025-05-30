import sequelize from "./db-connection";
import Person from "./models/Person";
import { add } from "./utils";

(async () => {
  await sequelize.sync();
  Person.create({ name: "John Doe" });
  console.log("sum", add(1, 4));
  console.log("debug", process.env.APP_DEBUG);
})();
