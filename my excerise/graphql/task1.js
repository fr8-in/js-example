const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { GraphQLClient, gql } = require("graphql-request");

app.use(bodyParser.json());

app.get("/city", async (req, res) => {
  const endpoint = "https://dcore.fr8.in/v1/graphql";

  const query = gql
  `query{
      city(where: {is_connected_city: {_eq: true}}){
        id
        name
        is_connected_city
      }
    }
  `;

//   const variable = {
//     search: `${req.query.name}`,
//   };

  const client = new GraphQLClient(endpoint);
  const data = await client.request(query);

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
