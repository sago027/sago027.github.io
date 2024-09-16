import Expression from "./expression.js";

class Logical extends Expression{
    constructor(line, column, left, right, op) {
        super();
        this.left = left;
        this.right = right;
        this.op = op;
        this.line = line;
        this.column = column;
      }    
}

export default Logical;