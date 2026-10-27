# Papiro — Biblioteca y préstamos

Aplicación web progresiva para catalogar libros, guardar portadas y contratapas, gestionar lectores y préstamos, consultar alertas y exportar respaldos.

## Publicar en GitHub Pages
1. Subí todos los archivos de esta carpeta a la raíz del repositorio.
2. En Settings → Pages, elegí la rama principal y la carpeta `/ (root)`.
3. Abrí la URL publicada desde el navegador. La cámara requiere HTTPS o localhost.

## Almacenamiento y respaldos
Los datos se guardan localmente en IndexedDB del navegador. En Exportar, usá **Descargar copia (JSON)** periódicamente y guardá el archivo fuera del dispositivo. El respaldo incluye libros, lectores y préstamos. La importación agrega registros que no existan; no es una sincronización bidireccional ni una fusión automática de conflictos.

## Préstamos
Cada ejemplar requiere un número de inventario único. Los lectores se registran con nombre, apellido, DNI, teléfono, correo y dirección; el número de socio es opcional. El sistema bloquea nuevos préstamos si el lector tiene préstamos a domicilio vencidos, salvo excepción manual con motivo. Los préstamos a domicilio admiten hasta tres días. Las alertas de recuperación aparecen a partir de diez días de atraso.

## Límites actuales
- No incluye todavía sincronización automática con Google Drive ni inicio de sesión con Google. Eso requiere configurar OAuth, un proyecto de Google Cloud y permisos de Drive; no deben incrustarse secretos en un repositorio público.
- No sincroniza automáticamente entre navegador, Android y computadoras. Importar/exportar sirve para traslado y respaldo, no para mantener dispositivos sincronizados.
- Los datos locales pueden perderse si se borran los datos del sitio o se pierde el dispositivo. Conservá copias externas.
- La comunidad de intercambio, cuentas multiusuario y permisos remotos no están incluidos en esta versión.
- La versión web está preparada para probarse como PWA; la APK nativa requiere empaquetado y pruebas específicos.

## Seguridad y privacidad
La ficha de lectores contiene datos personales. No publiques ni compartas respaldos sin protegerlos. Esta versión guarda los datos localmente en el dispositivo y no ofrece acceso remoto multiusuario.
