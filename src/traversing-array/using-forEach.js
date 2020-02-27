// menggunakan IIFE
(() => {
   // inisialisasi 2 variable bernama names dan cats
   // masing2 variable merujuk ke array yang berisikan kumpulan kalimat (string)
   const names = ["fahmi", "budi"];
   const cats = ["oyen","blacky","juned"];
   
   // menggunakan spread operator untuk menggabungkan 2 array
   const combined = [...names, ...cats];
   
   // memungkinkan kita menentukan apa yang kita inginkan terjadi pada setiap item dalam array, 
   // tetapi menyembunyikan bagaimana array bergerak (traverse).
   combined.forEach(name => console.log(name))
})()