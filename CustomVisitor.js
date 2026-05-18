import FlujoVisitor from './generated/flujoVisitor.js';

export default class CustomVisitor extends FlujoVisitor {
    visitEstado(ctx) {
       
        const nombreEstado = ctx.identificador(0).getText();
        let tipo = "normal";
        if (ctx.getText().includes('inicial')) tipo = "inicial";
        if (ctx.getText().includes('final')) tipo = "final";
        return `console.log("Registrando estado: ${nombreEstado} (${tipo})");`;
    }

    visitRol(ctx) {
       
        const nombreRol = ctx.identificador(0).getText();
        return `console.log("Asignando rol de usuario: ${nombreRol}");`;
    }

    visitTransicion(ctx) {
        
        const origen = ctx.identificador(0).getText();
        const destino = ctx.identificador(1).getText();
        return `console.log("Transición de flujo: ${origen} -> ${destino}");`;
    }

    visitAccion(ctx) {
        const accion = ctx.identificador(0).getText();
        return `console.log("Acción del sistema ejecutada: ${accion}");`;
    }

    visitNotificacion(ctx) {
        const notif = ctx.identificador(0).getText();
        return `console.log("Notificación enviada: ${notif}");`;
    }
}