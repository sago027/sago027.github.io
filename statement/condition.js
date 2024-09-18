import Environment from "../scope/environment.js";
import Instruction from "./instruction.js";

class Condition extends Instruction{
    constructor(line, column, expression, if_block, else_block)
    {
        super();
        this.line = line;
        this.column = column;
        this.expression = expression;        
        this.if_block = if_block;
        this.else_block = else_block;
    }

    execute(env){
        let result = this.expression.execute(env);
        
        
        if(result.value == true)
        {
            console.log(this.if_block);
            let inner_env = new Environment(env);
            this.if_block.forEach(element => {
                element.execute(inner_env);
            });
        }
        else{
            let inner_env = new Environment(env);
            this.else_block.forEach(element => {
                element.execute(inner_env);
            })
        }
    }
}

export default Condition;