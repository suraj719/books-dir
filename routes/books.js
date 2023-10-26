const express = require("express");
const router = express.Router();
const { requireToken } = require("../middleware/authMiddleware");
const {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");


router.route("/").get(requireToken, getAllBooks).post(requireToken, createBook);
router
  .route("/:id")
  .get(requireToken, getBook)
  .put(requireToken, updateBook)
  .delete(requireToken, deleteBook);

module.exports = router;

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     description: Create a new user with email and password.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/definitions/User"
 *     responses:
 *       201:
 *         description: User created successfully
 *         schema:
 *           $ref: "#/definitions/User"
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: User login
 *     description: Login with email and password to obtain an access token.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/definitions/User"
 *     responses:
 *       201:
 *         description: Login successful
 *         schema:
 *           $ref: "#/definitions/User"
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - User
 *     summary: User login
 *     description: Login with email and password to obtain an access token.
 *     parameters:
 *       - name: "credentials"
 *         in: "body"
 *         description: User login credentials
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /books:
 *   get:
 *     tags:
 *       - Books
 *     summary: Get books 
 *     description: Retrieve all books data using a valid JWT token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 *       403:
 *         description: Forbidden
 
 *   post:
 *     tags:
 *       - Books
 *     summary: Create a new book
 *     description: Create a new book with the provided data.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/definitions/Book"
 *     responses:
 *       201:
 *         description: Book created successfully
 *         schema:
 *           $ref: "#/definitions/Book"
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal Server Error
*/
/**
* @swagger
* /books/{id}:
 *   get:
 *     tags:
 *       - Book
 *     summary: Get a book by ID
 *     description: Retrieve a book by its ID.
 *     parameters:
 *       - name: id
 *         in: "path"
 *         description: ID of the book to retrieve
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           $ref: "#/definitions/Book"
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error

 *   put:
 *     tags:
 *       - Book
 *     summary: Update a book by ID
 *     description: Update a book's information by its ID.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: "id"
 *         in: "path"
 *         description: ID of the book to update
 *         required: true
 *         type: "string"
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/definitions/Book"
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         schema:
 *           $ref: "#/definitions/Book"
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error

 *   delete:
 *     tags:
 *       - Book
 *     summary: Delete a book by ID
 *     description: Delete a book by its ID.
 *     parameters:
 *       - name: "id"
 *         in: "path"
 *         description: ID of the book to delete
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         schema:
 *           $ref: "#/definitions/Book"
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */

