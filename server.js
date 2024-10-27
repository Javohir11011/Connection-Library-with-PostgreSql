import express from "express"
import { router} from "./routes/books.routes.js"
import { routerUser} from "./routes/users.routes.js"
import { routerComment} from "./routes/commet.routes.js"
import { config } from "dotenv"
import { createTables } from "./data/tables.js";
import { connectDatabase } from "./data/books.js";

config();
const app = express();
app.use(express.json())

app.use('/books', router)
app.use('/user', routerUser)
app.use('/comment', routerComment)


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Server running...")
    connectDatabase()
    createTables()
});



