# Papiro — Biblioteca y préstamos

Aplicación web progresiva para catalogar libros, guardar portadas y contratapas, gestionar lectores y préstamos, consultar alertas y exportar respaldos.

## Publicar en GitHub Pages
1. Subí todos los archivos de esta carpeta a la raíz del repositorio.
2. En Settings → Pages, elegí la rama principal y la carpeta `/ (root)`.
3. Abrí la URL publicada desde el navegador. La cámara requiere HTTPS o localhost.

## Almacenamiento y respaldos
Los datos se guardan localmente en IndexedDB del navegador. En Exportar, usá **Descargar copia (JSON)** periódicamente y guardá el archivo fuera del dispositivo. El respaldo incluye libros, lectores, préstamos y registros de expurgo (bajas con motivo). La importación agrega registros que no existan; no es una sincronización bidireccional ni una fusión automática de conflictos.

## Préstamos
Cada ejemplar requiere un número de inventario único con prefijo PAP-. Desde Biblioteca se abre una ficha de solo lectura; desde allí se puede editar, duplicar el registro sin inventario o dar de baja el ejemplar con motivo de expurgo. Las portadas de la lista son más grandes y la ficha muestra portada y contratapa. Los lectores se registran una sola vez y quedan disponibles para futuros préstamos; se pueden eliminar manualmente si no tienen préstamos pendientes. Se validan DNI de 7 u 8 dígitos, formato de correo y longitud razonable del teléfono; el número de socio es opcional. El sistema bloquea nuevos préstamos si el lector tiene cualquier préstamo sin devolver, salvo excepción manual con motivo. Los préstamos a domicilio admiten hasta tres días. Las alertas de recuperación aparecen a partir de diez días de atraso. En la ficha del libro se pueden activar campos opcionales de colaboradores, premios y agradecimientos. La clasificación CDD permite seleccionar una clase principal y una subclase, además de escribir una clasificación más específica. Al repetir una lectura válida de portada, el OCR reemplaza el título y el autor anteriores para facilitar la corrección; el autor detectado se presenta como apellido, nombre y conviene revisarlo, especialmente si tiene apellidos compuestos.

## Límites actuales
- La importación/actualización de padrones escolares desde Excel todavía no está implementada; queda para una etapa posterior.
- La lectura OCR de portada ahora evita mostrar listas largas de líneas dudosas y no completa título/autor si no hay una confianza mínima, pero no puede garantizar precisión en letras decoradas.
- El pie de copyright muestra la marca Papiro y el año 2026. Para una identificación definitiva del titular, debe confirmarse el nombre de la persona o empresa titular.
- No incluye todavía sincronización automática con Google Drive ni inicio de sesión con Google. Eso requiere configurar OAuth, un proyecto de Google Cloud y permisos de Drive; no deben incrustarse secretos en un repositorio público.
- No sincroniza automáticamente entre navegador, Android y computadoras. Importar/exportar sirve para traslado y respaldo, no para mantener dispositivos sincronizados.
- Los datos locales pueden perderse si se borran los datos del sitio o se pierde el dispositivo. Conservá copias externas.
- La comunidad de intercambio, cuentas multiusuario y permisos remotos no están incluidos en esta versión.
- La versión web está preparada para probarse como PWA; la APK nativa requiere empaquetado y pruebas específicos.

## Seguridad y privacidad
La ficha de lectores contiene datos personales. No publiques ni compartas respaldos sin protegerlos. Esta versión guarda los datos localmente en el dispositivo y no ofrece acceso remoto multiusuario.


## Papiro V4 — mejoras de préstamos e importación

- Titular y marca: © 2026 Sergio Pineda; Papiro es el nombre comercial.
- `PAP-` es un prefijo interno de inventario de Papiro, no una nomenclatura bibliotecaria oficial. Los números se normalizan a un mínimo de cuatro dígitos y pueden crecer sin límite práctico; se bloquean duplicados.
- En Préstamos, el buscador filtra ejemplares por título, autor, editorial, colección, materia, CDD, ISBN, ubicación, inventario, resumen y notas. El buscador de lectores filtra por nombre/apellido, DNI o socio. El historial de préstamos también permite buscar por lector, documento, socio, libro o inventario.
- Las fichas e historial de préstamos muestran los datos de contacto del lector. Se agregaron campos opcionales para escuela/institución, curso, división y turno.
- Estadísticas incluyen estado de préstamos y préstamos por lector.
- Hay importadores CSV (separador punto y coma/coma), CSV compatible con Excel, MARC21 ISO/MRC y MARCXML. Las importaciones agregan registros; los inventarios duplicados se omiten. Los registros MARC pueden no incluir número de inventario, por lo que debe asignarse después de importarlos.
- La clasificación CDD 863 corresponde a narrativa en español (novela y cuentos).
- La vista de portada/contratapa usa el mismo tamaño de visualización.

Nota: la aplicación sigue guardando datos localmente en el dispositivo. No incluye todavía sincronización automática con Google Drive ni colaboración multiusuario. Los importadores MARC cubren los campos bibliográficos habituales, pero pueden necesitar revisión al intercambiar registros con catálogos de terceros.


## Nota sobre MARC21 y traslado entre dispositivos

MARC21 ISO 2709/MRC/MARCXML intercambia metadatos bibliográficos, pero no incluye de forma estándar las imágenes locales de portada y contratapa ni todos los campos específicos de Papiro. Para transferir la biblioteca completa entre dispositivos, usar **Exportar copia JSON** e **Importar copia JSON**. La importación MARC interpreta indicadores y subcampos, y recupera título, autor, editorial, año, páginas, materia, CDD, colección, resumen, notas, ubicación e inventario cuando están presentes en los campos correspondientes.

La regla de préstamos impide registrar otro préstamo a un lector con cualquier ejemplar aún no devuelto. La casilla de autorización excepcional permite continuar solo si se marca y se escribe el motivo, que queda guardado en el préstamo.
