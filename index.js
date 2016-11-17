module.exports = function onAbort (fn) {
    return function sink (read) {
        return function source (abort, cb) {
            if (abort) return read(fn(), cb)
            return read(abort, cb)
        }
    }
}

