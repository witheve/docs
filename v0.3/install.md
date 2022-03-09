---
layout: default
title: Installation
---

# Installation

Install [Node](https://nodejs.org/en/download/) for your platform, then clone and build the Eve starter repository:

```sh
git clone https://github.com/witheve/eve-starter.git
cd eve-starter
npm install
npm update
```

## Usage

In the eve-starter directory, you can launch the Program Switcher:

```sh
npm start
```

This will open your browser to the Program Switcher, which allows you can run the programs located in the `eve-starter/programs` directory. You can place your own `*.eve` files in this directory and run them from the Program Switcher.

### Running an Eve file

Eve documents are written in Markdown, where Eve code is embedded in code blocks. You can run a specific `*.eve` file by providing its path as an argument:

```sh
npm start -- path/to/program.eve
```

### Command Line Options

The command line interface accepts a number of configuration options, which can be displayed using the help command:

```sh
npm start -- --help
```

The available options include:

```help
-h, --help                     output usage information
-W, --workspace <name>:<path>  Search path(s) for programs
-I, --include <path>           Search path(s) for watchers
-H, --headless                 Run the specified program in node instead of the browser. Requires a specified file
-p, --port <number>            Run the Eve server on an alternate port. Default <8000>
-n, --no-open                  Don't automatically open Eve in the browser
-f, --list-found               List all programs and watchers found within their search paths
```


