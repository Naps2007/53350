import fs from 'fs';
import antlr4 from 'antlr4';
import FlujoLexer from './generated/FlujoLexer.js'; // <- Corregido con Mayúscula
import FlujoParser from './generated/FlujoParser.js'; // <- Corregido con Mayúscula
import CustomVisitor from './CustomVisitor.js';

try {
    // Leemos el archivo de ejemplo 
    const input = fs.readFileSync('ejemplo1_ok.txt', 'utf-8'); 
    
    const chars = new antlr4.InputStream(input);
    const lexer = new FlujoLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    
    console.log("=== TABLA DE TOKENS ===");
    tokens.fill();
    tokens.tokens.forEach(t => {
        if(t.type !== -1) { // Ignorar el token de fin de archivo (EOF)
            console.log(`[@${t.tokenIndex},${t.start}:${t.stop}='${t.text}',<Tipo:${t.type}>,linea:${t.line}]`);
        }
    });

    const parser = new FlujoParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.programa(); 

    console.log("\n=== ÁRBOL DE ANÁLISIS ===");
    console.log(tree.toStringTree(parser.ruleNames));

    console.log("\n=== TRADUCCIÓN A JAVASCRIPT ===");
    const visitor = new CustomVisitor();
    
    let codigoFinal = "// Código generado: \n\n";
    
    if (tree && tree.definicion) {
        const definiciones = tree.definicion();
        if (definiciones && definiciones.length) {
            for (let i = 0; i < definiciones.length; i++) {
                const def = definiciones[i];
                let lineaTraducida = "";

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

                if (lineaTraducida) {
                    codigoFinal += String(lineaTraducida).trim() + "\n";
                }
            }
        }
    }
    
    console.log(codigoFinal);

} catch (error) {
    console.error("Error al procesar el archivo:", error);
}