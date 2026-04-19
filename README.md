# Portofolio Angular

Konten ini adalah template landing page portofolio yang responsif menggunakan Angular.

## 🚀 Fitur

- Landing page portofolio dinamis
- Filter kategori proyek
- Search projects real-time
- Modal detail project
- Contact form interaktif
- Skills section dengan progress bar
- Navbar sticky dengan smooth scroll
- Desain responsif untuk mobile dan desktop
- Dibangun dengan Angular standalone component

## 📦 Instalasi & Menjalankan Lokal

### Requirement
- Node.js versi 18+ 
- npm versi 9+

### Langkah Menjalankan

1. **Clone atau download repository ini**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm start
   ```
   atau
   ```bash
   npx ng serve --port 4201
   ```

4. **Buka browser**
   - Otomatis: `http://localhost:4200`
   - Manual: buka link yang ditampilkan di terminal

## ✏️ Customize Data Anda

Edit file `src/app/app.component.ts` untuk mengubah:

```typescript
// Informasi pribadi
name = 'NAMA ANDA';
role = 'Frontend Developer / UI Engineer';
bio = 'Deskripsi singkat Anda';

// Kontak
contactEmail = 'email@anda.com';
linkedin = 'https://linkedin.com/in/username';
github = 'https://github.com/username';

// Skills dan Projects
skills: Skill[] = [ ... ];
projects: Project[] = [ ... ];
```

## 🌐 Deploy ke GitHub Pages

Ikuti panduan lengkap di file [DEPLOY.md](DEPLOY.md):

### Ringkas:
1. Create repository di GitHub
2. Push code menggunakan git
3. Enable GitHub Pages
4. Website Anda live di `https://username.github.io/repo-name`

GitHub Actions akan **otomatis build dan deploy** setiap kali Anda push!

## 📁 Struktur Project

```
porto/
├── src/
│   ├── app/
│   │   ├── app.component.ts       (Main component logic)
│   │   ├── app.component.html     (Template)
│   │   ├── app.component.css      (Styling)
│   ├── index.html                 (HTML utama)
│   ├── main.ts                    (Bootstrap)
│   ├── styles.css                 (Global styles)
├── .github/
│   └── workflows/
│       └── deploy.yml             (GitHub Actions workflow)
├── angular.json                   (Angular configuration)
├── tsconfig.json                  (TypeScript config)
├── package.json                   (Dependencies)
└── README.md                      (File ini)
```

## 🛠️ Tech Stack

- **Framework**: Angular 16
- **Language**: TypeScript
- **Styling**: CSS 3 with gradients & animations
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 Build untuk Production

```bash
npm run build
```

Output akan di folder `dist/porto/`

## 🔧 Available Commands

```bash
npm start              # Start dev server
npm run build          # Build production
npm test               # Run unit tests
npm run lint           # Run linter
```

## 📄 License

Gratis untuk digunakan dan dimodifikasi.

## 💡 Tips

- Edit `src/app/app.component.ts` untuk customize
- Simpan file dan browser otomatis refresh
- Hapus contoh projects dan tambah punya Anda
- Customize warna di `src/app/app.component.css`

---

**Siap mulai?** Clone repository ini dan follow langkah di atas! 🎉

