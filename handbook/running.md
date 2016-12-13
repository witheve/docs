---
menu:
  main:
    parent: "Introduction"
title: "Running Eve"
weight: 2
---

# Running Eve

If you've downloaded and installed Eve via [npm](../npm), you can launch Eve with the `eve` command.

```
eve
```

This launches an Eve server running in the Eve root directory at `http://localhost:8080`. From here, you'll be directed to `quickstart.eve`, and have access to the Eve examples directory from within the editor.

## Running an Eve File

If you want to run a specific Eve program, you can provide its path after the `eve` command:

```
eve ~/myDir/myEveFile.eve
```

Then you navigate to Eve in your browser to access the specified program. If you like, you can also recover the editor with a flag:

```
eve ~/myEveDir/myEveFile.eve --editor
```

This will run the supplied Eve program with the editor visible

## Running Eve in Server mode

Eve can be started in server mode using the `--server` flag:

```
eve --server
```

Without this flag, execution of Eve programs happens within the browser, with the Eve server acting only as a file server between the browser and your local system. In server mode, Eve will instead execute your program on the server. Currently written programs will operate exactly as before, but this is a preliminary step in order to get networked Eve applications going (like a chat server or a multiplayer game). There is still work needed to be done there 


## Eve Workspaces

You can run Eve in a custom workspace. To create a new Eve workspace, create a folder with an empty file named `package.json`, then start Eve from within this folder. Eve recognizes that it is starting an Eve workspace, and will serve `*.eve` files from within this directory instead of the Eve examples folder. Furthermore, you can serve various assets, like images or CSS, by placing them in an "assets" sub-folder.

## Flags

- server - run Eve in server execution mode.
- editor - run Eve with the editor visible. This defaults to false, except when Eve is started in an Eve project folder.
- port - specify the port on which to run the Eve server. Alternatively, the running port can be specified with the `PORT` environment variable, which takes precedence over the `port` flag.

## Running Eve from Source

To run Eve from source, you invoke the following command in the extracted Eve folder:

```
npm start
```

You can apply the above flags to this command, but you'll need an extra `--` to do so. e.g.

```
npm start -- --port 1234
```

## See Also

[linux](../linux) | [mac](../mac) | [windows](../windows) | [docker](../docker) | [npm](../npm)