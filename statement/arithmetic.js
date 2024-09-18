import Expression from "./expression.js";
import Literal from "./literal.js";

class Arithmetic extends Expression{
    constructor(line, column, left, right, op) {
        super();
        this.left = left;
        this.right = right;
        this.op = op;
        this.line = line;
        this.column = column;
      }

      execute(env)
      {
        let left_val = this.left.execute(env);
        let right_val = this.right.execute(env);

        if(this.op == "+") 
        {
          return new Literal(this.line, this.column, left_val.value + right_val.value, this.left.type);
        }
        else if(this.op == "-")
        {
            return new Literal(this.line, this.column, left_val.value - right_val.value, this.left.type);
        }
        else if(this.op == "*")
        {
          return new Literal(this.line, this.column, left_val.value * right_val.value, this.left.type);
        }
        else if(this.op == "/")
        {
          return new Literal(this.line, this.column, left_val.value / right_val.value, this.left.type);
        }
  


      }
    
}

export default Arithmetic;