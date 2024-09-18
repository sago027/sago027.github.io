class Environment{
    #symbols;
    #functions;
    #structs;
    #prints;

    constructor(parent)
    {
        this.parent = parent;
        this.#symbols = new Map();
        this.#functions = new Map();
        this.#structs = new Map();
        this.prints = [];
    }

    getSymbols()
    {
      return this.#symbols;
    }
    
    add_symbol(symbol){
        this.#symbols.set(symbol.id, symbol);
    }

    #find_symbol(id) {
        for(const iterator of this.#symbols) {
          if(iterator[0] === id) {
            console.log(iterator[1]);
            return iterator[1];
          }
        }
        return null;
      }
    
      buscar_variable(id) {
        return this.#find_variable(id, this);
      }

      update_variable(id, newValue)
      {
        let variable = this.buscar_variable(id);
        console.log("variable",variable, newValue);
        variable.value.value = newValue.value;
      }
    
    
      #find_variable(id, root) {
        if(root === null || root === undefined) {
          return null;
        }
    
        let current = root.#symbols;
        for(const element of current) {
          if(element[0] === id) {
            return element[1];
          }
        }
    
        return this.#find_variable(id, root.parent);
      }    
}

export default Environment;