import Instruction from "./instruction.js";

class Print extends Instruction{
    constructor(line, column, expression)
    {
        super();
        this.line = line;
        this.column = column;
        this.expression = expression;
    }

    execute(env){
        if(this.expression.type == "IDENTIFIER")
        {
            let resultado = env.buscar_variable(this.expression.value);
            env.prints.push(resultado.value.value);
        }
        else{
            env.prints.push(this.expression.value);
        }
        
        
    }
}

export default Print;