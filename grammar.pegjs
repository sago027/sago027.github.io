// Definición de la gramática
{
  // Puedes definir aquí una lista que capture las instrucciones
  let instructions = [];
}

// Regla principal
start
  = statement_list

// Lista de instrucciones
statement_list
  = head:statement tail:(_ statement)* {
      // Combina la primera instrucción con el resto
      instructions = [head, ...tail.map(item => item[1])];
      return instructions;
  }

// Definición de una instrucción
statement
  = vd:variable_declaration {return vd;}
  / va:variable_assign {return va;}
  / ie:if_else {return ie;}
  / fc:function_call {return fc;}
  / ss:switch_statement {return ss;}
  / ws:whileStatement {return ws;}

if_else
  = "if" _ "(" _ condition:expression _ ")" _ then_branch:block _ else_branch:else_clause? {
      const loc = location()?.start;
      return  new Condition(loc?.line, loc?.column,condition, block, else_branch);
  }

// Else (opcional, puede contener otro if_else de manera recursiva)
else_clause
  = "else" _ else_block:block {
      return else_block;
  }

switch_statement
  = "switch" _ "(" _ exp:expression _ ")" _ "{" _ cb:caseBlock _ "}"
  {
      const loc = location()?.start;
      return new Switch(loc?.line, loc?.column, exp,cb);
  }

caseBlock
  = (caseStatement / defaultStatement)*

caseStatement
  = "case" _ caseExpr:expression _ ":" _ caseBody:statement* _ {
      return { type: "CaseStatement", caseExpr, caseBody };
    }

defaultStatement
  = "default" _ ":" _ defaultBody:statement* {
      return { type: "DefaultStatement", defaultBody };
    }
 
whileStatement
  = "while" _ "(" _ condition:expression _ ")" _ "{" _ body:statement_list _ "}" {
      const loc = location()?.start;
      return new Wile(loc?.line, loc?.column, condition, body);
    }    



// Bloque de código (simplificado para este ejemplo)
block
  = "{" _ statements:statement_list _ "}" {
      return statements;
  }

variable_assign 
  = _ name:identifier _ value:assign _ ";"
  / _ name:identifier "++" 

// Ejemplo de declaración de variable
variable_declaration
  = type:type _ name:identifier _ value:assign _ ";" {
      const loc = location()?.start;
      return new Declaration(loc?.line, loc?.column, name, type, value, "N");
  }

array_declaration
  = type:type _ "[]" _ varName:identifier _ "=" _ "{" _ elements:expression* _ "}" _ ";" {
      return { type: "ArrayDeclaration", varName, elements: elements || [] };
    }


assign = "=" _ value:expression {return value;}
  / epsilon {return null;}

// Ejemplo de llamada a una función
function_call
  = name:identifier "(" _ args:expression_list? _ ")" ";" {
      return { type: "function_call", name, args: args || [] };
  }

// Lista de expresiones (para los argumentos de la función)
expression_list
  = head:expression tail:(_ "," _ expression)* {
      return [head, ...tail.map(item => item[3])];
  }

// Expresiones (por simplicidad, solo números en este ejemplo)
expression
  = be:boolExp { return be;}

boolExp 
  = re:relExp _ "&&" _ be:boolExp{
                          const loc = location()?.start;
                          return new Arithmetic(loc?.line, loc?.column, re, be, "&&");
                        }
  / re:relExp {return re;}

relExp
  = ae:arithmeticExp _ ">" _ re:relExp {
                                const loc = location()?.start;
                                return new Arithmetic(loc?.line, loc?.column, ae, re, ">");
                              }
  / ae:arithmeticExp {return ae;}

arithmeticExp
  = pe:prodExp "+" ae:arithmeticExp{
                                const loc = location()?.start;
                                return new Arithmetic(loc?.line, loc?.column, pe, ae, "+");
                              }
  / pe:prodExp {return pe;}

prodExp
  = fac:factor "*" pe:prodExp {
                                const loc = location()?.start;
                                return new Arithmetic(loc?.line, loc?.column, fac, pe, "*");
                              }
  / fac:factor {return fac;} 

factor 
  = val:number {return val;}
  / val:identifier {return val;}
  / "(" _ be:boolExp _ ")" {return be;}


type="int" 
    /"float"
    /"string"
    /"boolean"
    /"char"
    /"var"

// Identificadores (nombre de variables o funciones)
identifier
  = $([a-zA-Z_][a-zA-Z0-9_]*) {return text();}

// Números
number
  = $([0-9]+) { return parseInt(text(), 10); }

// Espacios en blanco
_ "whitespace"
  = [ \t\n\r]*

  epsilon = ''
