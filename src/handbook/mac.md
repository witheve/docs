---
menu:
  main:
    parent: "Getting Eve"
title: "Mac"
---

# Installing Eve on Mac

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

## See also

[linux](../linux) | [windows](../windows) | [docker](../docker) | [running](../running)