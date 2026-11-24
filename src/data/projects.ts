import fs from 'node:fs';
import path from 'node:path';

export function getProjectImage(slug: string): string {
  const exts = ['.png', '.webp', '.jpg', '.jpeg', '.svg'];
  for (const ext of exts) {
    const file = path.join(process.cwd(), 'public', 'images', 'projects', `${slug}${ext}`);
    if (fs.existsSync(file)) {
      return `/images/projects/${slug}${ext}`;
    }
  }
  const firstGalleryImage = path.join(process.cwd(), 'public', 'images', 'projects', `${slug}1.png`);
  if (fs.existsSync(firstGalleryImage)) {
    return `/images/projects/${slug}1.png`;
  }
  return `/images/projects/${slug}.svg`;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  stackText: string;
  problem: string;
  solution: string;
  stackDetail: string;
  demoUrl?: string;
  repoUrl?: string;
  isFeatured?: boolean;
  isPersonal?: boolean;
  sandboxInfo?: {
    title: string;
    content: string;
  };
  image: string;
  gallery?: string[];
}

export const projectsES: Project[] = [
  // 1. LeadOps AI (Destacado #1)
  {
    slug: 'leadops-ai',
    title: 'LeadOps AI',
    category: 'Full-Stack SaaS & Automatización con IA',
    shortDesc: 'PWA para captar, clasificar con IA y gestionar leads de agencias con control humano.',
    stackText: 'React · TypeScript · Vite · Fastify · Supabase · Gemini API · Vercel · PWA',
    problem: 'Leads dispersos en múltiples canales, respuestas manuales lentas, falta de seguimiento estructurado y riesgo de enviar correos duplicados.',
    solution: 'Pipeline con formulario público, análisis estructurado con IA, bandeja privada protegida por RLS, revisión humana, edición, aprobación y envío simulado (Recepción → Clasificación IA → Revisión → Aprobación → Envío).',
    stackDetail: 'React, TypeScript, Vite, Fastify, Supabase PostgreSQL/Auth, Gemini API, Vercel y PWA responsive.',
    demoUrl: 'https://leadops.webcarlos.dev',
    repoUrl: 'https://github.com/carlos2024r3223rw/LeadOps-AI',
    isFeatured: true,
    isPersonal: false,
    sandboxInfo: {
      title: 'Arquitectura & Seguridad:',
      content: 'Autenticación privada • Demo aislada • Idempotencia contra duplicados • Historial de actividad • Costos y tokens de IA • RLS en Supabase • API protegida • Envío condicionado a aprobación humana.'
    },
    image: '/images/projects/leadops-ai.svg'
  },

  // 2. PharmaPro (Destacado #2)
  {
    slug: 'pharmapro',
    title: 'PharmaPro',
    category: 'Full-Stack SaaS & POS Farmacéutico',
    shortDesc: 'PWA para gestión integral de farmacias con POS rápido, semáforo de vencimientos y auditoría inmutable.',
    stackText: 'React · TypeScript · Node.js · Express · MySQL · Tailwind CSS · PWA',
    problem: 'Pérdidas económicas por medicamentos vencidos, descontrol en arqueos de caja y falta de trazabilidad en traslados entre sucursales.',
    solution: 'Sistema POS e inventario con semáforo de caducidad a 90 días, arqueo ciego de caja, trazabilidad logística y auditoría inmutable.',
    stackDetail: 'React, TypeScript, Node.js, Express, MySQL, Tailwind CSS, PWA.',
    repoUrl: 'https://github.com/carlos2024r3223rw/Aplicacion-Web-Farmacia',
    isFeatured: true,
    isPersonal: false,
    sandboxInfo: {
      title: 'Arquitectura & Seguridad:',
      content: 'API REST transaccional • Control de roles (RBAC) • Audit Trail inmutable • Arqueo ciego de caja.'
    },
    image: '/images/projects/pharmapro.svg'
  },

  // 3. StockPilot (Destacado #3)
  {
    slug: 'stockpilot',
    title: 'StockPilot',
    category: 'Shopify App & Inventory Intelligence',
    shortDesc: 'Prototipo interactivo de dashboard de inventario para monitorear stock por SKU y configurar umbrales de reposición.',
    stackText: 'HTML5 · CSS3 · JavaScript · Node.js · Shopify Polaris UI',
    problem: 'Las tiendas de comercio electrónico con catálogos amplios y variantes múltiples carecen de visibilidad rápida sobre SKUs con existencias críticas, provocando roturas de stock imprevistas.',
    solution: 'Panel administrativo con monitoreo por SKU, filtros de existencias, umbrales de reposición editables, alertas de inventario bajo/agotado, historial de cambios y exportación a CSV.',
    stackDetail: 'HTML5, CSS3, JavaScript modular, Node.js y componentes visuales inspirados en Shopify Polaris.',
    demoUrl: 'https://carlos2024r3223rw.github.io/stockpilot-shopify-app/',
    repoUrl: 'https://github.com/carlos2024r3223rw/stockpilot-shopify-app',
    isFeatured: true,
    isPersonal: true,
    sandboxInfo: {
      title: 'Cuenta demo / sandbox:',
      content: 'Modo: Prototipo interactivo con datos simulados de Kōra Studio. No requiere credenciales ni instalación en tienda Shopify real.'
    },
    image: '/images/projects/stockpilot.svg'
  },

  // 4. TallerFácil (Destacado #4)
  {
    slug: 'tallerfacil',
    title: 'TallerFácil',
    category: 'Aplicación Móvil & Gestión de Reparaciones',
    shortDesc: 'Aplicación móvil para talleres de reparación que permite registrar equipos, controlar estados, generar comprobantes PDF y notificar clientes por WhatsApp.',
    stackText: 'Kotlin · Jetpack Compose · Firebase Auth · Firestore · MVVM · Coroutines',
    problem: 'Los talleres mecánicos y de electrónica suelen registrar ingresos en papel o notas informales, generando pérdida de seguimiento, demoras en diagnósticos y fricción al comunicar presupuestos.',
    solution: 'Aplicación móvil Android nativa con catálogo de órdenes de servicio, control de estados (recibido, en diagnóstico, reparado, entregado), exportación de comprobantes en PDF y disparador de notificaciones por WhatsApp.',
    stackDetail: 'Kotlin, Jetpack Compose, Firebase Auth, Cloud Firestore, Arquitectura MVVM, Kotlin Coroutines.',
    isFeatured: true,
    isPersonal: true,
    repoUrl: 'https://github.com/carlos2024r3223rw/App_movil_Taller.git',
    sandboxInfo: {
      title: 'Entorno de Demostración:',
      content: 'En fase de pruebas internas. Repositorio en revisión para desacoplar credenciales de Firebase antes de su publicación.'
    },
    image: '/images/projects/tallerfacil1.png',
    gallery: [2, 3, 4, 5, 6, 7].map((n) => `/images/projects/tallerfacil${n}.png`)
  },

  // 5. Roccia (Destacado #5)
  {
    slug: 'roccia',
    title: 'Roccia',
    category: 'Asistente de Escritorio & IA Local',
    shortDesc: 'Asistente local de escritorio para Windows con voz, memoria, Gemini y automatización segura.',
    stackText: 'Python · Gemini API · WebSocket · SQLite · Electron · VRM · TTS/RVC',
    problem: 'Los asistentes en la nube requieren transmitir audio continuo y datos sensibles a servidores externos, limitando la privacidad y la ejecución de tareas locales.',
    solution: 'Asistente de escritorio nativo con procesamiento local, persistencia relacional en SQLite, comunicación por WebSocket bidireccional con Gemini y ejecución controlada de scripts locales.',
    stackDetail: 'Python, Gemini API, WebSockets, SQLite, Electron, VRM 3D Avatar, TTS/RVC.',
    isFeatured: true,
    isPersonal: true,
    sandboxInfo: {
      title: 'Nota de Licencia & Arquitectura:',
      content: 'El avatar 3D VRM puede estar sujeto a restricciones de licencia de terceros; no se presenta como recurso comercial propio. Ejecución local con aislamiento de comandos.'
    },
    image: '/images/projects/roccia.svg'
  },

  // 6. Back-in-Stock Alerts
  {
    slug: 'back-in-stock-alerts',
    title: 'Back-in-Stock Alerts',
    category: 'Backend Microservice & Idempotencia',
    shortDesc: 'Microservicio backend para alertas de reposición con tolerancia a fallos e idempotencia estricta.',
    stackText: 'Node.js 22 · SQLite (WAL) · Webhooks · Idempotencia · Docker · Resend API',
    problem: 'Pérdida de ventas por productos agotados, duplicidad de correos ante reintentos de webhooks y condiciones de carrera bajo ráfagas de tráfico.',
    solution: 'Deduplicación por índices únicos parciales, máquina de estados atómica (open → processing → notified), verificación de stock en tiempo real y claves deterministas de idempotencia con Resend.',
    stackDetail: 'Node.js 22 (node:http, node:sqlite, node:crypto), SQLite modo WAL, Docker, Resend API.',
    repoUrl: 'https://github.com/carlos2024r3223rw/back-in-stock-alerts',
    isFeatured: false,
    isPersonal: true,
    sandboxInfo: {
      title: 'Arquitectura & Resiliencia:',
      content: 'Idempotencia estricta con hashing criptográfico • Persistencia SQLite WAL • CSP estricta y panel administrativo protegido con Basic Auth.'
    },
    image: '/images/projects/back-in-stock-alerts.svg'
  },

  // 8. Kōra Studio
  {
    slug: 'kora-studio',
    title: 'Kōra Studio',
    category: 'Shopify D2C & Storefront Brutalista',
    shortDesc: 'Tienda D2C de streetwear con diseño brutalista, matriz de variantes y upsells dinámicos en carrito.',
    stackText: 'Shopify · Liquid · JavaScript (AJAX Cart) · Metafields · Bogus Gateway',
    problem: 'Marcas independientes de moda con lanzamientos limitados necesitaban control estricto de inventario por variante, guías de tallas para reducir devoluciones y aumentar el ticket promedio.',
    solution: 'Storefront personalizado con matriz de variantes (color/talla), guías de ajuste mediante metafields, avisos de bajo stock, barra de progreso para envío gratis y ventas cruzadas en carrito drawer.',
    stackDetail: 'Shopify, Liquid, JavaScript (AJAX Cart API), Metafields, Bogus Gateway.',
    demoUrl: 'https://calle-nomada.myshopify.com',
    isFeatured: false,
    isPersonal: false,
    sandboxInfo: {
      title: 'Contraseña de tienda de pruebas / sandbox:',
      content: 'Contraseña de acceso: epsorder • Pago de prueba: Tarjeta número 1, fecha futura, CVV 123 (Bogus Gateway).'
    },
    image: '/images/projects/kora-studio.svg'
  },

  // 9. Volcán Roasters
  {
    slug: 'volcan-roasters',
    title: 'Volcán Roasters',
    category: 'Shopify E-Commerce D2C',
    shortDesc: 'Tienda e-commerce D2C para café de especialidad con variantes de molienda y checkout funcional.',
    stackText: 'Shopify · Liquid · JavaScript · Shopify CLI · Bogus Gateway',
    problem: 'Tostadores de café artesanal necesitaban vender directo al cliente final permitiendo selección personalizada de peso y tipo de molienda sin recurrir a plantillas genéricas.',
    solution: 'Storefront en Shopify con lógica de variantes dinámicas (grano/molienda), fichas técnicas de origen por finca, estética oscura y pasarela Bogus Gateway para compras de prueba.',
    stackDetail: 'Shopify, Liquid, JavaScript, Shopify CLI, Bogus Gateway.',
    demoUrl: 'https://volcan-roasters.myshopify.com',
    isFeatured: false,
    isPersonal: false,
    sandboxInfo: {
      title: 'Contraseña de tienda de pruebas / sandbox:',
      content: 'Contraseña de acceso: dabley • Pago de prueba: Tarjeta número 1, fecha futura, CVV 123 (Bogus Gateway).'
    },
    image: '/images/projects/volcan-roasters.svg'
  },

  // 10. Atelier Nova
  {
    slug: 'atelier-nova',
    title: 'Atelier Nova',
    category: 'WooCommerce & Tienda de Moda',
    shortDesc: 'Tienda de moda premium en WooCommerce con checkout sin fricción y diseño editorial.',
    stackText: 'WordPress · WooCommerce · PHP · JavaScript · CSS3 Responsive',
    problem: 'Marcas de diseño de autor requerían una tienda en línea que combinara diseño editorial elegante con un proceso de pago optimizado para dispositivos móviles.',
    solution: 'Desarrollo de tema personalizado en WooCommerce con catálogo responsivo, carrito lateral AJAX y checkout en un solo paso enfocado en conversión.',
    stackDetail: 'WordPress, WooCommerce, PHP, JavaScript, CSS3, MySQL.',
    demoUrl: 'https://ateliernova.webcarlos.dev',
    repoUrl: 'https://github.com/carlos2024r3223rw/atelier-nova-woocommerce',
    isFeatured: false,
    isPersonal: false,
    image: '/images/projects/atelier-nova.svg'
  },

  // 11. Multilingual WP Landing
  {
    slug: 'multilingual-wp-landing',
    title: 'Multilingual WP Landing',
    category: 'WordPress & Internacionalización',
    shortDesc: 'Landing page corporativa multilingüe (ES/EN) con selector de idioma dinámico y SEO optimizado.',
    stackText: 'WordPress · Polylang · PHP · CSS3 Modular · Schema.org',
    problem: 'Empresas de servicios con clientes en Norteamérica y Latinoamérica necesitaban una página de aterrizaje con traducción contextual y tiempos de carga instantáneos.',
    solution: 'Estructura bilingüe nativa con Polylang, alternancia de URLs canónicas con hreflang, microdatos Schema.org y carga diferida de recursos.',
    stackDetail: 'WordPress, PHP, JavaScript, Polylang i18n, CSS3 modular.',
    demoUrl: 'https://multilinguallanding.webcarlos.dev',
    repoUrl: 'https://github.com/carlos2024r3223rw/multilingual-wp-landing',
    isFeatured: false,
    isPersonal: false,
    image: '/images/projects/multilingual-wp-landing.svg'
  },

  // 12. QA Playwright Suite
  {
    slug: 'qa-playwright-suite',
    title: 'QA Playwright Suite',
    category: 'QA Automation & E2E Testing',
    shortDesc: 'Suite de pruebas automatizadas E2E bajo arquitectura POM para flujos críticos de compra y autenticación.',
    stackText: 'JavaScript · Playwright · Page Object Model · E2E Testing · CI Automation',
    problem: 'Regresiones recurrentes en flujos de autenticación, catálogo y carrito de compras antes de cada despliegue a producción.',
    solution: 'Automatización integral con Playwright bajo patrón Page Object Model (POM), validando formularios, ordenamiento de productos, checkout y captura automática de trazas/capturas ante fallos.',
    stackDetail: 'JavaScript, Playwright Test Runner, Page Object Model, GitHub Actions CI.',
    repoUrl: 'https://github.com/carlos2024r3223rw/qa-playwright-suite',
    isFeatured: false,
    isPersonal: true,
    sandboxInfo: {
      title: 'Credenciales públicas de prueba (SauceDemo):',
      content: 'Las pruebas ejecutan contra el entorno público de SauceDemo usando los usuarios estándar documentados (standard_user / secret_sauce).'
    },
    image: '/images/projects/qa-playwright-suite.svg'
  },

  // 13. MediSaaS
  {
    slug: 'medisaas',
    title: 'MediSaaS',
    category: 'Healthcare SaaS & Gestión Clínica',
    shortDesc: 'Plataforma web para gestión de citas médicas, historial clínico y expedientes digitales.',
    stackText: 'HTML5 · CSS3 · JavaScript · Web APIs · LocalStorage Demo',
    problem: 'Consultorios independientes dependían de registros físicos para agendar turnos y consultar notas de evolución médica.',
    solution: 'Interfaz intuitiva con calendario de citas, módulo de expedientes clínicos, búsqueda por paciente y almacenamiento de demostración aislado.',
    stackDetail: 'HTML5, CSS3, JavaScript modular, Web Components.',
    demoUrl: 'https://carlos2024r3223rw.github.io/MediSaaS/',
    repoUrl: 'https://github.com/carlos2024r3223rw/MediSaaS',
    isFeatured: false,
    isPersonal: true,
    sandboxInfo: {
      title: 'Cuenta demo / sandbox:',
      content: 'Datos de prueba simulados. Acceso demo: usuario admin@medisaas.test / clave demo123 (datos locales, no contiene información médica real).'
    },
    image: '/images/projects/medisaas.svg'
  },

  // 14. Aurelia Landing Page
  {
    slug: 'aurelia-landing-page',
    title: 'Aurelia Landing Page',
    category: 'Frontend & Páginas de Aterrizaje',
    shortDesc: 'Landing page para marca de cosmética natural con animaciones fluidas y micro-interacciones.',
    stackText: 'HTML5 · CSS3 Flexbox/Grid · JavaScript · Responsive Design',
    problem: 'Marcas de cosmética artesanal necesitaban una presentación visual de alto impacto que comunicara calidad y beneficios de ingredientes.',
    solution: 'Landing page con diseño editorial, animaciones de entrada, acordeones de ingredientes y formulario de contacto optimizado para móviles.',
    stackDetail: 'HTML5 semántico, CSS3 con animaciones clave, JavaScript vanilla.',
    demoUrl: 'https://carlos2024r3223rw.github.io/aurelia-landing-page/',
    repoUrl: 'https://github.com/carlos2024r3223rw/aurelia-landing-page',
    isFeatured: false,
    isPersonal: true,
    image: '/images/projects/aurelia-landing-page.svg'
  },

  // 15. WeatherSphere Dashboard
  {
    slug: 'weathersphere-dashboard',
    title: 'WeatherSphere Dashboard',
    category: 'Dashboard & Consumo de APIs',
    shortDesc: 'Dashboard meteorológico interactivo con pronóstico en tiempo real y visualización de métricas climáticas.',
    stackText: 'JavaScript · OpenWeather API · CSS3 Dark Mode · Fetch API',
    problem: 'Dificultad para visualizar datos meteorológicos clave (humedad, viento, UV y pronóstico extendido) en una interfaz concisa y sin publicidad.',
    solution: 'Dashboard con búsqueda por ciudad, integración a API climática pública, caché de búsquedas recientes y visualización de tarjetas métricas.',
    stackDetail: 'JavaScript vanilla, OpenWeather REST API, CSS3 Grid con variables de color.',
    demoUrl: 'https://carlos2024r3223rw.github.io/weathersphere-dashboard/',
    repoUrl: 'https://github.com/carlos2024r3223rw/weathersphere-dashboard',
    isFeatured: false,
    isPersonal: true,
    image: '/images/projects/weathersphere-dashboard.svg'
  }
];

