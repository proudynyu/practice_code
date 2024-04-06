/******************* INTERFACES *******************/
interface Credentials {
    email: string
    password: string
}

interface Address {
    state: string
    address: string
    postalCode: string

    // etc
}

interface User {
    name: string
    phone: string
    address: Address
}

interface NaturalUser extends User {
    name: string // esse n precisa, User ja possui a prop name
    cpf: string
}

interface JuridicUser extends User {
    companyName: string // acho que tu poderia usar o name tbm
    cnpj: string
}


/******************* CLASS *******************/
abstract class Repository {
    constructor() {}

    abstract signIn(): void
}

class MongoRepo implements Repository {
    constructor() {
        super()
    }

    public signIn(): void {

    }
}

abstract class SignUp {
    private repo: Repository

    contructor(repo: Repository) {
        this.repo = repo
    }

    abstract signUp(): void

    public signIn(): boolean {
        return this.repo.login()
    }
}
