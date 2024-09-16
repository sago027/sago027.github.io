import Environment from "../scope/environment.js";
import Expression from "./expression.js";

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
    
    executeInstruction(env)
    {
        
    }
}

export default Declaration;