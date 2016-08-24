# Running

To run Eve, execute the following command in the `eve/build` directory:

`./eve -e [eve_file]`

where `[eve_file]` is the location of an `*.eve` file you want to compile. This process launches a server at `http://localhost:8080`. You can point your browser there to see the results of the compilation. You can configure the port with the `--port` flag. e.g. `./eve --port 1234`.

## Docker

To run the Docker container, execute:

```
docker run -p [port]:8080 witheve/eve [eve_file]
```

Here, `[port]` is an available port on your local machine. It can be `8080` or any other port you would like. Then direct your browser to `http://localhost:[port]` to access the results. **Note**: To pass your own Eve files into the container, you'll need to mount a [docker volume](https://docs.docker.com/engine/tutorials/dockervolumes/).