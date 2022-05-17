# Why NPM?

NPM is the package manager for the **Node JavaScript platform**. It puts modules in place so that node can find them, and manages dependency conflicts intelligently.

It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.

- it is an **online repository** for the publishing of open-source Node.js projects.
- Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.

# Why NPM -g and save-dev?

### GLOBAL ( -g ) :-

    **-g means global**

Local packages are installed in the directory where
you run npm install **package-name** , and they are put in the node_modules folder under this directory. global packages are all put in a single place in your system (exactly where depends on your setup), regardless of where you run npm install -g **package-name**

### SAVE-DEV :-

Suppose you want to create a new package like **express**, now while development of this new package you probably want to write some unit testing code and test the package with any other available testing package let's assume **mocha** in this case.

Now you know mocha is only required to test the package not required to use the package. In this case you should install **mocha** using **--save-dev** flag, otherwise NPM will install it whenever a developer install your package using **NPM**.

So if we want a dependency not installed when someone install our package from NPM we must install that package using **--save-dev** in development phase.

# Why YARN?

**Yarn** is a package manager for **Node.js** that focuses on **_speed, security, and consistency_**. It was originally created to address some issues with the popular NPM package manager.

Though the two package managers have since converged in terms of performance and features, Yarn remains popular, especially in the world of React development.

Some of the unique features of Yarn are:

- A per-project caching mechanism, that can greatly speed up subsequent installs and builds
  Consistent, deterministic installs that guarantee the structure of installed libraries are always the same.

- Checksum testing of all packages to verify their integrity

- **Workspaces**, which facilitate using Yarn in a monorepo (multiple projects developed in a single source code repository)

# Upgarde to new YARN packages ( Express )

If you just do **yarn upgrade express** now, it will keep using the version in **package.json**.

If we want to make sure the Latest gets installed and then also **package.json** is updated, we can specify the **--latest** flag:

# Use Express in projects

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.

## Installing Express

Firstly, install the Express framework globally using NPM so that it can be used to create a web application using node terminal.

     yarn add express

The above command saves the installation locally in the **node_modules** directory and creates a directory express inside **node_modules**. You should install the following important modules along with express

## Hello World Example

Express app which starts a server and listens on **port 8081** for connection. This app responds with **Hello World!** for requests to the homepage. For every other path, it will respond with a **404 Not Found**.

    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
    res.send('Hello World');
    })

    app.listen(8081, function () { 
        console.log("Server is running at http://localhost:8081")
    })

Run it with **node file-name.js**


# How to maintain External Dependencies in our Projects?

- ### Competitors activities
- ### Regulatory / Legistative
- ### Partner / Customer actions
- ### Community events
- ### Delivery / transaction times