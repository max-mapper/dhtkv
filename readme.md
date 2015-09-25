# dhtkv

CLI for storing key/value data in the bittorrent mainline DHT. relies on the recent [BEP 44](http://www.bittorrent.org/beps/bep_0044.html) functionality to store arbitary 1KB immutable or mutable metdata in the DHT itself

## usage

```
$ dhtkv put "hello world"
23bd9c8eefcd7f7bab73c148d4f025f5ed4ae669

$ dht get 23bd9c8eefcd7f7bab73c148d4f025f5ed4ae669
hello world
```
