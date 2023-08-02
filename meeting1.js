// let Inputan = prompt ("Masukkan nilai");
// if(angka < 0){
//     document.write("Negatif")
// }else if(angka)

// let sumbuX = prompt ("Masukkan kondisi sumbu x : ");
// let sumbuY = prompt ("Masukkan kondisi sumbu Y : ");
// if(sumbuX > 0 && sumbuY > 0){
//     document.write("Player di kanan atas")
// }else if(sumbuX < 0 && sumbuY < 0){
//     document.write("Player di kiri bawah")
// }else if(sumbuX > 0 && sumbuY < 0){
//     document.write("Player di kanan bawah")
// }else if(sumbuX < 0 && sumbuY > 0){
//     document.write("Player di kiri atas")
// }

// for(let i=1; i <= 20; i++){
//     document.write("I'm Steve <br>");
// }


// for(let i=1; i <= 20; i++){
//     console.log(i);
// }

// for(let i=1; i <= 20; i++){
//     console.log(i * 5);
// }

// for(let i=1; i <= 5; i++){
//     console.log(i * 2);
// }

// for(let i=0; i <= 10; i++){
//     console.log(i += 1);
// }

// let angka1 = prompt ("Masukkan angka : ");
// let angka2 = prompt ("Masukkan angka ke dua : ")

// for(let i = angka1; i<angka2; i++){
//     document.write(i + "<br>")
// }

// let nilai =[2,4,6,8,10,12]
// const dadu = (kartu)=>{

//     for(let i=0; i<=kartu; i++){
//         let dadu = Math.floor(Math.random() *6 + 1);
        
//         switch (dadu) {
//             case 1:
//                 console.log(`Silahkan ambil ${nilai[0]}`)
//                 break;
//             case 2:
//                 console.log(`Silahkan ambil ${nilai[1]}`)
//                 break;
//             case 3:
//                 console.log(`Silahkan ambil ${nilai[2]}`)
//                 break;
//             case 4:
//                 console.log(`Silahkan ambil ${nilai[3]}`)
//                 break;
//             case 5:
//                 console.log(`Silahkan ambil ${nilai[4]}`)
//                 break;
//             case 6:
//                 console.log(`Silahkan ambil ${nilai[5]}`)
//                 break;
//                 default:
//                 break;
//         }
// }
// }
// dadu(parseInt(prompt("masukkan pengulangan")))

// let arr = ['Orek', 'Opor', 'Balado', 'Nasi'];

// for(let i=0; i<arr.length; i++){
    // }
    //     console.log(arr[i])
    
    // arr.forEach((food) =>{
        //     console.log(food)
// });

// arr.map((data) =>{
//     console.log(data)
// });

// arr.push('Indomie telor');
// console.log(arr)

// let perusahaan = ['Toyota', 'Honda', 'BMW', 'Ford', 'Porsche', 'Mustang', 'Tesla'];

// perusahaan.forEach((kantor) => {
//     console.log(kantor)
// });

// perusahaan.push('Mitsubibi');
// console.log(perusahaan)

// perusahaan.shift()
// console.log(perusahaan)

// perusahaan.unshift('Rubicon');
// console.log(perusahaan)

// perusahaan.splice(1,2);
// console.log(perusahaan)

var mainGame = [2, 2, 3, 3, 1, 4, 5];
var totalMain = 0;
var mainLebih = 0;

for (i=0; i < mainGame.length; i++){
    totalMain+= mainGame[i];

    if (mainGame[i] > 2){
        mainLebih++
    }
}

console.log(`Total jam bermain  : ${totalMain} jam`);
console.log(`Total hari main lebih dari 2 jam : ${mainLebih} hari` );
