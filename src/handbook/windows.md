---
menu:
  main:
    parent: "Getting Eve"
title: "Windows"
---

# Installing Eve on Windows

Eve currently does not build natively on Windows. However, you can still use Eve on Windows 10 via [Unbuntu on Windows][0]. Follow the linked instructions and then in a command line execute the following command to start a bash enviornment:

```
bash
```

Unfortunately, users of earlier verision of Windows will not be able to run Eve natively at this time.

[0]: https://msdn.microsoft.com/en-us/commandline/wsl/about

## From Source

In the bash environment, first install gcc, make, and python:

```
sudo apt-get install gcc make python
```

Install luajit by downloading [LuaJIT-2.1.0-beta2](http://luajit.org/download.html) and then in the LuaJIT directory:

```
make
make install
```

By default, LuaJIT is not added to your path, so you'll need to do that as well:

```
ln -sf luajit-2.1.0-beta2 /usr/local/bin/luajit
```

Next you'll need to download the Eve [source](https://github.com/witheve/Eve/archive/master.zip). Extract the contents to your desired installation location.  

Finally, to build Eve, execute `make` in the `eve/build` directory.

## See also

[linux](../linux) | [mac](../mac) | [docker](../docker) | [running](../running)