function sort() {
    var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
    console.log("Sebelumnya : ", angka.toString())
    angka = angka.sort()
    console.log("Ascending : ", angka.toString())
    angka = angka.reverse()
    console.log("Descending : ", angka.toString())
}

sort()