# ByteCraft Studio

Landing page statis berbahasa Indonesia untuk konsep bisnis jasa pembuatan website. Proyek ini menggunakan HTML, Tailwind CSS 3, dan JavaScript dari template Inazuma; tidak memakai backend atau dependensi runtime.

## Menjalankan secara lokal

```sh
npm install
npm run build
npm start
```

Buka `http://localhost:8000`. Untuk mengedit utility Tailwind, ubah `src/css/tailwind.css` atau `index.html`, lalu jalankan kembali `npm run build`. Gaya khusus ByteCraft berada di `assets/css/bytecraft.css`.

## Mengatur kontak

Sebelum publikasi, isi nilai `whatsapp` dengan nomor berkode negara tanpa tanda plus (contoh format `62812...`) dan `email` dengan alamat yang sudah disiapkan pada `BYTECRAFT_CONTACT` di `assets/js/bytecraft.js`. Jika kosong, tautan kontak menampilkan status perlu konfigurasi dan tidak berpura-pura mengirim pesan.

## Publikasi di GitHub Pages

Situs ini statis dan menggunakan path relatif (`./assets/...`), sehingga aset tetap bekerja untuk project site di `https://akun.github.io/nama-repositori/`. Jalankan `npm run build`, commit perubahan, lalu di repository GitHub buka **Settings → Pages** dan pilih **Deploy from a branch**, branch `main` (atau branch utama repository), folder `/ (root)`. Tidak dibutuhkan server atau rahasia GitHub.

Harga dan tiga proyek portfolio pada halaman adalah materi konsep fiktif untuk tugas akademik, bukan penawaran atau klien nyata.
