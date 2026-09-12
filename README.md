# DevUnity 
## Estructura de Carpetas

* **/client** - Frontend desarrollado con Next.js (App Router) y Tailwind CSS.
* **/server** - Backend desarrollado con Node.js, Express y Prisma (PostgreSQL).
* **/qa** - Entorno de pruebas automatizadas y aseguramiento de calidad con Cypress.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
* **Node.js:** Versión `18.18` o superior (Requisito estricto para la compatibilidad con Prisma ORM).

## Guía de Instalación (Setup Local)

Para inicializar el proyecto en tu computadora, sigue estos pasos en orden:

**1. Clonar el repositorio**

**2. Instalar todas las dependencias**
**NO** es necesario ingresar a cada carpeta (`cd client`, `cd server`, etc.) para instalar los paquetes.
Sino que, estar en la **raíz del proyecto** y ejecuta un único comando:

```bash
npm install

```

> **Nota para desarrolladores:** Al utilizar NPM Workspaces, notarás que las librerías no se instalan dentro de cada carpeta, sino que se genera una gran carpeta compartida `node_modules` en la raíz del proyecto. Este es el comportamiento esperado (*hoisting*) e indica que la instalación general fue exitosa.

**3. Configurar Variables de Entorno**
El proyecto requiere credenciales locales que no están subidas al repositorio por seguridad.

## Comandos de Desarrollo

Para hacer funcionar el sistema completo, ubícate en la **raíz del proyecto** y ejecuta un único comando:

```bash
npm run dev

```

> *Este comando levantará simultáneamente el servidor (Backend) y la interfaz (Frontend) en la misma terminal. Verás los logs de ambos sistemas diferenciados.*

## Gestión de Dependencias (Instalar nuevas librerías)

Si necesitas agregar un nuevo paquete, hazlo **siempre desde la raíz** usando la bandera `--workspace` para indicar a qué entorno pertenece.

Ejemplos:

```bash
# Instalar una librería solo para el frontend
npm install axios --workspace=client

# Instalar una librería solo para el backend
npm install bcrypt --workspace=server

# Instalar una librería solo para el entorno de pruebas
npm install cypress --workspace=qa
