// Fungsi untuk menghitung deret Fibonacci
function hitungFibonacci() {
    const inputCount = document.getElementById("fibonacciCount");
    const resultElement = document.getElementById("fibonacciResult");

    const count = parseInt(inputCount.value);

    if (isNaN(count) || count < 1) {
        resultElement.textContent = "Masukkan jumlah angka yang valid (angka positif).";
        return;
    }

    let fibonacciSeries = [0, 1];

    for (let i = 2; i < count; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    resultElement.textContent = "Deret Fibonacci: " + fibonacciSeries.join(", ");
}

// Fungsi untuk menghitung volume kubus
function hitungVolumeKubus() {
    const inputSisi = document.getElementById("inputSisi");
    const resultElement = document.getElementById("hasilPerhitungan");

    const sisi = parseFloat(inputSisi.value);

    if (isNaN(sisi) || sisi <= 0) {
        resultElement.textContent = "Masukkan panjang sisi yang valid (angka positif).";
        return;
    }

    const volume = sisi * sisi * sisi;

    resultElement.textContent = "Volume Kubus: " + volume.toFixed(2);
}

// Event listener untuk tombol hitung Fibonacci
const calculateFibonacciButton = document.getElementById("calculateFibonacci");
calculateFibonacciButton.addEventListener("click", hitungFibonacci);

// Event listener untuk tombol hitung volume kubus
const calculateVolumeKubusButton = document.getElementById("calculateVolumeKubus");
calculateVolumeKubusButton.addEventListener("click", hitungVolumeKubus);
