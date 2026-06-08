# Deploy a Vercel - EPL Analytics

## ✅ Repositorio GitHub Configurado
```
GitHub Repo: https://github.com/lucaseiros-lab/epl-analytics
Branch: main
Commits: [FASE 2 completa con Valuacion DCF + Riesgos + Cashflow]
```

## 🚀 Deploy Automático en Vercel (2 minutos)

### Opción 1: Deploy directo desde GitHub UI
1. Ir a: https://vercel.com/new
2. Click: "Import Git Repository"
3. Seleccionar: `lucaseiros-lab/epl-analytics`
4. Click: "Deploy"
5. Esperar ~1-2 minutos
6. **URL en vivo aparecerá automáticamente**

### Opción 2: Deploy desde CLI (si tenés Vercel login activo)
```bash
cd "/c/Users/lucas/iCloudDrive/Documents/LUCAS EIROS/Web Personal/epl-analytics"
vercel --prod
```
Vercel te dará la URL de producción.

### Opción 3: GitHub → Vercel automático (Recommended)
1. Ve a Vercel Dashboard: https://vercel.com/dashboard
2. Click: "+ New Project"
3. Importa desde GitHub: `lucaseiros-lab/epl-analytics`
4. Settings:
   - Framework: Next.js (detección automática)
   - Node version: 18+ (default ok)
   - Environment variables: Ninguna requerida
5. Click: "Deploy"

---

## ✨ Qué Incluye el Deploy

### Páginas funcionales:
- `/` - Home
- `/dashboard` - KPIs principales
- `/cashflow` - Proyección 12 meses con datos reales
- `/valuacion` - DCF con perpetuidad + Teaser inversores
- `/riesgos` - Análisis riesgos con matriz visual
- `/estrategias` - Plan de acción 
- `/analisis` - Análisis financiero detallado

### Assets incluidos:
- `public/EPL_ANALISIS_COMPLETO_2026.pdf` (197KB, 11 páginas)
- Datos reales Enero-Mayo 2026
- Proyecciones Junio-Diciembre 2026

---

## 📊 Información del Deploy

**Build Command:** `npm run build`
**Start Command:** `npm start`
**Port:** 3000 (Vercel automático)

**Dependencies:** Todas en package.json (Next.js 14, React 18, Tailwind, TypeScript)

**Build Time:** ~2 minutos
**Deployment Size:** ~2.5MB

---

## 🎯 Resultado Final

Una vez deployado en Vercel, la URL será:
```
https://epl-analytics-[random-id].vercel.app
```

O si vinculaste un custom domain:
```
https://epl-analytics.vercel.app (si lo configuraste)
```

---

## 🔗 Links Útiles

- **GitHub Repo**: https://github.com/lucaseiros-lab/epl-analytics
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel New Project**: https://vercel.com/new

---

**Estado:** ✅ Repositorio configurado, listo para deploy
**Última actualización:** 7 Junio 2026
**Commit:** FASE 2 - Valuacion DCF + Riesgos + Cashflow Proyectado
