---
menu:
  main:
    parent: "Getting Eve"
title: "Linux"
---

# Installing Eve on Linux

First, [download](https://github.com/witheve/Eve/archive/master.zip) the Eve source. You'll need a recent [node.js](https://nodejs.org) and then in the extracted Eve directory:

```
npm install
npm start
```

Then open `http://localhost:8080/` in your browser.

## Tips

Some distributions (most notably Ubuntu) have renamed `node` to `nodejs`. If this is the case, you'll need to create a symlink that remaps nodejs back to node. e.g.

```
ln -s /usr/bin/nodejs /usr/bin/node
```

Then proceed with the installation as usual

## See also

[mac](../mac) | [windows](../windows) | [docker](../docker) | [running](../running)