# write-stream

Base class for writable streams

## Example

```
var to = require("write-stream")
    , from = require("read-stream")

from([1,2,3,4]).pipe(to([], function (array) {
    assert.equal([1,2,3,4], array)
}))
```

## Installation

`npm install write-stream`

## Contributors

 - Raynos

## MIT Licenced