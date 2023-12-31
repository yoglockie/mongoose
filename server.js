import express from "express";
import colors from "colors";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./connection/db.js"; // Import the database connection function
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/products", productRoutes);
app.use("/users", userRoutes);


app.get("/",(req,res)=>{
     res.send({
        message:"welcome to express",
     });
});

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.resolve(__dirname, "./public")));

// app.get("/home", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });

// // app.get("/about", (req, res) => {
// //   res.send({
// //     message: "This is home page",
// //   });
// // });

app.listen(PORT, () => {
    console.log(
      `Server is Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
    );
  });
  