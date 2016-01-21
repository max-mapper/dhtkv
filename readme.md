# dhtkv

CLI for storing key/value data in the bittorrent mainline DHT.

You can use `get` and `put` to use [BEP 44](http://www.bittorrent.org/beps/bep_0044.html) functionality to store arbitary 1KB immutable or mutable metdata in the DHT itself

You can use `announce` and `lookup` to do the more standard ip:port announcing on the DHT

## usage

```
# using bep44 get/put (any payload)
$ dhtkv put "hello world"
23bd9c8eefcd7f7bab73c148d4f025f5ed4ae669

$ dhtkv get 23bd9c8eefcd7f7bab73c148d4f025f5ed4ae669
hello world

# using standard announce/lookup (ip:port payload only)
$ dhtkv announce some-infohash
announce success

$ dhtkv lookup some-infohash
{"host":"1.1.1.1","port":60911}
```
