grammar Flujo;

//reglas del Parser (minúsculas) y del Lexer (MAYÚSCULAS)

// =====================================================================
// PARSER 
// =====================================================================

programa
    : FLUJO identificador LLAVE_IZQ definicion* LLAVE_DER
    ;

definicion
    : estado
    | rol
    | transicion
    | accion
    | notificacion
    ;

estado
    : ESTADO identificador (INICIAL | FINAL)? PUNTO_COMA
    ;

rol
    : ROL identificador PUEDE CORCHETE_IZQ permiso (COMA permiso)* CORCHETE_DER PUNTO_COMA
    ;

permiso
    : CREAR
    | REVISAR
    | APROBAR
    | RECHAZAR
    | ARCHIVAR
    ;

transicion
    : DESDE identificador HACIA identificador CUANDO condicion PUNTO_COMA
    ;

condicion
    : identificador PUNTO permiso
    | identificador IGUAL_IGUAL valor
    ;

accion
    : ACCION identificador LLAVE_IZQ instruccion* LLAVE_DER
    ;

instruccion
    : ASIGNAR identificador IGUAL valor PUNTO_COMA
    | REGISTRAR PARENTESIS_IZQ cadena PARENTESIS_DER PUNTO_COMA
    ;

notificacion
    : NOTIFICAR identificador CON cadena PUNTO_COMA
    ;

valor
    : cadena
    | numero
    | booleano
    | identificador
    ;

booleano
    : VERDADERO
    | FALSO
    ;

identificador
    : ID
    ;

cadena
    : STRING
    ;

numero
    : NUMBER
    ;


// =====================================================================
// LEXER 
// =====================================================================

// --- Palabras ---
FLUJO      : 'flujo' ;
ESTADO     : 'estado' ;
INICIAL    : 'inicial' ;
FINAL      : 'final' ;
ROL        : 'rol' ;
PUEDE      : 'puede' ;
CREAR      : 'crear' ;
REVISAR    : 'revisar' ;
APROBAR    : 'aprobar' ;
RECHAZAR   : 'rechazar' ;
ARCHIVAR   : 'archivar' ;
DESDE      : 'desde' ;
HACIA      : 'hacia' ;
CUANDO     : 'cuando' ;
ACCION     : 'accion' ;
ASIGNAR    : 'asignar' ;
REGISTRAR  : 'registrar' ;
NOTIFICAR  : 'notificar' ;
CON        : 'con' ;
VERDADERO  : 'verdadero' ;
FALSO      : 'falso' ;

// --- Símbolos y Operadores ---
LLAVE_IZQ     : '{' ;
LLAVE_DER     : '}' ;
CORCHETE_IZQ  : '[' ;
CORCHETE_DER  : ']' ;
PARENTESIS_IZQ: '(' ;
PARENTESIS_DER: ')' ;
PUNTO_COMA    : ';' ;
COMA          : ',' ;
PUNTO         : '.' ;
IGUAL         : '=' ;
IGUAL_IGUAL   : '==' ;

// --- Expresiones Regulares Básicas (IDs, Números y Cadenas) ---
ID     : [a-zA-Z_] [a-zA-Z0-9_]* ;
NUMBER : [0-9]+ ;
STRING : '"' (~["\r\n])* '"' ; // Cualquier carácter dentro de las comillas excepto saltos de línea

WS     : [ \t\r\n]+ -> skip ;