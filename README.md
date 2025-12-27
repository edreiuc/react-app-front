# Aplicación React Front

Esta es una aplicación web moderna construida con React y Vite, diseñada para mostrar la gestión de usuarios y visualización de contenido dinámico. Cuenta con un diseño premium y responsivo utilizando Tailwind CSS.

## 🚀 Tecnologías Utilizadas

Este proyecto aprovecha las últimas tecnologías web para asegurar rendimiento, mantenibilidad y una excelente experiencia de desarrollo.

- **[React 19](https://react.dev/)**: La librería principal para construir la interfaz de usuario, utilizando las últimas características para un renderizado y gestión de estado óptimos.
- **[Vite](https://vitejs.dev/)**: Herramienta de frontend de próxima generación que proporciona un servidor de desarrollo ultrarrápido y un proceso de construcción optimizado.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Un framework CSS "utility-first" utilizado para el estilizado. Utilizamos características modernas de CSS como variables y valores arbitrarios para un diseño altamente personalizado y responsivo.
- **[TypeScript](https://www.typescriptlang.org/)** (Parcial): Utilizado en partes críticas de la aplicación (como servicios y definiciones de tipos) para asegurar la seguridad de tipos y mejores herramientas para el desarrollador.
- **[Lucide React](https://lucide.dev/)**: Una librería de iconos hermosa y consistente para el diseño de UI moderno.
- **[React Router](https://reactrouter.com/)**: Maneja el enrutamiento del lado del cliente para una navegación fluida entre páginas sin recargar.

## 🏗️ Patrones de Diseño y Arquitectura

El proyecto sigue principios de arquitectura limpia para asegurar escalabilidad y facilidad de mantenimiento.

### 1. Patrón de Capa de Servicio (Service Layer)

Separamos la lógica de obtención de datos de los componentes de la interfaz.

- **Ubicación**: `src/services/`
- **Propósito**: Mantiene los componentes limpios y enfocados en el renderizado. El servicio `user.tsx`, por ejemplo, maneja la comunicación con la API `dummyjson.com` y la transformación de datos, permitiendo que la UI sea agnóstica a los detalles de implementación de la API.

### 2. Patrón Contenedor/Presentacional

- **Páginas (Contenedores)**: Los componentes en `src/pages/` (como `Team.jsx`) actúan como contenedores. Manejan los efectos secundarios (como la obtención de datos), la gestión del estado (`loading`, `error`) y la lógica.
- **Componentes UI (Presentacionales)**: Los componentes en `src/components/` se enfocan puramente en cómo se ven las cosas. Reciben datos a través de props y renderizan la interfaz.

### 3. Patrón de Diseño (Layout)

Utilizamos un componente de diseño envolvente (wrapper) para mantener una estructura consistente (encabezados, pies de página, navegación) a través de diferentes páginas.

- **Ubicación**: `src/layouts/`
- **Beneficio**: Cambiar el diseño global (por ejemplo, agregar una barra lateral) solo requiere editar un archivo.

### 4. Patrón de Hooks

Utilizamos React Hooks (`useState`, `useEffect`) para encapsular la lógica con estado y los efectos secundarios.

- **Uso**: Gestión de ciclos de vida de obtención de datos asíncronos (cargando -> éxito/error) dentro de componentes funcionales.

## 🛠️ Configuración e Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio**
2.  **Instalar dependencias**:
    ```bash
    npm install
    ```
3.  **Configuración del Entorno**:
    Asegúrate de tener un archivo `.env` en el directorio raíz:
    ```env
    VITE_API_URL=https://dummyjson.com/
    ```
4.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

## 📦 Construcción para Producción

Para crear una compilación optimizada para producción:

```bash
npm run build
```
