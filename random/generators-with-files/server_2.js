import { createServer } from 'http'

const PORT = 42070

async function handler(req, resp) {
    if (
        req.method === "POST" &&
        req.url.includes("cart")
    ) {
        for await(const data of req) {
            const item = JSON.parse(data)
            return resp.end(`process suceeded for ${item.id}`)
        }
    }

    return resp.end("products!")
}

createServer(handler)
    .listen(PORT, () => {
        console.log(`products API is running at ${PORT}`)
    })
