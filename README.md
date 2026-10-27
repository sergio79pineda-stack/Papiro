# Papiro — Biblioteca y préstamos

Aplicación web progresiva para catalogar libros, guardar portadas y contratapas, gestionar lectores y préstamos, consultar alertas y exportar respaldos.

## Publicar en GitHub Pages
1. Subí todos los archivos de esta carpeta a la raíz del repositorio.
2. En Settings → Pages, elegí la rama principal y la carpeta `/ (root)`.
3. Abrí la URL publicada desde el navegador. La cámara requiere HTTPS o localhost.

## Almacenamiento y respaldos
Los datos se guardan localmente en IndexedDB del navegador. En Exportar, usá **Descargar copia (JSON)** periódicamente y guardá el archivo fuera del dispositivo. El respaldo incluye libros, lectores, préstamos y registros de expurgo (bajas con motivo). La importación agrega registros que no existan; no es una sincronización bidireccional ni una fusión automática de conflictos.

## Préstamos
Cada ejemplar requiere un número de inventario único con prefijo PAP-. Desde Biblioteca se abre una ficha de solo lectura; desde allí se puede editar, duplicar el registro sin inventario o dar de baja el ejemplar con motivo de expurgo. Las portadas de la lista son más grandes y la ficha muestra portada y contratapa. Los lectores se registran una sola vez y quedan disponibles para futuros préstamos; se pueden eliminar manualmente si no tienen préstamos pendientes. Se validan DNI de 7 u 8 dígitos, formato de correo y longitud razonable del teléfono; el número de socio es opcional. El sistema bloquea nuevos préstamos si el lector tiene préstamos a domicilio vencidos, salvo excepción manual con motivo. Los préstamos a domicilio admiten hasta tres días. Las alertas de recuperación aparecen a partir de diez días de atraso.

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
