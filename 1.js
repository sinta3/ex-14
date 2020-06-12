function userName(name, product) {
    name = prompt('masukkan nama');
    product = prompt('masukkan produk');
    let result = `Terima kasih ${name} sudah membeli ${product} milik kami`;
    return result;
}

// tampilkan di console 
console.log(userName());
