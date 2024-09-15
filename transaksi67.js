const form = document.querySelector('.form')
let ErrorMassage = []



function subTotal(harga, barang) {
    const total = harga * barang
    return total
}

function cekDiskon(subtotal) {
    let diskon

    if (subtotal >= 250000) {
        diskon = 25;
    } else if (subtotal >= 200000) {
        diskon = 20;
    } else if (subtotal >= 150000) {
        diskon = 15;
    } else if (subtotal >= 100000) {
        diskon = 10;
    } else if (subtotal >= 5000) {
        diskon = 5;
    } else {
        diskon = 0;
    }
    return diskon
}

function nilaiDiskon(harga, diskon) {
    return harga * (diskon / 100)
}

function jumlahPembayaran(total, nilaiDis) {
    return total - nilaiDis
}


function validation(kodebarang, harga, jumlah, nama) {
    if (kodebarang == '') {
        ErrorMassage.push('Nama Anda harus diisi !')
    }
    if (harga == '') {
        ErrorMassage.push('Harga Tidak Boleh Nol !')
    }
    if (jumlah == '') {
        ErrorMassage.push('Jumlah Makanan Tidak Boleh Nol !')    
    }
    if (nama == '') {
        ErrorMassage.push('Alamat Anda Harus diisi!')
    }
}

form.addEventListener('submit', (event) => {
    let kodeBarang = document.getElementById('code').value;
    let harga = document.getElementById('price').value;
    let jumlahJual = document.getElementById('total').value;
    let namaBarang = document.getElementById('name').value;

    validation(kodeBarang, harga, jumlahJual, namaBarang)


    if (ErrorMassage.length < 1) {
        const total = subTotal(harga, jumlahJual)
        const diskon = cekDiskon(total)
        const nilaiDis = nilaiDiskon(total, diskon)
        const totalBayar = jumlahPembayaran(total, nilaiDis)

        document.getElementById('subtotal').value = `Rp ${total},-`;
        document.getElementById('discount').value = `${diskon}%`;
        document.getElementById('total_discount').value = `Rp ${nilaiDis},-`;
        document.getElementById('total_price').value = `Rp ${totalBayar}-`;
    } else {
        alert(ErrorMassage.join('\n'))
        ErrorMassage = []
    }
})
