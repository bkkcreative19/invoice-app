import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// route imports
import invoiceRouter from "./routes/invoice.js";

// db
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// db
connectDB();

// app middlewares

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// route middlewares
app.use("/api", invoiceRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
