import app from "./server"
import * as dotenv from "dotenv"

dotenv.config();

app.listen(3001, () => {
    console.log("Server is create and is running on port http://localhost:3001")
})
 