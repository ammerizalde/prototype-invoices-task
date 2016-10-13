# angular-webpack

* Prototype to upload invoices, check prices, keep track of invoices and simulate a dashboard.

* The prototype simulates the way to upload files. Please note that the prototype doesn't validate or store the file.

* The prototype displays dummy data. The files of the dummies are located in ./invoice/invoice.json and ./stock/stock.json



>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

```bash
# clone our repo
$ git clone https://github.com/ammerizalde/prototype-invoices-task.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install
>Warning: If you are using windows please use npm install --only=dev

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`


# License

[MIT](/LICENSE)
