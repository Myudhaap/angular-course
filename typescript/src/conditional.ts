enum Position {
    "Director",
    "Employee"
}

type Employee = {
    id: string
    name: string
    salary: number
    position?: Position
}

const john: Employee = {
    id: "1",
    name: "John",
    salary: 5000000
}

if(john.salary > 5000000){
    john.position = Position.Director
    console.log(Position[john.position])
}else{
    john.position = Position.Employee
    console.log(Position[john.position])
}


const choice: number = 1;

// Switch case
switch (choice){
    case 1:
        console.log("This is number one")
        break;
    default:
        console.log("Not a number")
        break;
}

/*
*
* Problem
Pada tugas ini kamu diminta untuk membuat game sederhana. Untuk memulai game ini diperlukan 2 variabel yaitu nama dan peran. Kedua Variabel ini tidak boleh kosong harus ada nilainya, untuk peran sendiri terdapat 2 jenis peran yaitu Superhero & Monster. Untuk selain 2 peran tersebut kalian harus memberikan peringatan. Tugas kalian adalah untuk mengecek masing masing variabel nama dan peran tersebut.

Kriteria
Variabel Nama dan Peran dapat diisi apa saja
Buatlah if - else percabangan untuk mengecek Nama dan Peran

Output
// Jika Nama & Peran Kosong
"Nama dan Peran Harus Di Isi"

// Jika Nama Diisi & Peran Kosong
"Peran Harus Di Isi"

// Jika Nama Diisi & Peran Diisi Superhero
"Selamat Datang Superhero Saitama, Kalahkan Semua Monster Di Muka Bumi"

// Jika Nama Diisi & Peran Diisi Monster
"Selamat Datang Monster Saitama, Hancurkan Semua Superhero Yang Ada"

// Jika Nama Diisi & Peran Diisi Bukan Superhero atau Monster
"Selamat Datang Saitama, Pilih Peranmu Untuk Melanjutkan Game Ini"

*
*  */

let namePlayer: string = "Yudha";
let rolePlayer: string = "Monster";

if(namePlayer && rolePlayer){
    if(rolePlayer == "Superhero"){
        console.log(`Selamat Datang Superhero ${namePlayer}, Kalahkan Semua Monster Di Muka Bumi`)
    }else if(rolePlayer == "Monster"){
        console.log(`Selamat Datang Monster ${namePlayer}, Hancurkan Semua Superhero Yang Ada`)
    }else{
        console.log(`Selamat Datang ${namePlayer}, Pilih Peranmu Untuk Melanjutkan Game Ini`)
    }
}else if(namePlayer && rolePlayer == ""){
    console.log("Peran Harus Di Isi")
}else{
    console.log("Nama dan Peran Harus Di Isi")
}