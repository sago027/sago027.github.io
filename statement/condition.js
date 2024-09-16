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
}

export default Condition;