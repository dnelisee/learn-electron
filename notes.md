### Difference between CommonJS and ESM 
CommonJS is a specification of coding javaScript outside of web browsers. 
Introduced in 2009 by a Mozilla engineer as ServerJS, it is now called CommonJS. 
It tells us to use `module.export()` to export modules and `require()` to import them. 
It is not natively supported by browsers so one needs to transpiled it into ES modules. 

ESM is the official javaScript specification. With ES6(2015), it tells us to 
use ``export()`` and ``import()`` fonction to respectively import and export modules. 

### How Asynchronous JavaScript Works Behind the Scenes 

To understand asynchronous behavior better, it’s important to know about the JavaScript runtime environment, specifically the event loop and call stack:

- **Call Stack**: The call stack is where functions are executed in the order they’re called. In synchronous operations, each function is added to the stack and executed before moving to the next.
- **Web APIs (in Browsers)**: Functions like setTimeout, HTTP requests, and event listeners are handled by Web APIs in the browser. When an asynchronous function like setTimeout is called, it is passed to these Web APIs, which manage the timing without blocking the main call stack.
- **Callback Queue**: Once the Web API has finished its job (like waiting for the timeout), it pushes the callback function (like the one in setTimeout) to the callback queue.
- **Event Loop**: The event loop continuously checks the call stack. If it’s empty, it pushes the functions from the callback queue onto the stack for execution. This is why the delayed message "Geek" is logged after other code has finished.

>When a code (in a function for example) is asynchronous, it means that it will not be immediately 
> runned in the call stack but be runned in background and when finished the result will be used.

### Installing doc of an API when coding 
Since javaScript is less typed, it is not easy to have directly the documentation 
of functions and objects when hovering the code on vscode. 
So we need to install official doc for used APIs. 
For example : For electron, just do : npm install --save-dev @types/electron 
