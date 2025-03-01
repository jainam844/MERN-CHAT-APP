import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongodb.js";

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//     res.send("hello world!!");
// });

app.use('/api/auth', authRoutes)



app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})
