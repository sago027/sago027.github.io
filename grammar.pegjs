{
  const ARITHMETIC_OPERATOR = {
    MAS: 0,
    MENOS: 1,
    MULTIPLICAR: 2,
    DIVIDIR: 3,
    MODULO: 4,
  };

  const RELATIONAL_OPERATOR = {
    MENOR_QUE: 0,
    MENOR_IGUAL: 1,
    MAYOR_QUE: 2,
    MAYOR_IGUAL: 3,
    IGUAL: 4,
    NO_IGUAL: 5,
  };

  const LOGICAL_OPERATOR = {
    AND: 0,
    OR: 1,
    NOT: 2
  };
}

program = instructions

instructions 
    = inst:instruction list:list_instructions

list_instructions
    = list:instructions
    / epsilon

epsilon = ''

instruction 
    = ins:declaration

declaration 
    = type:type _ id:ID _ assign ";" _

assign 
    = "="_ expression _
    / epsilon

expression
    = INTEGER

type
    = "int"
    / "float"
    / "string"
    / "boolean"
    / "char"

ID "identificador"
  = [a-zA-Z]([a-zA-Z]/[0-9]/"_")* _ { return text(); }

INTEGER "integer"
  = _ [-]?[0-9]+ { return parseInt(text(), 10);}

_ "Whitespace"
  = [ \t\n\r]*