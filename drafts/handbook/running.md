# Running

## Native

To run Eve, execute the following command in the `eve/build` directory:

`./eve`

This command launches a server at `http://localhost:8080`. You can configure the port with the `--port` flag e.g. `./eve --port 1234`. You can point your browser that location to access the Eve editor. 

If you want to compile an existing program, use the `-e` flag and provide a path to a `*.eve` file e.g. `./eve -e ../examples/tic-tac-toe.eve`. As you make changes in the editor, they will be reflected back into this file.

## Docker

To run the Docker container, execute:

```
docker run -p [port]:8080 witheve/eve [eve_file]
```

Here, `[port]` is an available port on your local machine. It can be `8080` or any other port you would like. Then direct your browser to `http://localhost:[port]` to access the editor.

**Note**: The working directory of the container is `eve/build`. To run a program in the `eve/examples` directory, you need to provide a relative path e.g. `../examples/tic-tac-toe.eve`. To pass Eve files on your local machine into the container, you'll need to mount a [docker volume](https://docs.docker.com/engine/tutorials/dockervolumes/). 
