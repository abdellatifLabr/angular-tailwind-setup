# Angular With Tailwind Css Setup

### Install Tailwind Css
```bash
$ npm i tailwind --save
```

###  Initialize A New Project
```bash
$ npx tailwind init
```

### Install Angular Custo Webpack
```bash
$ npm add @angular-builders/custom-webpack
```

### Import Tailwind Scss Modules
in `src/styles.scss`
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Edit angular.json
```json
"architect": {
  "build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "./extra-webpack.config.js"
      },
      "outputPath": "dist/angular-tailwind",
      ...
    },
  }
},
"serve":{
  "builder": "@angular-builders/custom-webpack:dev-server"
}
```

### Add extra-webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("tailwindcss")("./tailwind.config.js")]
            }
          }
        ]
      }
    ]
  }
};
```

### It's Done!!!
