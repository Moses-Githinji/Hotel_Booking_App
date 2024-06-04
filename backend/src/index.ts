import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"

// MongoDB connection
const connectDB = () => {
  mongoose.set("strictQuery", true);
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("The database has been connected successfully");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("connected", () => {
  console.log(`MongoDB has reconnected successfully!`);
});

mongoose.connection.on("disconnected", () => {
  console.log(`MongoDB disconnected!`);
});



const app = express() // initializes an express app for our server.
app.use(express.json()) // parses data in json format so that we don't have to handle this in our endpoints.
app.use(express.urlencoded({extended: true})) // allows us to parse the url to obtain things like the query params
app.use(cors())

app.get("/api/test", async (req: Request, res: Response) => {
    return res.status(200).send("Yeepi!! You've found me. :):):)")
})

app.listen("5000", () => {
    connectDB()
    console.log("Your server is up and running!!")
})