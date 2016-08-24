# Installation

## From Source

To build Eve from source, you'll need LuaJIT, gcc, make, and python. Currently, building from source is only supported on Linux and OSX. On Windows, we've managed to compile Eve in cygwin, but have not gotten it to run yet. Contributions are welcome on this front.

Install luajit by downloading [LuaJIT-2.1.0-beta2](http://luajit.org/download.html) and then in the LuaJIT directory:

```
make
make install
```

By default, LuaJIT is not added to your path, so you'll need to do that as well:

```
ln -sf luajit-2.1.0-beta2 /usr/local/bin/luajit
```

then execute `make` in the `eve/build` directory.

## Docker

Eve is also on [Docker Hub](https://hub.docker.com/r/witheve/eve/). You can get our container with the following command:

```
docker pull witheve/eve
```

Windows Users - Docker for Windows requires Microsoft Hyper-V, which requires Windows 10. For users of earlier Windows versions, binaries are forthcoming.