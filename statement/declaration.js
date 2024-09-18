import Environment from "../scope/environment.js";
import Expression from "./expression.js";
import Symbol from "../scope/symbol.js";

class Declaration extends Expression{
    constructor(line, column, name, type, expression, isConstant)
    {
        super();
        this.line = line;
        this.column = column;
        this.name = name;
        this.type = type;
        this.expression = expression;
        this.isConstant = isConstant;
    }
    
    execute(env)
    {
        let result = null;
        if(this.expression != null){
            result = this.expression.execute(env);
        }    
        
        let symbol = new Symbol(this.name, result, this.type);
        env.add_symbol(symbol);
        
    }
}

export default Declaration; 