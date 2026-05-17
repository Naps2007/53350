# TP Sintaxis - Compilador en ANTLR4 (Legajo: 53350)

```bash
# =====================================================================
# 1. INSTRUCCIONES DE EJECUCIÓN 
# =====================================================================
# Para descargar el proyecto en forma local a la computadora, abrí la consola 
# (cmd o git-cmd) y ejecutá el siguiente comando:

git clone https://github.com/Naps2007/53350.git

# NOTA: Después de clonar, recordá entrar a la carpeta del proyecto 
# usando el comando: cd 53350


# =====================================================================
# 2. INSTALACIÓN DE DEPENDENCIAS (Requisito obligatorios)
# =====================================================================
# Estando parado dentro de la carpeta del repositorio en la consola, 
# instalá ANTLR4 y las librerías necesarias con el siguiente comando:

npm install

# (Esto creará automáticamente la carpeta 'node_modules' en la raíz)


## =====================================================================
# 3. COMANDO DE INICIO (Cómo compilar la gramática y traducir)
# =====================================================================
# Para procesar las reglas del archivo Flujo.g4 y realizar la traducción 
# del programa de prueba, ejecutá en tu terminal de comandos:

npm start

# NOTA DE COMPATIBILIDAD: Recomiendo ejecutar en la terminal clásica 
# (CMD / Símbolo del sistema) o Git Bash. Si se utiliza la terminal 
# integrada de VS Code (PowerShell) y presenta algún inconveniente con 
# los scripts, ejecutar directamente desde la consola CMD externa.

# =====================================================================
# 4. GUÍA DE USO CON EJEMPLOS DE ENTRADA
# =====================================================================
# El analizador lee los enunciados de entrada directamente desde un archivo.
# Para testear el funcionamiento con los ejemplos provistos:
# 
# A) Modificá el contenido del archivo 'input.txt' con el flujo que desees evaluar.
# B) Volvé a ejecutar en la consola el comando: npm start


# =====================================================================
# 5. NOTAS Y ACLARACIONES ADICIONALES (Resultado de la traducción)
# =====================================================================
# El traductor de flujos procesará la sintaxis y el árbol de derivación.
# El código final traducido a JavaScript se ve 
# en la consola, ubicado exactamente abajo de:
# 
# === TRADUCCIÓN A JAVASCRIPT ===
