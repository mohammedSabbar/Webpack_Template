# 🔨 Webpack_Template
This is full template for developing your code using Typescript and SASS.

## Version of the packages:
```JS
"css-loader": "^0.28.4",
"extract-text-webpack-plugin": "^2.1.2",
"html-webpack-plugin": "^2.28.0",
"node-sass": "^4.5.3",
"sass-loader": "^6.0.6",
"style-loader": "^0.18.2",
"ts-loader": "^2.1.0",
"typescript": "^2.3.4",
"webpack": "^2.6.1",
"webpack-dev-server": "^2.4.5"
```

## New Features
- V(1.0) First initialize.

## Why we need Webpack

1. It is an easy way to manage, test, build, manified your code.
2. It has a powerfull tools to bundle and compile files like SASS/CSS, Typescript/ES(X) which X the the version of the javascript code. By default ES5;
3. You can devide your project into files to make it easier and faster in developing using inport/export codes in Typescript.
4. Easy and simple line of code using npm will manage the whole project.
5. You can make your own configure as you intend to.
6. This template has all the nessecary dependencies so you dont have to worry about repuckaging.
7. The project will be under watch mode.
8. Abilitiy to test the project using localhost:9000 server.

## 🔬 Installation

Make a project clone into your machine using Git CLI
```JS
git clone https://github.com/AhmedBHameed/Webpack_Template.git
```
Then install the package using node package manager
```JS
npm install
```
Your main application is app.ts so import any modules,classes,sass,css files inside it.
Modify your index.ejs which is the main template. Any extra library try to attach them inside your app.ts then the package will bundle and attach them all as a final product.
It is located under src folder.
dist is the final project after compiling.

* For testing the project using localhost:9000 server use
```JS
npm run serve
```

* For building the project using as final product use
```JS
npm run build
```

Note: running any task will make the project in watch mode which that means any changes will be directly detected. 
Enjoy...

### Built With

* [Webpack](https://webpack.js.org/).

### License

This project is licensed under the MIT License.
In words it is free to use and develope.