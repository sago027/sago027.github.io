import Environment from "../scope/environment.js";
import Instruction from "./instruction.js";

class While extends Instruction{
    constructor(line, column, expression, statements)
    {
        super();
        this.line = line;
        this.column = column;
        this.expression = expression;
        this.statements = statements;
    }

    execute(env){
        let result = this.expression.execute(env);
        if(result != null)
        {
            let inner_env = new Environment(env);
            while(result.value == true)
            {
                this.statements.forEach(element => {
                    element.execute(inner_env);
                });

                result = this.expression.execute(env);
            }
        }        
    }
}

export default While;