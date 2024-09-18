import Instruction from "./instruction.js";
import Symbol from "../scope/symbol.js";

class Assign extends Instruction{
    constructor(line, column, name, expression)
    {
        super();
        this.line = line;
        this.column = column;
        this.name = name;
        this.expression = expression;
    }

    execute(env)
    {
        let resultado = env.buscar_variable(this.name);

        if(resultado != null)
        {
            let res = this.expression.execute(env); 
            let symbol = new Symbol(this.name, res.value, resultado.type);
            env.update_variable(this.name, symbol);            
        }
    }
}

export default Assign;