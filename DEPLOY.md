# Panduan Deploy ke GitHub Pages

## Langkah 1: Setup Repository di GitHub

1. **Buat repository baru** di https://github.com/new
   - Nama: `porto` atau `portfolio`
   - Buat kosong (jangan add README, .gitignore, license)

2. **Copy URL repository Anda** (format: `https://github.com/username/repo-name.git`)

## Langkah 2: Setup Local Git

Buka PowerShell di folder `e:\PROJECT\PORTO` dan jalankan:

```bash
# Inisialisasi git
git init

# Set user (ganti dengan info Anda)
git config user.name "Nama Anda"
git config user.email "email@anda.com"

# Add remote
git remote add origin https://github.com/username/repo-name.git

# Rename branch ke main (jika perlu)
git branch -M main
```

## Langkah 3: First Commit & Push

```bash
# Staging semua file
git add .

# Commit pertama
git commit -m "Initial commit: Angular portfolio landing page"

# Push ke GitHub
git push -u origin main
```

## Langkah 4: Konfigurasi GitHub Actions

1. **Edit file `.github/workflows/deploy.yml`**
   - Cari baris: `--base-href="/REPO_NAME/"`
   - Ganti `REPO_NAME` dengan nama repository Anda
   - Contoh: `--base-href="/porto/"`

2. **Jika branch Anda `master` bukan `main`**, edit line 7-8 di deploy.yml:
   ```yaml
   branches:
     - master  # atau main, sesuai branch Anda
   ```

## Langkah 5: Enable GitHub Pages

1. Buka repository di GitHub
2. Go to **Settings** → **Pages**
3. Pilih **Deploy from a branch**
4. Branch: `gh-pages`
5. Folder: `/ (root)`
6. Klik **Save**

## Langkah 6: Trigger Deploy

1. Commit dan push perubahan:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

2. GitHub Actions akan otomatis build dan deploy
3. Tunggu ~2-3 menit
4. Buka **https://username.github.io/repo-name** untuk lihat live website

## Update Workflow (Jika Perlu)

Setiap kali Anda push ke branch `main`:
- GitHub Actions akan otomatis build Angular app
- Deploy hasil build ke GitHub Pages
- Website Anda update otomatis!

## Commands Bash/PowerShell Sering Digunakan

```bash
# Check status
git status

# View commits
git log --oneline

# Push changes
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main
```

## Tips

- ✅ Jangan commit `node_modules/` (sudah di .gitignore)
- ✅ Jangan commit `dist/` (dibuild otomatis)
- ✅ Jangan commit `.angular/` atau `coverage/`
- ✅ Commit hanya file source (`.ts`, `.html`, `.css`, `package.json`, dst)
- ✅ Test lokal dulu sebelum push

## Troubleshooting

**Q: Deploy gagal?**
- Check GitHub Actions tab → Workflows
- Lihat log untuk error message
- Common issue: `base-href` tidak sesuai

**Q: Website blank atau error 404?**
- Pastikan `base-href` di deploy.yml sesuai dengan repo name
- Clear browser cache (Ctrl+Shift+Del)

**Q: Mau rollback ke commit sebelumnya?**
```bash
git revert HEAD
git push origin main
```

---

**Siap deploy? Let's go!** 🚀
