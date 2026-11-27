# Registro de Pendientes y Verificaciones — webcarlos.dev

Este documento recopila todos los elementos pendientes de verificación manual, capturas por tomar, repositorios por auditar y textos por definir antes de la publicación definitiva del portafolio.

---

## 1. Demos por Verificar
- **LeadOps AI (`https://leadops.webcarlos.dev`)**: ✅ **Verificada y activa** (responde HTTP 200). Botón Demo habilitado en la card y en el detalle.
- **TallerFácil**: Aplicación móvil Android nativa en fase de pruebas internas. No cuenta con despliegue web ni APK público; no muestra botón Demo.
- **Roccia**: Asistente de escritorio para Windows con ejecución local (WebSocket, SQLite y Gemini API). No dispone de demo web interactiva; no muestra botón Demo.
- **PharmaPro**: Sistema POS farmacéutico con arquitectura transaccional. No dispone de demo pública en vivo; únicamente se enlaza su repositorio en GitHub.
- **Back-in-Stock Alerts**: Microservicio de backend con idempotencia y webhooks. Al ser un servicio de infraestructura sin interfaz pública para usuarios finales, no muestra botón Demo.
- **QA Playwright Suite**: Suite de pruebas automatizadas E2E. Al ser un proyecto de aseguramiento de calidad y ejecución en CI, solo se enlaza su repositorio en GitHub.
- **Document Management DMS**: ⚠️ La demo de Railway devuelve `404 Not Found`; por eso no se muestra botón Demo. El README incluye capturas reales y aclara que el acceso autenticado del demo no ofrece confidencialidad por documento.

---

## 2. Capturas de Pantalla por Tomar
Actualmente todos los proyectos utilizan **tarjetas tipográficas vectoriales limpias** en formato SVG (`public/images/projects/*.svg`), habiendo eliminado todas las métricas falsas ("99.8%", "100 ms"):
- **PharmaPro**: Tomar capturas reales de la interfaz del punto de venta (POS), semáforo de vencimientos a 90 días y arqueo ciego de caja para colocarlas en `public/images/projects/pharmapro.png`. (El repositorio local en el Escritorio no contenía archivos de imagen).
- **QA Playwright Suite**: Tomar captura real de los reportes HTML de Playwright con trazas de ejecución y gráficos de pruebas pasando para `public/images/projects/qa-playwright-suite.png`.
- **LeadOps AI**: Tomar captura real del inbox administrativo mostrando la sugerencia de respuesta generada por Gemini.
- **Roccia**: Tomar captura de pantalla del asistente en ejecución en Windows junto al avatar 3D VRM.
- **TallerFácil**: Tomar capturas de la aplicación Android en emulador o dispositivo físico mostrando el listado de órdenes y el PDF generado.
- **StockPilot**: Tomar captura de pantalla del dashboard embebido de Shopify con la tabla de variantes.
- **Resto de proyectos**: Reemplazar progresivamente los fallbacks tipográficos SVG por capturas de pantalla reales en alta resolución (proporción 16:9).

---

## 3. Repositorios por Revisar o Limpiar
- **TallerFácil**: Auditar el repositorio antes de publicarlo o enlazarlo para garantizar que no contenga el archivo `google-services.json`, credenciales de Firebase Service Account ni reglas de seguridad permisivas en Firestore.
- **Roccia**: Auditar antes de enlazar públicamente para asegurar que no contenga claves privadas de API de Gemini, variables locales del sistema operativo ni modelos/pesos binarios privados. Verificar también los derechos y licencias de autor del avatar VRM utilizado.
- **LeadOps AI**: Auditar que el repositorio público no exponga secretos de Supabase (`service_role_key`), claves de Gemini ni tokens de proveedores de correo.

---

## 4. Credenciales y Datos Sensibles por Revisar
- **MediSaaS**: Las credenciales de demostración (`admin@medisaas.test` / `demo123`) están aisladas en el acordeón y vista de detalle bajo la etiqueta *"Cuenta demo / sandbox"*. Verificar que funcionen exclusivamente con el almacenamiento local simulado del navegador y no conecten a ningún backend médico real.
- **Volcán Roasters (Shopify)**: Contraseña de tienda de prueba: `dabley`. Verificar que la tienda continúe activa en Shopify Partners y que la pasarela Bogus Gateway admita pagos de prueba (Tarjeta 1, fecha futura, CVV 123).
- **Kōra Studio (Shopify)**: Contraseña de tienda de prueba: `epsorder`. Verificar que el acceso a la tienda siga activo y Bogus Gateway esté configurado.
- **QA Playwright Suite**: Confirmar que los usuarios de prueba públicos de SauceDemo (`standard_user` / `secret_sauce`) sigan vigentes en su plataforma de sandbox.

---

## 5. Textos por Completar (Reseña de Upwork)
- En el requerimiento original los campos de la reseña contenían marcadores de posición:
  - Texto exacto: `[PEGAR AQUÍ EL TEXTO EXACTO DE LA RESEÑA]`
  - Enlace al perfil de Upwork: `[PEGAR AQUÍ LA URL]`
- **Acción ejecutada**: Siguiendo la regla obligatoria de no inventar reseñas ni clientes, se eliminó la sección de testimonios ficticios anterior y **se omitió temporalmente la sección de Reseña**.
- **Pendiente**: En cuanto dispongas del texto exacto de tu reseña de Upwork y la URL de tu perfil público, añadirlos en una sección dedicada `"Reseña"` tanto en español como en inglés.

---

## 6. Verificaciones Técnicas y Despliegue
- **Ejecución 100% local**: No se ha realizado ningún despliegue, commit ni push remoto.
- **Build de producción verificado**: El comando `npm run build` genera exitosamente 42 rutas estáticas (ES, EN, hubs y detalles) sin errores ni advertencias de seguridad.
- **SEO y metadatos**: Se añadieron etiquetas Open Graph, Twitter Cards, `canonical`, `hreflang` bilingües, archivo `robots.txt` y `sitemap.xml`.
