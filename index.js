import express from "express";
import userRoutes from "./routes/users.js";
import eventsRoutes from "./routes/events.js";

const app = express();

app.use(express.json());

app.use("/", eventsRoutes);
app.use("/", userRoutes);
app.listen(3030);
