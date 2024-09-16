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
}

export default While;