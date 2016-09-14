# Running

## Native

To run Eve, execute the following command in the `eve/build` directory:

```
./eve
```

This command launches a server hosted at `http://localhost:8080`. You can access the Eve editor by directing your browser to that address. We recommend using Chrome, since we haven't tested on other browsers. You can configure the port with the `--port` flag e.g. `./eve --port 1234`.

If you want to compile an existing program, use the `-e` flag and provide a path to a `*.eve` file e.g. `./eve -e ../examples/tic-tac-toe.eve`. As you make changes in the editor, they will be reflected back into this file.

## Docker

To run the Docker container, execute:

```
docker run -p [port]:8080 witheve/eve [eve_file]
```

`[port]` is an available port on your local machine. It can be `8080` or any other port you would like. Then direct your browser to `http://localhost:[port]` to access the editor.

`[eve_file]` is a path to a `*.eve` file you would like to build. The working directory of the container is `eve/build`, so to run a program in the `eve/examples` directory, you need to provide a relative path e.g. 

```
docker -p 8080:8080 witheve/eve ../examples/clock.eve
```

To pass Eve files on your local machine into the container, you'll need to mount a [docker volume](https://docs.docker.com/engine/tutorials/dockervolumes/).

## Flags

```
flag  long flag  description                 
p     parse      parse and print structure   
a     analyze    parse order print structure
r     run        execute eve
S     seve       use the subsequent eve file to serve http requests  
e     exec       read eve file and serve
p     port       serve http on passed port
h     help       print help
j     json       source json object from file
t     tracing    enable per-statement tracing
```

## Examples

Execute a `*.eve` file.

```
./eve -e ../example/clock.eve
```

A `*.eve` file can be passed as a default argument

```
./eve ../example.clock.eve
```

Use a custom port

```
./eve -p 3000
```

Launch Eve using Docker

```
docker run -p 8080:8080 witheve/eve ../examples/clock.eve
```


