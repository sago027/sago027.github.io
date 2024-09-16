import Expression from "./expression.js";

class Variable extends Expression{
    constructor(line, column, value, type, id)
    {
        super();
        this.line = line;
        this.column = column;
        this.value = value;
        this.type = type;
        this.id = id;
    }

    executeExpression(env)
    {
        let variable =  new Variable(line, column, value, type, id);
        if(this.type == 1)
        {
            variable.value = parseInt(variable.value, 10);
            console.log(variable);
        }
        return variable;
    }
}

export default Variable;