#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2))
var DHT = require('bittorrent-dht')

var first = args._[0]
var second = args._[1]

if (!first) {
  console.log('Usage: dhtkv <command>')
  process.exit(1)
}

var dht = new DHT()
route()

function route () {
  if (first === 'get') {
    dht.get(second, function (err, res) {
      if (err) throw err
      if (res) console.log(res.v.toString())
      else console.error('Could not find ' + second)
      process.exit(0)
    })
    return
  }

  if (first === 'put') {
    dht.put({v: second}, function (err, hash) {
      if (err) throw err
      if (hash) console.log(hash.toString('hex'))
      process.exit(0)
    })
    return
  }

  console.error('Unknown command:', first)
}
