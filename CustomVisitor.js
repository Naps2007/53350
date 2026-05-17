import FlujoVisitor from './generated/flujoVisitor.js';

export default class CustomVisitor extends FlujoVisitor {
    
    // Regla principal: une todas las traducciones de las definiciones
    visitPrograma(ctx) {
        let codigo = "// Código generado automáticamente para tu Flujo\n\n";
        if (ctx.definicion()) {
            ctx.definicion().forEach(def => {
                const traduccion = this.visit(def);
                if (traduccion) {
                    codigo += traduccion + "\n";
                }
            });
        }
        return codigo;
    }

    // Enrutador de definiciones: retorna estrictamente el texto del hijo
    visitDefinicion(ctx) {
        if (ctx.estado()) return this.visit(ctx.estado());
        if (ctx.rol()) return this.visit(ctx.rol());
        if (ctx.transicion()) return this.visit(ctx.transicion());
        if (ctx.accion()) return this.visit(ctx.accion());
        if (ctx.notificacion()) return this.visit(ctx.notificacion());
        return "";
    }

    // Traducción de estados
    visitEstado(ctx) {
        const id = ctx.identificador().getText();
        const tipo = ctx.INICIAL() ? " (Inicial)" : ctx.FINAL() ? " (Final)" : "";
        return `console.log("Registrando estado: ${id}${tipo}");`;
    }

    // Traducción de roles y permisos
    visitRol(ctx) {
        const id = ctx.identificador().getText();
        const permisos = [];
        if (ctx.permiso()) {
            ctx.permiso().forEach(p => {
                permisos.push(`"${p.getText()}"`);
            });
        }
        return `const rol_${id} = [${permisos.join(", ")}];`;
    }

    // Traducción de transiciones
    visitTransicion(ctx) {
        const desde = ctx.identificador(0).getText();
        const hacia = ctx.identificador(1).getText();
        return `console.log("Transición configurada: desde '${desde}' hacia '${hacia}'");`;
    }

   // Traducción de bloques de acción (Forzando texto plano estricto)
    visitAccion(ctx) {
        const id = ctx.identificador().getText();
        let instrucciones = "";
        
        if (ctx.instruccion) {
            const lista = ctx.instruccion();
            if (lista && lista.length) {
                for (let i = 0; i < lista.length; i++) {
                    // LLAMADA DIRECTA: Forzamos la ejecución de tu método visitInstruccion
                    const textoIns = this.visitInstruccion(lista[i]);
                    if (textoIns) {
                        instrucciones += "    " + String(textoIns).trim() + "\n";
                    }
                }
            }
        }
        
        return `function accion_${id}() {\n${String(instrucciones).replace(/, ,+/g, '').trim()}\n}`;
    }

    // Traducción de instrucciones internas (Retornando strings puros)
    visitInstruccion(ctx) {
        if (ctx.ASIGNAR && ctx.ASIGNAR()) {
            return `${ctx.identificador().getText()} = ${ctx.valor().getText()};`;
        }
        if (ctx.REGISTRAR && ctx.REGISTRAR()) {
            return `console.log(${ctx.cadena().getText()});`;
        }
        return "";
    }

    // Traducción de notificaciones
    visitNotificacion(ctx) {
        const id = ctx.identificador().getText();
        const mensaje = ctx.cadena().getText();
        return `console.log("Notificación para ${id}: " + ${mensaje});`;
    }
}