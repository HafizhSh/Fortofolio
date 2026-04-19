# 🚀 Quick Start Deploy ke GitHub Pages

## 3 Langkah Cepat

### 1️⃣ Create GitHub Repository
```
https://github.com/new
```
- Nama: `porto` atau `portfolio`  
- Kosongkan (no README, .gitignore, license)

### 2️⃣ Push ke GitHub

```bash
cd e:\PROJECT\PORTO

# Init git
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Add files
git add .
git commit -m "Initial commit: Portfolio landing page"

# Push (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3️⃣ Enable GitHub Pages

1. Buka repository → **Settings**
2. Klik **Pages** (di sidebar kiri)
3. Pilih source: **GitHub Actions** (bukan Deploy from a branch)
4. Save

✅ **Selesai!** Website akan live di: `https://USERNAME.github.io/REPO_NAME`

---

## 📝 Update Konten

Edit `src/app/app.component.ts` lalu:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions otomatis rebuild & deploy! ⚡

---

## 🎯 Hasil Akhir

- ✅ Landing page live di GitHub Pages
- ✅ Auto-deploy setiap push
- ✅ Gratis hosting selamanya
- ✅ Custom domain support (opsional)

---

**Butuh bantuan?** Buka [DEPLOY.md](DEPLOY.md) untuk panduan lengkap
