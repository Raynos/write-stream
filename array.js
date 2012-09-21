var to = require("./index")

module.exports = toArray

function toArray(array, end) {
    return to(writeArray, endArray)

    function writeArray(chunk) {
        array.push(chunk)
    }

    function endArray() {
        end(array)
        this.emit("end")
    }
}