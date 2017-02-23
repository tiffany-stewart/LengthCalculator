var print = function(msg) {
  document.getElementById('output').innerHTML = "Length: " + msg;
}

document.getElementById('btn').onclick = function(event) {
  print(document.getElementById('str').value.length)
}
