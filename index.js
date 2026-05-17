import fs from 'fs';
import antlr4 from 'antlr4';
import FlujoLexer from './generated/flujoLexer.js';
import FlujoParser from './generated/flujoParser.js';
import CustomVisitor from './CustomVisitor.js';

try {
    // Leemos el archivo de entrada 
    const input = fs.readFileSync('input.txt', 'utf-8');
    
    // Creamos el Lexer y obtener los Tokens
    const chars = new antlr4.InputStream(input);
    const lexer = new FlujoLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    
    // Imprimimos la Tabla de Tokens en la consola
    console.log("=== TABLA DE TOKENS ===");
    tokens.fill();
    tokens.tokens.forEach(t => {
        if(t.type !== -1) { // Ignorar el token de fin de archivo (EOF)
            console.log(`[@${t.tokenIndex},${t.start}:${t.stop}='${t.text}',<Tipo:${t.type}>,linea:${t.line}]`);
        }
    });

    // Creamos el Parser y construimos el Árbol Sintáctico
    const parser = new FlujoParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.programa(); 

    console.log("\n=== ÁRBOL DE ANÁLISIS ===");
    console.log(tree.toStringTree(parser.ruleNames));

// Ejecutar el Traductor (Visitor) de forma plana y directa
    console.log("\n=== TRADUCCIÓN A JAVASCRIPT ===");
    const visitor = new CustomVisitor();
    
    let codigoFinal = "// Código generado: \n\n";
    
    if (tree && tree.definicion) {
        const definiciones = tree.definicion();
        if (definiciones && definiciones.length) {
            for (let i = 0; i < definiciones.length; i++) {
                const def = definiciones[i];
                let lineaTraducida = "";

                // Forzamos la llamada directa a cada método del visitor según el nodo real
                if (def.estado && def.estado()) {
                    lineaTraducida = visitor.visitEstado(def.estado());
                } else if (def.rol && def.rol()) {
                    lineaTraducida = visitor.visitRol(def.rol());
                } else if (def.transicion && def.transicion()) {
                    lineaTraducida = visitor.visitTransicion(def.transicion());
                } else if (def.accion && def.accion()) {
                    lineaTraducida = visitor.visitAccion(def.accion());
                } else if (def.notificacion && def.notificacion()) {
                    lineaTraducida = visitor.visitNotificacion(def.notificacion());
                }

                // Si obtuvimos texto válido, lo agregamos al código final
                if (lineaTraducida) {
                    codigoFinal += String(lineaTraducida).trim() + "\n";
                }
            }
        }
    }
    
    // Imprimimos el resultado de texto limpio final libre de comas estructurales
    console.log(codigoFinal);

} catch (error) {
    console.error("Error al procesar el archivo:", error);
}