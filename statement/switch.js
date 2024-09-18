import Instruction from "./instruction.js";

class Switch extends Instruction{
    constructor(line, column, expression, caseBlock){
        super();
        this.line = line;
        this.column = column;
        this.expression = expression;
        this.caseBlock = caseBlock;
    }

    execute(env){
        
    }
}

export default Switch;