import express from "express";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { config } from "./config/index.js";
import { productRoute } from "./routes/productRoute.js";
import { cartRoute } from "./routes/cartRoute.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, This is Lilac Ecommerce backend!");
});

//
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

//errors
app.use(notFound);
app.use(errorHandler);

//listen
const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
