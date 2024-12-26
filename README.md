# Node.js Server Unresponsiveness: Blocking Event Loop

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler blocks the event loop, leading to the server becoming unresponsive.  The `server.js` file contains the buggy code, while `serverSolution.js` provides the corrected version.

**Problem:** The original code performs a 5-second CPU-bound operation synchronously. This prevents the event loop from processing other requests or even closing the connection gracefully, causing the server to hang.

**Solution:** The solution involves refactoring the code to use asynchronous operations or offloading the long-running task to a worker thread or separate process, preventing the event loop from being blocked.