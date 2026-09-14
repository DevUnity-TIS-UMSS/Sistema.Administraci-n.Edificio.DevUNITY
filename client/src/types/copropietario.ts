// ============================================================================
// Tipos e Interfaces para el Módulo de Copropietarios e Inmuebles
// ============================================================================

/**
 * Catálogo de tipos de inmuebles definidos en el sistema
 */
export type TipoInmueble = "DEPARTAMENTO" | "PARQUEO" | "BAULERA";

/**
 * Representa una unidad asignada a una persona (vía OcupanteInmueble)
 */
export interface InmuebleAsignado {
  id: string;
  codigo: string;          // Ej: "DPTO-101", "PQ-04", "BL-02"
  tipo: TipoInmueble;
  piso?: string | null;
  areaM2?: number | null;
  esPropietario: boolean;  // true = Propietario, false = Inquilino
  fechaInicio: string;
  fechaFin?: string | null;
}

/**
 * Estructura para renderizar la tabla principal (UI Lista de Copropietarios)
 */
export interface CopropietarioListItem {
  id: string;
  nombre: string;
  apellido: string;
  ci: string;
  email?: string | null;
  telefono?: string | null;
  inmuebles: InmuebleAsignado[];
  tieneDeuda: boolean;     // Calculado por Backend según expensas vencidas
  createdAt?: string;
}

/**
 * Criterios de búsqueda y filtrado para la barra superior de la vista
 */
export interface FiltrosCopropietario {
  search?: string;         // Búsqueda por nombre, apellido o CI
  tipoInmueble?: TipoInmueble | "TODOS";
  rolOcupacion?: "TODOS" | "PROPIETARIOS" | "INQUILINOS";
  soloDeudores?: boolean;
}

/**
 * Payload para formularios de creación o edición rápida
 */
export interface FormCopropietarioInput {
  nombre: string;
  apellido: string;
  ci: string;
  email?: string;
  telefono?: string;
  inmuebleId?: string;
  esPropietario: boolean;
}