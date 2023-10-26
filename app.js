const express = require("express");
const app = express();
require("dotenv").config();
const books = require("./routes/books");
const user = require("./routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const connectDB = require("./db/connenct");
app.use(express.static("./public"));
app.use("/books", books);
app.use("/auth", user);

const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const options = {
  persistAuthorization: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Books Directory",
      version: 0.1,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          in: "header",
          name: "Authorization",
          description: "Bearer token to access the api endpoints",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    definitions: {
      User: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "user's email address",
          },
          password: {
            type: "string",
            description: "user's password",
          },
        },
      },
      Book: {
        type: "object",
        properties: {
          name: { type: "string", description: "name of the book" },
          author: { type: "string", description: "author of the book" },
          publishedBy: {
            type: "string",
            description: "publisher of the book",
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const spacs = swaggerjsdoc(options);
app.use("/", swaggerui.serve, swaggerui.setup(spacs));
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
