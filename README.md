# Clustering Node App

Increasing performance of Node app.

1. Using cluster mode (Recommended)
2. Using worker threads

This project is about clustering node app in order to gain some amount of performance. Clustering is a recomended way of improving node app performance.
Cluster mode is used to startup multiple copies of node that are all running your server inside them. We cannot somehow trick node into running with multiple threads, but by starting up multiple copies we get multiple instances of the event loop. It vaguely somewhat works in a similar fashion as making node kind of multi threaded.

Worker threads can be used to do lots of performance work inside of our app as well. These worker threads are going to use the thread pool that is setup by libuv whenever we startup our node app.

**Clustering in theory**
When we start to use clustering inside of a node app, we are going to be starting up multiple node processes. There is always going to be one parent process called the cluster manager. The cluster manager is responsible for monitering the health of individual instances of our node app that we are going to launch at the same on our computer.

The cluster manager itself doesn't execute any app code, in another words the cluster manager is not responsible for handling any request or fetching data from the database. Instead the cluster manager is responsible for monitoring the health of each of the instances. So the cluster manager can start, stop, restart, send them data or do administrative tasks essentially.

We can create the cluster manager and instances of our app and manage the health of each instances but there is one perticular library which will help mitigate this task. Its [pm2]("https://gitlab.com/Unitech/pm2") library.

```bash
$ npm i -g pm
```

**Start pm2**

```bash
$ pm2 start index.js -i 0
```

**List summary of health of running insatances**

```bash
$ pm2 list
```

**Get detailed info of your instance**

```bash
$ pm2 show index
```

**Access pm2 dashboard**

```bash
$ pm2 monit
```

**Stop running instances**

```bash
$ pm2 delete index
```
