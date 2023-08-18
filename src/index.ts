import { app } from "./app";
import * as dotenv from "dotenv";

app.listen(4200, () => {
  console.log(`My server is running on port http://localhost:4200`);
});
