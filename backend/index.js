import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import houses from "./data.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.get("/houses", (req, res) => {
  const name = req.query.name;

  const filteredHouses = name
    ? houses.filter((house) =>
        house.name.toLowerCase().includes(name.toLowerCase())
      )
    : houses;
  res.json(filteredHouses);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