export const projectsEN: Project[] = [
  // 1. LeadOps AI (Featured #1)
  {
    slug: 'leadops-ai',
    title: 'LeadOps AI',
    category: 'Full-Stack SaaS & AI Automation',
    shortDesc: 'PWA for agency lead capture, AI triage, and structured client operations with human-in-the-loop control.',
    stackText: 'React · TypeScript · Vite · Fastify · Supabase · Gemini API · Vercel · PWA',
    problem: 'Leads scattered across multiple channels, slow manual responses, lack of structured follow-ups, and the risk of sending duplicate outreach emails.',
    solution: 'End-to-end pipeline featuring public intake forms, structured AI analysis, RLS-secured private inbox, human review, editing, approval, and simulated dispatch (Intake → AI Triage → Review → Approval → Simulated Dispatch).',
    stackDetail: 'React, TypeScript, Vite, Fastify, Supabase PostgreSQL/Auth, Gemini API, Vercel, and responsive PWA.',
    demoUrl: 'https://leadops.webcarlos.dev',
    repoUrl: 'https://github.com/carlos2024r3223rw/LeadOps-AI',
    isFeatured: true,
    isPersonal: false,
    sandboxInfo: {
      title: 'Architecture & Security:',
      content: 'Private authentication • Isolated demo environment • Anti-duplicate idempotency • Activity history • AI token & cost tracking • Supabase RLS • Protected API • Mandatory human approval before dispatch.'
    },
    image: '/images/projects/leadops-ai.svg'
  },

  // 2. PharmaPro (Featured #2)
  {
    slug: 'pharmapro',
    title: 'PharmaPro',
    category: 'Full-Stack SaaS & Pharmacy POS',
    shortDesc: 'PWA for comprehensive pharmacy operations featuring fast POS, expiration traffic light alerts, and immutable audit logs.',
    stackText: 'React · TypeScript · Node.js · Express · MySQL · Tailwind CSS · PWA',
    problem: 'Financial losses from expired medications, uncontrolled cash drawer discrepancies, and lack of traceability during inter-branch transfers.',
    solution: 'Integrated POS and inventory system with a 90-day expiration warning system, blind cash drawer reconciliation, logistical transfer tracking, and an immutable audit trail.',
    stackDetail: 'React, TypeScript, Node.js, Express, MySQL, Tailwind CSS, PWA.',
    repoUrl: 'https://github.com/carlos2024r3223rw/Aplicacion-Web-Farmacia',
    isFeatured: true,
    isPersonal: false,
    sandboxInfo: {
      title: 'Architecture & Security:',
      content: 'Transactional REST API • Role-Based Access Control (RBAC) • Immutable Audit Trail • Blind cash register reconciliation.'
    },
    image: '/images/projects/pharmapro.svg'
  },

  // 3. StockPilot (Featured #3)
  {
    slug: 'stockpilot',
    title: 'StockPilot',
    category: 'Shopify App & Inventory Intelligence',
    shortDesc: 'Interactive inventory dashboard prototype designed to monitor variant stock levels and configure restock thresholds.',
    stackText: 'HTML5 · CSS3 · JavaScript · Node.js · Shopify Polaris UI',
    problem: 'Fast-moving apparel stores with multiple sizes and colors lack instant visibility into low-stock SKUs, causing surprise stockouts during product drops.',
    solution: 'Embedded admin dashboard prototype with SKU-level health monitoring, restock threshold customization, low/out-of-stock badges, activity logs, and CSV export.',
    stackDetail: 'HTML5, CSS3, modular JavaScript, Node.js, and UI inspired by Shopify Polaris.',
    demoUrl: 'https://carlos2024r3223rw.github.io/stockpilot-shopify-app/',
    repoUrl: 'https://github.com/carlos2024r3223rw/stockpilot-shopify-app',
    isFeatured: true,
    isPersonal: true,
    sandboxInfo: {
      title: 'Demo account / sandbox:',
      content: 'Mode: Interactive prototype with simulated Kōra Studio SKU data. Does not require login credentials nor installation on a live Shopify store.'
    },
    image: '/images/projects/stockpilot.svg'
  },

  // 4. TallerFácil (Featured #4)
  {
    slug: 'tallerfacil',
    title: 'TallerFácil',
    category: 'Mobile App & Repair Shop Operations',
    shortDesc: 'Mobile application for repair shops to register devices, track repair status, generate PDF receipts, and notify customers via WhatsApp.',
    stackText: 'Kotlin · Jetpack Compose · Firebase Auth · Firestore · MVVM · Coroutines',
    problem: 'Electronics and mechanical repair shops often track incoming equipment with paper tags or informal notes, causing lost records, diagnostic delays, and customer friction.',
    solution: 'Native Android application providing a service order catalog, real-time status transitions (received, diagnosing, repaired, delivered), one-tap PDF receipt generation, and direct WhatsApp notification dispatch.',
    stackDetail: 'Kotlin, Jetpack Compose, Firebase Auth, Cloud Firestore, MVVM Architecture, Kotlin Coroutines.',
    isFeatured: true,
    isPersonal: true,
    repoUrl: 'https://github.com/carlos2024r3223rw/App_movil_Taller.git',
    sandboxInfo: {
      title: 'Demo Environment:',
      content: 'Under internal testing. Repository currently in review to decouple Firebase private configuration before public release.'
    },
    image: '/images/projects/tallerfacil1.png',
    gallery: [2, 3, 4, 5, 6, 7].map((n) => `/images/projects/tallerfacil${n}.png`)
  },

  // 5. Roccia (Featured #5)
  {
    slug: 'roccia',
    title: 'Roccia',
    category: 'Desktop Assistant & Local AI',
    shortDesc: 'Local desktop assistant for Windows featuring voice, memory, Gemini, and secure automation.',
    stackText: 'Python · Gemini API · WebSocket · SQLite · Electron · VRM · TTS/RVC',
    problem: 'Cloud-only voice assistants require continuously streaming private audio and sensitive operational data to external servers, compromising privacy and local system control.',
    solution: 'Native desktop assistant with on-device processing, relational memory in SQLite, bi-directional WebSocket connection to Gemini, and sandboxed script execution for local workflows.',
    stackDetail: 'Python, Gemini API, WebSockets, SQLite, Electron, VRM 3D Avatar, TTS/RVC.',
    isFeatured: true,
    isPersonal: true,
    sandboxInfo: {
      title: 'Licensing & Architecture Note:',
      content: 'The 3D VRM avatar may carry third-party licensing restrictions; it is not presented as proprietary commercial artwork. Runs locally with isolated command dispatch.'
    },
    image: '/images/projects/roccia.svg'
  },

  // 6. Back-in-Stock Alerts
  {
    slug: 'back-in-stock-alerts',
    title: 'Back-in-Stock Alerts',
    category: 'Backend Microservice & Idempotency',
    shortDesc: 'Backend notification microservice for restock alerts with strict idempotency and fault tolerance.',
    stackText: 'Node.js 22 · SQLite (WAL) · Webhooks · Idempotency · Docker · Resend API',
    problem: 'Lost e-commerce conversions from stockouts, duplicate notification emails triggered by webhook retries, and race conditions during high traffic bursts.',
    solution: 'Partial unique index deduplication, atomic state machine transitions (open → processing → notified), real-time stock checks, and deterministic idempotency keys via Resend.',
    stackDetail: 'Node.js 22 (node:http, node:sqlite, node:crypto), SQLite WAL mode, Docker, Resend API.',
    repoUrl: 'https://github.com/carlos2024r3223rw/back-in-stock-alerts',
    isFeatured: false,
    isPersonal: true,
    sandboxInfo: {
      title: 'Architecture & Resilience:',
      content: 'Strict cryptographic idempotency • SQLite WAL persistence • Strict Content Security Policy & Basic Auth admin panel.'
    },
    image: '/images/projects/back-in-stock-alerts.svg'
  },

  // 8. Kōra Studio
  {
    slug: 'kora-studio',
    title: 'Kōra Studio',
    category: 'Shopify D2C & Brutalist Storefront',
    shortDesc: 'D2C streetwear e-commerce storefront with a brutalist design system, variant matrix, and dynamic cart upsells.',
    stackText: 'Shopify · Liquid · JavaScript (AJAX Cart) · Metafields · Bogus Gateway',
    problem: 'Independent streetwear labels running limited drops needed strict variant inventory control, sizing guidance to reduce return rates, and higher average order value.',
    solution: 'Brutalist custom storefront with color/size matrix variants, custom metafield fit guides, low-stock indicators, free-shipping progress bar, and cart cross-sells.',
    stackDetail: 'Shopify, Liquid, JavaScript (AJAX Cart API), Metafields, Bogus Gateway.',
    demoUrl: 'https://calle-nomada.myshopify.com',
    isFeatured: false,
    isPersonal: false,
    sandboxInfo: {
      title: 'Test store password / sandbox:',
      content: 'Store password: epsorder • Test payment: Card number 1, future date, CVV 123 (Bogus Gateway).'
    },
    image: '/images/projects/kora-studio.svg'
  },

  // 9. Volcán Roasters
  {
    slug: 'volcan-roasters',
    title: 'Volcán Roasters',
    category: 'Shopify E-Commerce D2C',
    shortDesc: 'D2C specialty coffee store with custom grind/weight variants, single-origin notes, and full checkout.',
    stackText: 'Shopify · Liquid · JavaScript · Shopify CLI · Bogus Gateway',
    problem: 'Artisan coffee roasters needed direct-to-consumer sales with flexible grind and weight selection without relying on generic commercial templates.',
    solution: 'Custom Shopify storefront with dynamic variant selectors (whole bean/grind types), origin tasting note cards, dark aesthetic, and Bogus Gateway test checkout.',
    stackDetail: 'Shopify, Liquid, JavaScript, Shopify CLI, Bogus Gateway.',
    demoUrl: 'https://volcan-roasters.myshopify.com',
    isFeatured: false,
    isPersonal: false,
    sandboxInfo: {
      title: 'Test store password / sandbox:',
      content: 'Store password: dabley • Test payment: Card number 1, future date, CVV 123 (Bogus Gateway).'
    },
    image: '/images/projects/volcan-roasters.svg'
  },

  // 10. Atelier Nova
  {
    slug: 'atelier-nova',
    title: 'Atelier Nova',
    category: 'WooCommerce & Fashion Store',
    shortDesc: 'Premium fashion e-commerce storefront built on WooCommerce with frictionless checkout and editorial layout.',
    stackText: 'WordPress · WooCommerce · PHP · JavaScript · Responsive CSS3',
    problem: 'Boutique apparel designers required a web store combining high-fashion editorial imagery with a fast checkout flow optimized for mobile shoppers.',
    solution: 'Custom WooCommerce theme development featuring a responsive catalog, AJAX drawer cart, and a streamlined single-page checkout flow.',
    stackDetail: 'WordPress, WooCommerce, PHP, JavaScript, CSS3, MySQL.',
    demoUrl: 'https://ateliernova.webcarlos.dev',
    repoUrl: 'https://github.com/carlos2024r3223rw/atelier-nova-woocommerce',
    isFeatured: false,
    isPersonal: false,
    image: '/images/projects/atelier-nova.svg'
  },

  // 11. Multilingual WP Landing
  {
    slug: 'multilingual-wp-landing',
    title: 'Multilingual WP Landing',
    category: 'WordPress & Internationalization',
    shortDesc: 'Corporate multilingual landing page (EN/ES) featuring dynamic language switching and technical SEO.',
    stackText: 'WordPress · Polylang · PHP · Modular CSS3 · Schema.org',
    problem: 'B2B service providers serving North and Latin American markets needed a localized landing page with seamless language switching and instant page load speeds.',
    solution: 'Native bilingual structure powered by Polylang, automated hreflang canonical alternates, Schema.org microdata, and modular asset loading.',
    stackDetail: 'WordPress, PHP, JavaScript, Polylang i18n, modular CSS3.',
    demoUrl: 'https://multilinguallanding.webcarlos.dev',
    repoUrl: 'https://github.com/carlos2024r3223rw/multilingual-wp-landing',
    isFeatured: false,
    isPersonal: false,
    image: '/images/projects/multilingual-wp-landing.svg'
  },

  // 12. QA Playwright Suite
  {
    slug: 'qa-playwright-suite',
    title: 'QA Playwright Suite',
    category: 'QA Automation & E2E Testing',
    shortDesc: 'Automated E2E test suite built with Playwright and Page Object Model (POM) validating auth and checkout flows.',
    stackText: 'JavaScript · Playwright · Page Object Model · E2E Testing · CI Automation',
    problem: 'Recurring regressions in authentication, inventory catalog browsing, and cart checkout before major production releases.',
    solution: 'Comprehensive test automation with Playwright following Page Object Model (POM), covering form validation, product sorting, cart checkout, and automatic failure traces.',
    stackDetail: 'JavaScript, Playwright Test Runner, Page Object Model, GitHub Actions CI.',
    repoUrl: 'https://github.com/carlos2024r3223rw/qa-playwright-suite',
    isFeatured: false,
    isPersonal: true,
    sandboxInfo: {
      title: 'Public test credentials (SauceDemo):',
      content: 'Tests execute against the public SauceDemo sandbox using standard documented credentials (standard_user / secret_sauce).'
    },
    image: '/images/projects/qa-playwright-suite.svg'
  },

  // 13. MediSaaS
  {
    slug: 'medisaas',
    title: 'MediSaaS',
    category: 'Healthcare SaaS & Clinical Practice',
    shortDesc: 'Web application for clinical appointment scheduling, patient records, and medical consultations.',
    stackText: 'HTML5 · CSS3 · JavaScript · Web APIs · LocalStorage Demo',
    problem: 'Independent practitioners relied on physical paper files to manage daily schedules and clinical progress notes.',
    solution: 'Clean web interface with appointment calendar, patient record management, quick search, and isolated client-side demonstration storage.',
    stackDetail: 'HTML5, CSS3, modular JavaScript, Web Components.',
    demoUrl: 'https://carlos2024r3223rw.github.io/MediSaaS/',
    repoUrl: 'https://github.com/carlos2024r3223rw/MediSaaS',
    isFeatured: false,
    isPersonal: true,
    sandboxInfo: {
      title: 'Demo account / sandbox:',
      content: 'Simulated dummy data. Demo login: admin@medisaas.test / demo123 (local demonstration storage, zero real medical records).'
    },
    image: '/images/projects/medisaas.svg'
  },

  // 14. Aurelia Landing Page
  {
    slug: 'aurelia-landing-page',
    title: 'Aurelia Landing Page',
    category: 'Frontend & Landing Pages',
    shortDesc: 'High-converting cosmetics landing page with smooth micro-interactions and responsive layout.',
    stackText: 'HTML5 · CSS3 Flexbox/Grid · JavaScript · Responsive Design',
    problem: 'Artisan skincare brands needed an elegant visual narrative communicating pure ingredient sourcing and brand value.',
    solution: 'Editorial landing page featuring hero reveal animations, ingredient disclosure accordions, and a mobile-optimized contact flow.',
    stackDetail: 'Semantic HTML5, CSS3 keyframe animations, vanilla JavaScript.',
    demoUrl: 'https://carlos2024r3223rw.github.io/aurelia-landing-page/',
    repoUrl: 'https://github.com/carlos2024r3223rw/aurelia-landing-page',
    isFeatured: false,
    isPersonal: true,
    image: '/images/projects/aurelia-landing-page.svg'
  },

  // 15. WeatherSphere Dashboard
  {
    slug: 'weathersphere-dashboard',
    title: 'WeatherSphere Dashboard',
    category: 'Dashboard & Public API Integration',
    shortDesc: 'Interactive meteorological dashboard with real-time conditions, extended forecasts, and climate KPIs.',
    stackText: 'JavaScript · OpenWeather API · CSS3 Dark Mode · Fetch API',
    problem: 'Difficulty viewing critical weather parameters (humidity, wind velocity, UV index, and 5-day forecast) without ad-cluttered interfaces.',
    solution: 'Single-page dashboard featuring city geocoding search, OpenWeather API integration, recent search caching, and climate KPI cards.',
    stackDetail: 'Vanilla JavaScript, OpenWeather REST API, CSS3 Grid with custom dark palette.',
    demoUrl: 'https://carlos2024r3223rw.github.io/weathersphere-dashboard/',
    repoUrl: 'https://github.com/carlos2024r3223rw/weathersphere-dashboard',
    isFeatured: false,
    isPersonal: true,
    image: '/images/projects/weathersphere-dashboard.svg'
  }
];

// Dynamically resolve image for all projects based on actual files present in public/images/projects/
function bindDynamicImage(project: Project) {
  Object.defineProperty(project, 'image', {
    get() {
      return getProjectImage(project.slug);
    },
    enumerable: true,
    configurable: true,
  });
}

projectsES.forEach(bindDynamicImage);
projectsEN.forEach(bindDynamicImage);

export const featuredProjectsES = projectsES.filter(p => p.isFeatured);
export const moreProjectsES = projectsES.filter(p => !p.isFeatured);

export const featuredProjectsEN = projectsEN.filter(p => p.isFeatured);
export const moreProjectsEN = projectsEN.filter(p => !p.isFeatured);
