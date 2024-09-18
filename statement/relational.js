import Expression from "./expression.js";
import Literal from "./literal.js";
import Type from "./type.js";

class Relational extends Expression{
    constructor(line, column, left, right, op) {
        super();
        this.left = left;
        this.right = right;
        this.op = op;
        this.line = line;
        this.column = column;
      }

      execute(env){
        let left_val = this.left.execute(env);
        let right_val = this.right.execute(env);

        if(this.op == ">") 
        {
          return new Literal(this.line, this.column, (left_val.value > right_val.value), Type.BOOLEAN);
        }
        else if(this.op == ">=")
        {
          return new Literal(this.line, this.column, (left_val.value >= right_val.value), Type.BOOLEAN);
        }
        else if(this.op == "<=")
        {
          return new Literal(this.line, this.column, (left_val.value <= right_val.value), Type.BOOLEAN);
        }
        else if(this.op == "==")
        {
          return new Literal(this.line, this.column, (left_val.value == right_val.value), Type.BOOLEAN);
        }
        else if(this.op == "!=")
        {
          return new Literal(this.line, this.column, (left_val.value != right_val.value), Type.BOOLEAN);
        }
        else if(this.op == "<")
        {
          return new Literal(this.line, this.column, (left_val.value < right_val.value), Type.BOOLEAN);
        }
      
      }    
}

export default Relational;