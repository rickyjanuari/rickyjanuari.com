---
title: "Cara Membuat Blog dengan Hexo dengan hosting Github Page"
cover: "../img/blog-hexo.png"
date: "12/01/2018"
category: "Tutorial"
tags:
    - Tutorial
---
Hallo, saya akan berbagi cara membuat Blog dengan Hexo dengan hosting Github Page.
ada yang udah pernah dengan tetang hexo?

Hexo adalah framework blog sederhana  yang didukung oleh Node.js. Web statis generator ini sangat cepat dan hanya membutuhkan waktu beberapa detik untuk membangun website yang lengkap.

Hexo mendukung semua fitur GitHub-flavored Markdown dan sebagian besar plugin Octopress. Salah satu keuntungan utama dari Hexo adalah memungkinkan Anda untuk mentransfer blog atau situs ke web host dengan satu perintah.

Pastikan kamu sudah Install Git.

```	
sudo apt install git-core
```

Install NodeJS

Jika sudah terinstall Git dan NodeJS, sekarang kita install Hexo dengan perintah berikut.

```	
npm install -g hexo-cli
```

Setelah Hexo terinstal , jalankan perintah berikut untuk menginisialisasi Hexo di target

```	
hexo init 
cd <folder>
npm install
```

Setelah menjalankan perintah diatas, maka folder tadi akan terlihat seperti ini.

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

Edit file configurasi di _config.yml

Di dalam file _config.yml kamu harus menghubungkan ke repository git kamu agar mudah di deploy oleh Hexo.

Pertama, install terlebih dahulu Plugin hexo-deployer-plugin

```
npm install hexo-deployer-git --save
```

Lalu masukan configurasi berikut kedalam file _config.yml
```
deploy:
  type: git
  repo: &lt;repository url&gt;
  branch: [branch]
  message: [message]
```

Untuk membuat artikel.

```
hexo new post <title>
```

Generate terlebih dahulu website Hexo-nya.

```
hexo generate
```

Lalu deploy ke github.

```
hexo deploy
```

Atau bisa juga menjalankan di server lokal kita dengan perintah berikut.

```
hexo server
```

Lalu buka http://localhost:4000.

Selesai, selamat mencoba dan semoga bermanfaat.

Sumber :

Hexo.io
