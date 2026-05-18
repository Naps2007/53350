# TP Sintaxis - Compilador de Flujos en ANTLR4 (Legajo: 53350)

Instrucciones para ejecutar compilador

```bash
# =====================================================================
# REQUISITOS DEL SISTEMA
# =====================================================================
# Antes de empezar, se debe contar con:
# - Node.js (Versión 16 o superior)
# - Java JRE instalado (Requisito obligatorio para el entorno ANTLR4)
# - Usar terminal CMD / comand prompt para ejecutar el codigo


# =====================================================================
# INSTRUCCIONES (Paso a Paso)
# =====================================================================
# A) Clonar el repositorio público de forma local mediante HTTPS:
git clone https://github.com/Naps2007/53350.git

# B) Entrar a la carpeta raíz del proyecto (nombrada con el legajo):
cd 53350

# C) Instalar las dependencias por primera vez para crear 'node_modules':
npm install

# D) Ejecutar el comando de inicio para activar el análisis y traducción:
npm start


# =====================================================================
# GUÍA DE COMO USAR EJEMPLOS DE PRUEBA
# =====================================================================
# El proyecto viene preconfigurado en 'index.js' para leer 'ejemplo1_ok.txt'.
# Se incluyen 4 archivos de prueba:
# 
#  - ejemplo1_ok.txt     -> (Éxito)
#  - ejemplo2_ok.txt     -> (Éxito)
#  - ejemplo3_error.txt  -> Error Léxico (Palabra clave 'estao')
#  - ejemplo4_error.txt  -> Error Sintáctico (Falta llave de cierre)
# 
# Para probar cualquiera de los otros ejemplos:
# 1. Abrí el archivo 'index.js' en VS Code.
# 2. Modificá la línea de lectura cambiando 'ejemplo1_ok.txt' por el ejemplo deseado.
#    Ejemplo: const input = fs.readFileSync('ejemplo3_error.txt', 'utf-8');
# 3. Guardá el archivo (Ctrl + S) y volvé a ejecutar: npm start


# =====================================================================
# EXPLICACIÓN DE LOS RESULTADOS ESPERADOS EN CONSOLA
# =====================================================================
# Una vez ejecutado el programa, la terminal mostrará en orden:
# 
# 1) ANÁLISIS LÉXICO Y SINTÁCTICO: Confirmación de validez. Si hay fallas,
#    detalla la línea exacta y la causa del problema detectado por ANTLR.
# 
# 2) TABLA DE LEXEMAS-TOKENS: Lista impresa en consola que relaciona cada
#    palabra reconocida con su respectiva categoría gramatical (Ej: FLUJO, ID).
# 
# 3) ÁRBOL DE ANÁLISIS SINTÁCTICO: Representación jerárquica de la estructura
#    del código en formato de texto plano.
# 
# 4) TRADUCCIÓN E INTERPRETACIÓN: Código final completamente traducido 
#    a JavaScript limpio, visible justo debajo de la línea:
#    === TRADUCCIÓN A JAVASCRIPT ===


# =====================================================================
# 5. ACLARACIONES TÉCNICAS
# =====================================================================
# - La gramática fue adaptada íntegramente al lenguaje de automatización
#   de flujos solicitado en la consigna (reglas de estado, rol y transición).
# - Se implementó un patrón Visitor en JavaScript ('CustomVisitor.js') para
#   recorrer el árbol sintáctico y generar la traducción limpia a JS.
