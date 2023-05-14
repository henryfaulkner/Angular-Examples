const request = require('request');
const express = require("express")
const cors = require("cors");

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use(express.json())

app.get("/api/grid-data", (req, res) => {
  res.status(200).json(
    [
      {
        "name": "Allison",
        "gender": "female",
        "hypeLevel": 10
      },
      {
        "name": "Henry",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Tristan",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Allison",
        "gender": "female",
        "hypeLevel": 10
      },
      {
        "name": "Henry",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Tristan",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Allison",
        "gender": "female",
        "hypeLevel": 10
      },
      {
        "name": "Henry",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Tristan",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Allison",
        "gender": "female",
        "hypeLevel": 10
      },
      {
        "name": "Henry",
        "gender": "male",
        "hypeLevel": 6
      },
      {
        "name": "Tristan",
        "gender": "male",
        "hypeLevel": 6
      }
    ]
  )
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});