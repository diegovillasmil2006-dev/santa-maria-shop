# Santa Maria Shop — Instrucciones para levantar el proyecto

## 1. Instala Node.js
Descarga e instala Node.js (v18 o superior) desde https://nodejs.org

## 2. Instala las dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

## 3. Agrega tus imágenes
Copia tus imágenes en la carpeta `public/imagenes/` con estos nombres exactos:

| Archivo | Sección |
|---------|---------|
| `hero.jpg` | Fondo del Hero |
| `cat1.jpg` | Categoría Mujer |
| `cat2.jpg` | Categoría Hombre |
| `cat3.jpg` | Categoría Novedades |
| `lifestyle.jpg` | Sobre nosotros |
| `look1.jpg` | Lookbook imagen 1 |
| `look2.jpg` | Lookbook imagen 2 |
| `look3.jpg` | Lookbook imagen 3 |
| `look4.jpg` | Lookbook imagen 4 |
| `product1.jpg` | Blusa Mediterránea |
| `product2.jpg` | Pantalón Lino Porto |
| `product3.jpg` | Vestido Riviera |
| `product4.jpg` | Camisa Capri |
| `product5.jpg` | Falda Palma |
| `product6.jpg` | Chaqueta Amalfi |

> Si una imagen no está, se carga automáticamente un placeholder de Unsplash.

## 4. Levanta el servidor de desarrollo
```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## 5. Build para producción
```bash
npm run build
npm start
```
