# Angular With Tailwind CSS Setup

### 1. Install Tailwind CSS
```sh
$ npm i tailwind --save
```

### 2. Initialize A New Project
```sh
$ npx tailwind init
```

### 3. Install Angular Custom Webpack
```sh
$ npm add @angular-builders/custom-webpack
```

### 4. Import Tailwind SCSS Modules
in `src/styles.scss`
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Edit angular.json
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

### 6. Add extra-webpack.config.js
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
