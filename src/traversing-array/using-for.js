// menggunakan IIFE
(() => {
   // inisialisasi 2 variable bernama names dan cats
   // masing2 variable merujuk ke array yang berisikan kumpulan kalimat (string)
   const names = ["fahmi", "budi"];
   const cats = ["oyen","blacky","juned"];
   
   // menggunakan spread operator untuk menggabungkan 2 array
   const combined = [...names, ...cats];
   let counter = 0;


   for(counter; counter < combined.length; counter += 1) {
      console.log(combined[counter]);
   }
})()