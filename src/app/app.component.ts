import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  tags: string[];
  url: string;
  image?: string;
}

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'NAMA ANDA';
  role = 'Frontend Developer / UI Engineer';
  bio = 'Passionate developer dengan fokus pada user experience dan performa aplikasi web.';
  intro = 'Saya membuat website portofolio yang modern, responsif, dan dikembangkan dengan Angular. Temukan proyek terbaik saya di bawah.';
  contactEmail = 'halo@contoh.com';
  linkedin = 'https://linkedin.com/in/username';
  github = 'https://github.com/username';
  twitter = 'https://twitter.com/username';

  selectedCategory = 'Semua';
  searchQuery = '';
  selectedProject: Project | null = null;
  showContactForm = false;
  contactFormData = { name: '', email: '', message: '' };
  formSubmitted = false;

  skills: Skill[] = [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'CSS/SCSS', level: 92 },
    { name: 'Backend (Node.js)', level: 80 },
    { name: 'UI/UX Design', level: 88 },
  ];

  projects: Project[] = [
    {
      title: 'Aplikasi Manajemen Tugas',
      description: 'Aplikasi untuk membuat, mengelola, dan memantau tugas harian dengan antarmuka yang bersih dan responsif.',
      fullDescription: 'Aplikasi manajemen tugas lengkap dengan fitur drag-drop, deadline tracking, priority levels, dan real-time collaboration. Dibangun dengan Angular dan Firebase untuk scalability maksimal.',
      category: 'Web App',
      tags: ['Angular', 'TypeScript', 'Responsive'],
      url: '#',
    },
    {
      title: 'Dashboard Analitik',
      description: 'Dashboard informasi bisnis dengan visualisasi data yang mudah dipahami dan mobile-first design.',
      fullDescription: 'Dashboard analytics yang powerful dengan real-time data visualization, custom reports, dan export capabilities. Menggunakan Chart.js dan D3.js untuk visualisasi data yang menarik.',
      category: 'Dashboard',
      tags: ['Data', 'UX', 'API'],
      url: '#',
    },
    {
      title: 'Website Portofolio',
      description: 'Landing page personal yang menampilkan profil, layanan, dan portofolio project secara modern.',
      fullDescription: 'Website portofolio responsif dengan scroll animations, smooth transitions, dan interactive components. Optimized untuk SEO dan performa tinggi dengan Lighthouse score 95+.',
      category: 'Landing Page',
      tags: ['Design', 'CSS Grid', 'Animation'],
      url: '#',
    },
    {
      title: 'Toko Online',
      description: 'Toko online dengan pengalaman belanja responsif, fitur filter produk, dan checkout sederhana.',
      fullDescription: 'E-commerce platform dengan product filtering, shopping cart, payment gateway integration, dan admin dashboard. Menggunakan Angular untuk frontend dan Node.js untuk backend.',
      category: 'E-commerce',
      tags: ['Frontend', 'UX', 'Responsive'],
      url: '#',
    },
    {
      title: 'Mobile App - Fitness Tracker',
      description: 'Aplikasi fitness tracking dengan notifikasi real-time dan analytics workout history.',
      fullDescription: 'Aplikasi mobile untuk tracking aktivitas fitness dengan GPS integration, workout plans, nutrition tracking, dan social features. Tersedia di iOS dan Android menggunakan React Native.',
      category: 'Mobile App',
      tags: ['React Native', 'Mobile', 'Health-Tech'],
      url: '#',
    },
    {
      title: 'CMS Platform',
      description: 'Content Management System yang user-friendly dengan role-based access control.',
      fullDescription: 'Platform CMS enterprise-grade dengan drag-drop page builder, media management, version control, dan scheduled publishing. Built with Angular dan Express.js backend.',
      category: 'Dashboard',
      tags: ['Angular', 'Backend', 'Database'],
      url: '#',
    },
  ];

  get categories(): string[] {
    const unique = Array.from(new Set(this.projects.map((project) => project.category)));
    return ['Semua', ...unique];
  }

  get filteredProjects(): Project[] {
    let filtered = this.selectedCategory === 'Semua' ? this.projects : this.projects.filter((project) => project.category === this.selectedCategory);

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((project) => project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query) || project.tags.some((tag) => tag.toLowerCase().includes(query)));
    }

    return filtered;
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    this.searchQuery = '';
  }

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  toggleContactForm(): void {
    this.showContactForm = !this.showContactForm;
    this.formSubmitted = false;
    if (!this.showContactForm) {
      this.resetForm();
    }
  }

  submitForm(): void {
    this.formSubmitted = true;
    if (this.contactFormData.name && this.contactFormData.email && this.contactFormData.message) {
      console.log('Form submitted:', this.contactFormData);
      alert('Terima kasih! Pesan Anda sudah terkirim.');
      this.resetForm();
      this.showContactForm = false;
    }
  }

  resetForm(): void {
    this.contactFormData = { name: '', email: '', message: '' };
    this.formSubmitted = false;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
