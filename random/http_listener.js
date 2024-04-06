import Http from 'http'
async function InjectHttpInterceptor() {
  const oldEmit = Http.Server.prototype.emit;
  Http.Server.prototype.emit = function (...args) {
    const [type, req, response] = args
    return oldEmit.apply(this, args)
  }
}
