# Build from source

## System Requirements

- [node.js](https://nodejs.org/)
- Java SDK (8+) [OpenJDK](https://openjdk.org/) or 
  [Oracle](https://www.oracle.com/java/technologies/downloads/)
- [Clojure](https://clojure.org/guides/install_clojure)


## Shell instructions

Clone the project and go into the directory.

```bash
git clone https://github.com/repath-project/repath-studio.git 
```

Go into the directory.

```bash
cd repath-studio
```

Install the dependencies and build the webb application.

```bash
npm install && npm run build
```

Package the electron application.

```bash
npm run dist
```

The app will be available under the `dist` directory.
