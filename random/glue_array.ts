let catalog = [
    {
        productId: 14,
        peso: 15
    },
    {
        productId: 20,
        peso: 35
    }
]
let orderForm = [
    {
        productId: 14,
        quantity: 5
    },
    {
        productId: 20,
        quantity: 3
    }
]

type Catalog = {
    productId: number
    peso: number
}

type OrderForm = {
    productId: number
    quantity: number
}

type FnResponse = {
    productId: number
    quantity: number
    peso: number
}

function withTypes(catalog: Catalog[], order: OrderForm[]): FnResponse[] {
    return catalog.map(product => {
        const [orderProd] = order.filter(p => p.productId === product.productId)
        return {
            productId: product.productId,
            peso: product.peso,
            quantity: orderProd?.quantity
        }
    })
}

console.log(withTypes(catalog, orderForm))
