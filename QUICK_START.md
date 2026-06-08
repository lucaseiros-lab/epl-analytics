# 🚀 Guía de Inicio Rápido - EPL Analytics

## Paso 1: Instalación (5 minutos)

### Windows / Mac / Linux

```bash
# Ir a la carpeta del proyecto
cd C:\Users\lucas\iCloudDrive\Documents\LUCAS\ EIROS\Web\ Personal\epl-analytics

# Instalar dependencias
npm install

# Crear archivo .env.local
cp .env.example .env.local
```

## Paso 2: Configurar Supabase (10 minutos)

### 2.1 Crear Proyecto
1. Ir a https://supabase.com
2. Click en "New Project"
3. Completar datos (proyecto gratis)
4. Esperar a que se inicialice (~2 min)

### 2.2 Obtener Credenciales
En el dashboard de Supabase:
1. Ir a Settings → API
2. Copiar `Project URL` → Variable `NEXT_PUBLIC_SUPABASE_URL`
3. Copiar `anon public` key → Variable `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2.3 Crear Tablas
1. Ir a SQL Editor
2. Copiar todo el contenido de `setup.sql`
3. Pegar en el SQL Editor
4. Click "Run"

## Paso 3: Ejecutar Localmente (3 minutos)

```bash
npm run dev
```

Abrir navegador: http://localhost:3000

## Paso 4: Cargar Primeros Datos (10 minutos)

### 4.1 Preparar Archivos CSV

Necesitás exportar de tu contabilidad (Regisoft/etc):

**Opción Manual:**
1. Abre cada Excel (Ventas, Compras, etc)
2. "Guardar Como" → CSV UTF-8
3. Guarda los 6 archivos en una carpeta

**Opción Automática:**
```bash
# Si tenés los XLSX en C:\Users\lucas\Desktop\INFO - EPL Gestión

# Los CSVs ya están listos: BalanceResultados.csv, etc
# Copialos a la carpeta epl-analytics/data/2026-05/
```

### 4.2 Cargar en App
1. Abre http://localhost:3000/upload
2. Completa "Empresa" con:
   - Nombre: EPL Consultores
   - CUIT: 30-71193999-3
3. Click "Continuar"
4. Selecciona los 6 archivos CSV
5. Click "Cargar Datos"

### 4.3 Ver Dashboard
1. Abre http://localhost:3000/dashboard
2. Verás los 5 márgenes con semáforos

## Paso 5: Deploy en Vercel (10 minutos)

### 5.1 GitHub
```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/epl-analytics.git
git push -u origin main
```

### 5.2 Vercel
1. Ir a https://vercel.com
2. Click "New Project"
3. Seleccionar repositorio
4. Agregar variables de entorno:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
5. Click "Deploy"

**URL de tu app:** `https://epl-analytics.vercel.app`

---

## 📊 Workflow Mensual (Después del Setup)

Cada mes repetir esta secuencia:

```
1. Exportar CSVs de contabilidad (5 min)
   → Ventas.csv, Compras.csv, Pagos.csv, Cobranzas.csv, Banco.csv, Balance.csv

2. Cargar en App (3 min)
   → http://localhost:3000/upload

3. Revisar Dashboard (5 min)
   → http://localhost:3000/dashboard
   → Validar semáforos y métricas

4. Generar Teaser (Automático)
   → Script genera PDF actualizado

5. Tomar decisiones
   → Basado en KPIs y tendencias
```

---

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules
npm install
npm run dev
```

### Error: "NEXT_PUBLIC_SUPABASE_URL no definida"
```bash
# Verificar que .env.local existe y tiene las 2 variables
cat .env.local
```

### Error: "Cannot POST /api/upload"
```bash
# El archivo es muy grande o formato incorrecto
# Validar que sea CSV UTF-8
# Validar headers del CSV
```

### Dashboard dice "Sin datos disponibles"
```bash
# Aún no cargaste datos
# Ve a http://localhost:3000/upload
# Carga los 6 CSVs
```

---

## ✅ Checklist de Setup

- [ ] `npm install` completado
- [ ] `.env.local` creado con 2 variables
- [ ] Supabase proyecto creado
- [ ] SQL ejecutado en Supabase
- [ ] `npm run dev` funcionando
- [ ] http://localhost:3000 accesible
- [ ] CSVs preparados
- [ ] Datos cargados en app
- [ ] Dashboard muestra 5 márgenes
- [ ] GitHub setup (opcional)
- [ ] Vercel deploy (opcional)

---

## 📞 Recursos

- **Documentación completa**: README.md
- **Teaser Guide**: TEASER_GUIDE.md
- **SQL Setup**: setup.sql
- **Soporte Supabase**: https://supabase.com/docs
- **Docs Next.js**: https://nextjs.org/docs

---

## 🎯 Próximos Pasos

Después del setup inicial:

1. ✅ Cargar datos mensuales (1x mes)
2. ✅ Revisar dashboard (1x mes)
3. ✅ Análisis de tendencias (1x trimestre)
4. ✅ Ajustar proyecciones (1x trimestre)
5. ✅ Generar reportes (as-needed)
6. ✅ Crear Teaser para inversores (as-needed)

**¡Listo para empezar!** 🚀

