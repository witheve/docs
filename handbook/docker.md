---
menu:
  main:
    parent: "Getting Eve"
title: "Docker"
weight: 4
---

# Eve in Docker

A Docker container for Eve is available on [Docker Hub](https://hub.docker.com/r/witheve/eve/). After [installing Docker](http://www.docker.com/products/docker) for your platform, you can download our container with the following command:

```
docker pull witheve/eve
```

Windows Users - Docker for Windows requires Microsoft Hyper-V, which requires Windows 10.

## Examples

To run the Docker container, execute:

```
docker run -p [port]:8080 witheve/eve
```

`[port]` is an available port on your local machine. It can be 8080 or any other port you would like. Then direct your browser to `http://localhost:[port]` to access the editor.

`[eve_file]` is a path to a `*.eve` file you would like to build. The working directory of the container is `eve/build`, so to run a program in the `eve/examples` directory, you need to provide a relative path e.g. 

```
docker -p 8080:8080 witheve/eve
```

To pass Eve files on your local machine into the container, you'll need to mount a [docker volume](https://docs.docker.com/engine/tutorials/dockervolumes/). 

## See also

[linux](../linux) | [mac](../mac) | [windows](../windows) | [npm](../npm) |[running](../running)