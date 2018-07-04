# Redux Boilerplate

## Usage

#### 1. Install all dependencies

```
npm install
```

#### 2a. Development Environment

```
npm start
```

Application will be running on http://localhost:8080

#### 2b. Production Environment

```
npm run build
```

The minified bundle files will be compiled in dist directory.

## Folder Structure

```
root/
└───readme.md
└───index.html
└───package.json
└───webpack.config.js
└───postcss.config.js
└───.eslintrc.js
└───.gitignore
│
└───assets
│   └───img
│   │
│   └───scss
│
└───src
    └───index.js
    │
    └───routes
    │
    └───constants
    │
    └───actions
    │
    └───reducers
    │
    └───stores
    │
    └───components
        │
        └───layouts
        │
        └───containers
        │
        └───presentations
```

#### src

| directory/file  |                   description                   |
| --------------- | :---------------------------------------------: |
| index.js        |                   entry point                   |
| routes          |      router & routes for different layout       |
| constants       |              contains action types              |
| actions         |            source of data for store             |
| reducers        | manage changes of states in response to actions |
| stores          |            hold application's state             |
| components      |           contains all UI components            |
| └─layouts       |          contains all Layout for pages          |
| └─containers    |  smart components that are connected to Redux   |
| └─presentations | dumb components that are not connected to Redux |
