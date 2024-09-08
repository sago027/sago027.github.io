class Environment{
    #simbols;
    #functions;

    constructor(parent)
    {
        this.parent = parent;
        this.#simbols = new Map();
        this.#functions = new Map();
    }

    add_symbol(symbol){
        this.#simbols.set(simbol.id, symbol);
    }
}

export default Environment;