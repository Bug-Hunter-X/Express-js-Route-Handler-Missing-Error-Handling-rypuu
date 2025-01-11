# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: insufficient error handling for invalid input.

The `bug.js` file shows a route handler that attempts to retrieve a user by ID.  However, it lacks proper error handling. If an invalid ID is provided, it sends a generic 404 response, lacking details helpful for debugging or identifying the root cause.

The `bugSolution.js` file provides a corrected version with more robust error handling, including logging and sending more informative error responses.