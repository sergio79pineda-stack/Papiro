# Papiro — Biblioteca personal

Aplicación web progresiva (PWA) para administrar una biblioteca personal.

## Archivos
- `index.html`: aplicación y estilos.
- `manifest.json`: configuración para instalar como aplicación.
- `sw.js`: caché para funcionamiento básico sin conexión.
- `icon-192.png` y `icon-512.png`: iconos.
- `biblioteca-san-francisco.jpg`, `biblioteca-praga.jpg`, `biblioteca-alejandria.jpg`: fondos de las secciones.

## Publicar en GitHub Pages
1. Subí **todos** estos archivos a la raíz del repositorio, manteniendo los nombres.
2. En GitHub, abrí **Settings → Pages**.
3. En *Build and deployment*, elegí desplegar desde la rama principal y la carpeta `/ (root)`.
4. Esperá la publicación y abrí la URL HTTPS desde el celular.

La cámara requiere HTTPS (GitHub Pages lo ofrece) o localhost. Para instalarla en Android, abrí la URL en Chrome y usá el menú **Instalar aplicación** o **Agregar a pantalla principal**. Para generar una APK más adelante se puede empaquetar esta PWA con una herramienta compatible; no hace falta hacerlo ahora.

## Datos y fotos
Los datos se guardan localmente en el navegador del dispositivo, no se sincronizan automáticamente entre teléfonos. Usá **Exportar → Descargar copia (JSON)** para respaldarlos y restaurarlos en otro dispositivo. Las imágenes de portada y contratapa se reducen y guardan dentro de los datos de Papiro; las fotos elegidas solo para OCR se procesan para extraer texto y no se agregan al catálogo ni se descargan como archivos de foto.

**Importante:** borrar los datos del navegador puede borrar la biblioteca local. Hacé copias de seguridad periódicas.
