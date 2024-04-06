import { createServer } from 'http'
import { parse } from 'url'
import { randomUUID } from 'crypto'

const PORT = 42069

async function handler(req, resp) {
    if (
        req.method === "GET" &&
        req.url.includes("products")
    ) {
        const { query: { productName }} = parse(req.url, true)
        const result = {
            id: randomUUID(),
            product: productName
        }
        return resp.end(JSON.stringify({ result }))
    }

    return resp.end("products!")
}

createServer(handler)
    .listen(PORT, () => {
        console.log(`products API is running at ${PORT}`)
    })
