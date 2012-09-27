var Stream = require("stream")

module.exports = WriteStream

WriteStream.toArray = require("./array")

function WriteStream(write, end) {
    var stream = new Stream()
        , ended = false

    end = end || noop

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

function noop() {}
