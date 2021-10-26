// * =======================================================
// *                       KONSOL
// * =======================================================
// * Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.
console.log("Hello JavaScript");
console.log("Javascript javadan daha kolay bir dildir..");
console.error("bu bir hatadir");
console.warn("bu bir uyaridir");

//alert("Dikkat et Mucahit abi..");// ? Ekrana pop-up mesaj çıkarır.

// * =======================================================
// *                 DEĞİŞKEN TANIMLAMA
// * =======================================================
//************************ VAR ****************************
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi=3.14;
console.log(3.14);
console.log(typeof pi)//number

pi = "3";
console.log(pi);
console.log(typeof pi)//string


pi = true;
console.log(pi);
console.log(typeof pi);//Boolean


isim = "Mucahit";
console.log(isim);
console.log(typeof isim);//string


var gel;
console.log(gel);
console.log(typeof gel)//undefined

//************************ CONST ****************************
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

const piSayisi=3.14;
console.log(piSayisi);
//piSayisi=3;//deger desgistirilemez
//************************ LET ****************************
// ? Eğerki değişkenimİzin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.
let fiyat;
console.log(fiyat);
fiyat=5.5;
console.log(fiyat);
console.log(typeof fiyat);
//TODO String tanımlamak için 3 farklı karakter kullanılabilir.
let isim1 = "mucahit";
console.log(isim1)
let isim2 = 'refik';
console.log(isim2);
let isim3 = `sefik`;
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);//object
// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================





