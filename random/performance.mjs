export function run(fn, ...args) {
    const start = performance.now()

    fn(args)

    return performance.now() - start
}
