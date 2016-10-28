---
menu:
  main:
    parent: "Getting Eve"
title: "Linux"
---

# Installing Eve on Linux

## From Source

Before you can install Eve you'll need need LuaJIT, gcc, make, and python. Currently, building from source is only supported on Linux and OSX. On Windows, we've managed to compile Eve in cygwin, but have not gotten it to run yet. Contributions are welcome on this front.

First install gcc, make, and python using your operating system's standard channels. Chances are you already have these. Install luajit by downloading [LuaJIT-2.1.0-beta2](http://luajit.org/download.html) and then in the LuaJIT directory:

```
make
make install
```

By default, LuaJIT is not added to your path, so you'll need to do that as well:

```
ln -sf luajit-2.1.0-beta2 /usr/local/bin/luajit
```

Next you'll need to download the Eve source, either by cloning our repository

```
git clone https://github.com/witheve/Eve.git
```

or downloading the source [directly](https://github.com/witheve/Eve/archive/master.zip).

To build Eve, execute `make` in the `eve/build` directory.

## Docker

Eve is also on [Docker Hub](https://hub.docker.com/r/witheve/eve/). You can get our container with the following command:

```
docker pull witheve/eve
```

Windows Users - Docker for Windows requires Microsoft Hyper-V, which requires Windows 10. For users of earlier Windows versions, binaries are forthcoming.

## See also

[mac](../mac) | [windows](../windows) | [docker](../docker) | [running](../running)