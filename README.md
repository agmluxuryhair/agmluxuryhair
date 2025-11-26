# AGM Luxury Hair - Sitio Web

Sitio web comercial para AGM Luxury Hair - Extensiones de Cabello Humano Premium

## 📁 Estructura del Proyecto

```
Page_AGM/
├── index.html       # Página principal
├── styles.css       # Estilos del sitio
├── script.js        # Funcionalidades JavaScript
├── logo.png         # Logo circular de AGM
├── banner.png       # Banner rectangular
└── README.md        # Este archivo
```

## 🎨 Características

- ✅ Diseño moderno y elegante inspirado en sitios comerciales premium
- ✅ Colores corporativos: Dorado (#d4af37) y Púrpura (#2a1a4d)
- ✅ Totalmente responsive (móvil, tablet y desktop)
- ✅ Animaciones suaves y profesionales
- ✅ Botones directos a WhatsApp e Instagram
- ✅ Secciones organizadas: Hero, Beneficios, Productos, Pagos y Contacto
- ✅ Código limpio y separado en archivos CSS y JS

## 🔧 Personalización Necesaria

### 1. **Enlaces de Redes Sociales**

En `index.html` y `script.js`, reemplaza:

**WhatsApp:**
```html
<!-- Busca esta línea en index.html (línea ~147) -->
href="https://wa.me/573001234567?text=..."
```
```javascript
// En script.js (línea ~42)
const phoneNumber = '573001234567';
```
Reemplaza `573001234567` con tu número real (código país + número sin espacios ni +)

**Instagram:**
```html
<!-- Busca esta línea en index.html (línea ~154) -->
href="https://www.instagram.com/agmluxuryhair"
```
```javascript
// En script.js (línea ~49)
window.open('https://www.instagram.com/agmluxuryhair', '_blank');
```
Reemplaza `agmluxuryhair` con tu usuario real de Instagram

### 2. **Imágenes del Logo**

- Guarda tu **logo circular** como `logo.png` en la carpeta del proyecto
- Guarda tu **banner rectangular** como `banner.png` (opcional, se puede usar en el hero)

### 3. **Precios de Productos**

En `index.html`, busca las secciones de productos (líneas ~116-139) y ajusta los precios según tu catálogo real.

### 4. **Información de Contacto**

Puedes agregar más información como:
- Dirección física
- Correo electrónico
- Horarios de atención

## 🚀 Cómo Usar

1. **Abrir el sitio localmente:**
   - Haz doble clic en `index.html`
   - Se abrirá en tu navegador predeterminado

2. **Publicar en GitHub Pages:**
   ```bash
   git add .
   git commit -m "Sitio web AGM Luxury Hair"
   git push
   ```
   - Ve a Settings → Pages en tu repositorio
   - Selecciona la rama y carpeta
   - Tu sitio estará en: `https://tuusuario.github.io/repositorio`

3. **Usar un dominio personalizado:**
   - Compra un dominio (ej: agmluxuryhair.com)
   - Configura el DNS apuntando a GitHub Pages
   - Agrega el dominio en Settings → Pages

## 🎯 Próximas Mejoras Sugeridas

- [ ] Agregar galería de fotos reales de productos
- [ ] Implementar formulario de contacto
- [ ] Agregar testimonios de clientes
- [ ] Integrar sistema de citas/reservas
- [ ] Agregar sección de preguntas frecuentes (FAQ)
- [ ] Implementar carrito de compras (opcional)
- [ ] Conectar con Google Analytics

## 📱 Redes Sociales

Asegúrate de actualizar estos enlaces con tus perfiles reales:
- WhatsApp: [Agregar número]
- Instagram: [@agmluxuryhair]

## 💡 Notas Importantes

- Las imágenes de productos actualmente usan emojis placeholder (💁‍♀️, 🌟, ✨)
- Reemplázalas con fotos reales de tus productos
- Los precios son de ejemplo, ajústalos a tu catálogo real
- El sitio está optimizado para SEO con meta tags apropiados

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript Vanilla
- Google Fonts (Poppins)

## 📞 Soporte

Si necesitas ayuda con personalizaciones adicionales, no dudes en preguntar.

---

**AGM Luxury Hair** - Cabello Humano Premium 💎✨
