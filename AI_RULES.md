# AI_RULES.md

# ⚠️ Important

Setiap kali membantu project ini, AI WAJIB membaca file `README.md` dan `AI_RULES.md` terlebih dahulu sebelum memberikan saran atau menulis kode. Semua solusi harus mengikuti aturan yang tertulis di kedua file tersebut.

# 🤖 AI Development Rules

Dokumen ini berisi aturan yang WAJIB diikuti oleh AI ketika membantu mengembangkan project **KyyDev Portfolio**.

Tujuan utama adalah menjaga konsistensi desain, struktur project, kualitas kode, dan alur pengembangan.

---

# Project Information

Project Name

KyyDev Portfolio

Type

Personal Portfolio Website

Framework

React + Vite

Language

JavaScript

Styling

SCSS

Animation

Motion (Framer Motion)

---

# Primary Goal

Membangun website portfolio modern dengan kualitas premium.

Target desain setara dengan:

- Brittany Chiang
- Lee Robinson
- ReactBits
- Aceternity UI
- Magic UI
- Framer Portfolio

Website harus terlihat profesional, modern, ringan, dan responsive.

---

# Design Principles

Desain WAJIB mengikuti prinsip berikut:

- Modern
- Clean
- Minimal
- Elegant
- Premium
- Responsive
- Smooth Animation

JANGAN membuat desain yang terlalu ramai.

JANGAN menggunakan warna yang tidak konsisten.

JANGAN mengubah layout yang sudah disetujui.

---

# Color Palette

Background

#060816

Primary

#6EA8FE

Card

#111827

Text

#FFFFFF

Secondary Text

#94A3B8

Border

rgba(255,255,255,.08)

WAJIB menggunakan warna di atas.

---

# Typography

Heading

Space Grotesk

Body

Inter

---

# Layout Rules

Container

1200px

Max Width

1280px

Desktop Padding

80px

Tablet Padding

48px

Mobile Padding

24px

Spacing harus konsisten.

---

# Border Radius

Card

24px

Button

999px

Input

16px

---

# Shadow Rules

Gunakan shadow yang soft.

Jangan membuat shadow berlebihan.

---

# Responsive Rules

Desktop

>=1200px

Laptop

992px

Tablet

768px

Mobile

480px

Setiap section WAJIB responsive.

---

# Folder Structure

WAJIB mempertahankan struktur berikut.

src/

assets/

components/

common/

layout/

ui/

sections/

hooks/

config/

services/

styles/

utils/

JANGAN membuat folder baru tanpa alasan.

---

# Component Rules

Gunakan Functional Component.

Gunakan reusable component.

Gunakan export default.

Jangan membuat component terlalu besar.

Jika component lebih dari ±250 baris, pertimbangkan untuk memecahnya menjadi beberapa component.

---

# SCSS Rules

Gunakan SCSS.

Jangan menggunakan inline CSS.

Gunakan class BEM.

Contoh

.hero

.hero__title

.hero__button

---

# Animation Rules

Gunakan Motion.

Animasi harus:

- Smooth
- Elegant
- Tidak terlalu cepat
- Tidak terlalu lambat

Default

Duration

0.6s

Spring

Stiffness

260

Damping

20

---

# Coding Style

Gunakan

const

arrow function bila sesuai

destructuring

template literal

clean code

Jangan membuat kode yang berulang.

---

# Hero Section Rules

Hero terdiri dari:

Left

- Greeting
- Name
- Job Title
- Description
- CTA Button

Right

- Animated Stack

Stack WAJIB:

- 3 Foto
- Bisa Drag
- Auto Play
- Smooth
- Responsive
- Foto belakang terlihat sebagian
- Posisi seimbang terhadap Hero

---

# Section Order

Urutan WAJIB seperti berikut.

1 Hero

2 About

3 Tech Stack

4 Skills

5 Experience

6 Projects

7 Contact

8 Footer

Jangan mengubah urutan.

---

# Development Workflow

Saat mengembangkan project WAJIB mengikuti urutan berikut.

Step 1

Membuat Component

↓

Step 2

Membuat Layout

↓

Step 3

Styling

↓

Step 4

Responsive

↓

Step 5

Animation

↓

Step 6

Optimization

Jangan mengerjakan semuanya sekaligus.

---

# AI Response Rules

Saat AI membantu project ini:

WAJIB:

✔ Memberikan penjelasan singkat.

✔ Menjelaskan file yang diubah.

✔ Memberikan code lengkap.

✔ Mengikuti struktur project.

✔ Mengikuti design system.

✔ Mempertahankan layout.

✔ Menjaga clean code.

JANGAN:

❌ Mengubah desain tanpa izin.

❌ Mengubah file lain yang tidak diminta.

❌ Memberikan potongan kode yang tidak lengkap.

❌ Mengubah struktur folder.

❌ Menghapus fitur yang sudah selesai.

---

# Debug Rules

Jika terjadi error:

1. Jelaskan penyebab.

2. Jelaskan file yang bermasalah.

3. Berikan solusi.

4. Berikan final code.

---

# Development Progress

Sebelum membuat fitur baru:

Pastikan fitur sebelumnya selesai.

Urutan:

Hero

↓

About

↓

Skills

↓

Experience

↓

Projects

↓

Contact

↓

Footer

---

# Final Goal

Hasil akhir harus memiliki kualitas:

✔ Premium

✔ Professional

✔ Recruiter Friendly

✔ ATS Friendly

✔ Modern

✔ Responsive

✔ Fast

✔ Clean

✔ Elegant

✔ Reusable

✔ Maintainable

✔ Tidak terlihat seperti template gratis.