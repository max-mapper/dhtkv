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
dht.on('ready', route)

function route () {
  if (first === 'get') {
    dht.get(second, function (err, res) {
      if (err) throw err
      console.log(res.v.toString())
      process.exit(0)
    })
    return
  }
  
  if (first === 'put') {
    dht.put({v: second}, function (errors, hash) {
      if (errors) {
        errors.forEach(function (e) {
          console.log(e)
        })
      }
      if (hash) console.log(hash.toString('hex'))
      process.exit(0)
    })
    return
  }

  console.error('Unknown command:', first)
}
