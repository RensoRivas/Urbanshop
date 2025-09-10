# UrbanShop -- Sistema de Administración para Microempresa

![Status](https://img.shields.io/badge/status-prototipo-blue)\
![Frontend](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-orange)\
![Backend](https://img.shields.io/badge/backend-pendiente-lightgrey)\
![License](https://img.shields.io/badge/license-MIT-green)

UrbanShop es una aplicación web ligera pensada para la **gestión de una
microempresa**, desarrollada con **HTML, CSS y JavaScript puro**.

Actualmente funciona **100% en el navegador** usando `localStorage`,
pero está diseñada para integrarse en el futuro con un **backend real**
(Node.js, PHP, Django, etc.) y una base de datos (MySQL, PostgreSQL).

------------------------------------------------------------------------

## 🚀 Funcionalidades principales

-   **Login con roles y control de accesos**
    -   **Admin**: acceso completo a todas las secciones.\
    -   **Supervisor**: acceso a todo excepto *Gestión de Usuarios*.\
    -   **Vendedor**: acceso a *Dashboard* y *Punto de Venta*.\
    -   Menú dinámico según el rol.
-   **Dashboard**
    -   KPIs de ventas del día, stock y alertas de bajo stock.\
    -   Gráfico de productos más vendidos.
-   **Inventario**
    -   CRUD de productos: crear, editar y eliminar.\
    -   Exportación del inventario a CSV.
-   **Punto de Venta (POS)**
    -   Selección de productos y cantidades.\
    -   Validación de stock en tiempo real.\
    -   Registro de ventas con actualización automática de inventario.
-   **Gestión de Usuarios**
    -   Creación y edición de usuarios con nombre, rol, estado, usuario
        y contraseña.\
    -   (Solo accesible para Admin).
-   **Reportes**
    -   Filtros por rango de fechas (últimos 7 días, este mes,
        personalizado).\
    -   Gráfico de ventas por día.\
    -   Inventario proyectado.\
    -   Exportación de ventas a CSV.

------------------------------------------------------------------------

## 🛠️ Tecnologías utilizadas

-   **HTML5** -- estructura del sistema.\
-   **CSS3** -- estilos y diseño (flexbox, grid).\
-   **JavaScript (ES6)** -- lógica y control de datos.\
-   **Canvas API** -- gráficos personalizados.\
-   **localStorage** -- persistencia temporal (sin servidor).

------------------------------------------------------------------------

## 📂 Estructura del proyecto

    .
    ├── assets
    │   ├── css
    │   │   └── styles.css
    │   └── js
    │       └── app.js
    ├── dashboard.html
    ├── inventario.html
    ├── pos.html
    ├── usuarios.html
    ├── reportes.html
    └── index.html   (login)

------------------------------------------------------------------------

## 🔐 Roles y accesos

  Página            Admin   Supervisor   Vendedor
  ---------------- ------- ------------ ----------
  Dashboard          ✅         ✅          ✅
  Punto de venta     ✅         ✅          ✅
  Inventario         ✅         ✅          ❌
  Usuarios           ✅         ❌          ❌
  Reportes           ✅         ✅          ❌

------------------------------------------------------------------------

## 📦 Instalación y uso

1.  Clona este repositorio:

    ``` bash
    git clone https://github.com/RensoRivas/UrbanShop.git
    cd UrbanShop
    ```

2.  Abre el archivo `index.html` en tu navegador.\

3.  Ingresa con las credenciales configuradas en **Gestión de
    Usuarios**.

    -   En modo demo (sin usuarios creados), cualquier
        usuario/contraseña no vacíos permite entrar como **Admin**.

------------------------------------------------------------------------

## 🔮 Futuro

-   Implementación de un **backend real** con base de datos.\
-   Soporte multiusuario en línea.\
-   Reportes avanzados y exportación a PDF.\
-   Sistema de recuperación de contraseñas.

------------------------------------------------------------------------

## 📜 Licencia

Este proyecto está disponible bajo la licencia **MIT**.


psdta "Para Ingresar al modo admin , el usuario es admin y contraseña admin