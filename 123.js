const mahasiswa = {
    nama: "Muhammad Sheva Adyaksa Rohendi",
    kelas: "TI 22 H",
    NIM: 20220040110,
};

const nilai = {
    imk: 100,
    rpl: 200,
};

console.log ("nama: ", mahasiswa.nama);
console.log ("kelas: ", mahasiswa.kelas);
console.log ("NIM: ", mahasiswa.NIM);

console.log ("\nNilai");
console.log ("Interasksi Manusia dan Komputer", nilai.imk);
console.log ("Rekayasa Perangkat Lunak", nilai.rpl);

const rataRata = (nilai.imk + nilai.rpl) / 2;
console.log("Rata-rata Nilai", rataRata)