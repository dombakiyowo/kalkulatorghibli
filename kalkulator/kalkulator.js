const result = document.getElementById('result'); // hasil dengan id = result

function insertSymbol(symbol) {
  //fungsi simbol
  result.value += symbol;
}

function clearResult() {
  // fungsi menghapus
  result.value = '';
}

function backspace() {
  // menghapus nilai karakter pertama hingga karakter terakhir
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value); // fungsi eval utk menghitung nilai matematika
  } catch {
    result.value = 'Error'; // apabila terjadi kesalahan, hasil error
  }
}
