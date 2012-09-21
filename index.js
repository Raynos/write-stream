var Stream = require("stream")

to.end = defaultEnd

module.exports = to

function to(write, end) {
    end = end || defaultEnd

    if (Array.isArray(write)) {
        return toArray(write, end)
    }

    var stream = new Stream()
        , ended = false

    stream.write = handleWrite
    stream.end = handleEnd

    return stream

    function handleWrite(chunk) {
        var result = write.call(stream, chunk)
        return result === false ? false : true
    }

    function handleEnd(chunk) {
        if (ended) {
            return
        }

        ended = true
        if (arguments.length) {
            stream.write(chunk)
        }
        end.call(stream)
    }
}

function toArray(array, end) {
    return to(writeArray, end)

    function writeArray(chunk) {
        array.push(chunk)
    }
}

function defaultEnd() {
    this.emit("end")
}