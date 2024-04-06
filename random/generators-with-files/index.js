import axios from 'axios'

const db = async() => Array.from({ length: 1000}, (_, index) => `${index}-cellphone`)

const BASE_URL = "http://localhost"
const PRODUCTS_URL = BASE_URL.concat(":42069").concat("/products")
const CART_URL = BASE_URL.concat(":42070").concat("/cart")

async function processDbData() {
    const products = await db()

    for (const product of products) {

    }
}
