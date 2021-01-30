# Keep-App---Built-with-React
So, I have been wondering about how React works with html, css, JS. This is the results of my learning process.

Like all website, this app starts with index.html. It loads index.js, this is just some tradition. From there, we load app.jsx. App.jsx is the actual entry point of the React app.

This app has only three components, the main page, the input field and note item. States and logics are mainly inside app, input field and note item will use callback function to change the state in the app.
Then the app will re-render using the upateded states.

Here is some instructions of how to run the app:
You may need a unix based command line too, like hyper, get it here:https://hyper.is/
You may need node.js, you can get it here: https://nodejs.org/zh-cn/ Get the lite edition should be good.

If you got the apps above, you will then need to go to the director of the project using hyper.
input this command: npm start, this command should tell you a ip address you can use to access the app.
Input the ip address in your prefered browser to use the app. The defaut ip should be: localhost:3000/
