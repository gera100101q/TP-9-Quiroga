/* =========================================================
   Sistema de Gestión de Resultados del Mundial
   script.js — lógica básica en JavaScript (TP09)
   ========================================================= */

// --- Variables estáticas de los equipos (const y let) ---
const equipoLocal = "Argentina";
const equipoVisitante = "Francia";
const grupoActual = "Grupo C";
const paisSede = "Estados Unidos";
const estadio = "Estadio MetLife";

let proximaFecha = "10/07/2026";
let proximaHora = "16:00 hs";

// var para el contador general de partidos jugados en el torneo
var partidosJugados = 48;

// Resultado de ejemplo del último encuentro (para la validación if/else)
let golesLocal = 3;
let golesVisitante = 1;

/**
 * Muestra un mensaje de bienvenida con información del próximo partido.
 * Concatena las variables declaradas arriba.
 */
function mostrarBienvenida() {
  const mensaje =
    "Bienvenido al Mundial de Fútbol.\n" +
    "Próximo partido: " + equipoLocal + " vs " + equipoVisitante + "\n" +
    grupoActual + " — " + estadio + ", " + paisSede + "\n" +
    "Fecha: " + proximaFecha + " a las " + proximaHora + "\n" +
    "Partidos jugados hasta el momento: " + partidosJugados;

  alert(mensaje);
}

/**
 * Compara el resultado de un partido y muestra un mensaje distinto
 * según si el equipo local ganó, perdió o empató.
 */
function evaluarResultado() {
  if (golesLocal > golesVisitante) {
    alert(equipoLocal + " ganó el partido " + golesLocal + " a " + golesVisitante + ".");
  } else if (golesLocal < golesVisitante) {
    alert(equipoVisitante + " ganó el partido " + golesVisitante + " a " + golesLocal + ".");
  } else {
    alert("El partido terminó empatado " + golesLocal + " a " + golesVisitante + ".");
  }
}
