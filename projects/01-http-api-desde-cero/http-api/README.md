# http-api

This project is an HTTP API built with Bun. It allows you to create, read, update and delete tasks. The tasks are stored in a JSON file.

## Endpoints
- `GET /api/health`: Returns a simple "OK" response to indicate that the server is running.
- `GET /api/tasks`: Returns a list of tasks. Supports pagination and filtering by state and priority.
- `POST /api/tasks`: Creates a new task. Expects a JSON body with `title` and `description` fields.
- `GET /api/tasks/:id`: Returns a task by its ID.
- `PATCH /api/tasks/:id`: Updates a task by its ID. Expects a JSON body with `title` and/or `description` fields.
- `DELETE /api/tasks/:id`: Deletes a task by its ID.

## Error Handling
The API uses a custom error handler to return consistent error responses. If an error occurs, the API will return a JSON response with an `error` field containing the error message and a `status` field containing the HTTP status code.

## Running the API
To run the API, follow these steps:
1. Make sure you have Bun installed. You can download it from [https://bun.sh](https://bun.sh/).
2. Navigate to the `http-api` directory in your terminal.
3. Run the command `bun install` to install the dependencies.
4. Run the command `bun run index.ts` to start the server.
5. The server will be running on `http://localhost:3000`. You can use tools like Postman or curl to test the endpoints.

### Optional:
You can also run the API using Docker. To do this, follow these steps:
1. Make sure you have Docker installed. You can download it from [https://www.docker.com/](https://www.docker.com/).
2. Navigate to the `http-api` directory in your terminal.
3. Build the Docker image using the command `docker build --pull -t http-api .`.
4. Run the Docker container using the command `docker run -d -p 3000:3000 http-api`.
5. The server will be running on `http://localhost:3000`. You can use tools like Postman or curl to test the endpoints.

## Project Structure
- `index.ts`: The main entry point of the application. It sets up the server and defines the routes.
- `routes/`: This directory contains the route handlers for the API endpoints.
- `utils.ts`: This file contains utility functions for managing tasks, such as reading and writing tasks from the JSON file, and applying pagination and filters.
- `errorHandler.ts`: This file contains the custom error handler function that formats error responses consistently.
- `tasks.json`: This file is used to store the tasks in JSON format. It is read and written by the utility functions in `utils.ts`.

## Architecture and Design Decisions
- The API is built using Bun, which provides a modern and efficient runtime for JavaScript and TypeScript applications.
- The API follows RESTful principles, using appropriate HTTP methods and status codes for different operations.
- The API uses a simple file-based storage mechanism (JSON file) for simplicity and ease of understanding. In a production application, you would typically use a database for persistence.
- The API includes error handling to ensure that clients receive consistent and informative error responses. This helps with debugging and improves the overall developer experience when consuming the API.
- The API supports pagination and filtering for the listing endpoint to allow clients to retrieve only the data they need and to improve performance when dealing with large datasets.

## Testing
The API includes tests for the route handlers. To run the tests, follow these steps:
1. Make sure you have Bun installed.
2. Navigate to the `http-api` directory in your terminal.
3. Run the command `bun test` to execute the tests. The tests will use a mock for the file writing operation to avoid modifying the actual `tasks.json` file during testing. The tests will verify that the route handlers behave as expected, including handling of valid and invalid input, and proper error handling.

## Postman
The API can be tested using Postman. A collection of requests is available in the `assets` directory. You can import the `http-api.project-01.postman_collection.json` file into Postman to get started with testing the API endpoints. The collection includes example requests for each endpoint, along with sample request bodies and expected responses. This can help you quickly understand how to interact with the API and verify that it is working correctly.