let a = +prompt("Birinci ededi daxil edin")
let b = +prompt("Ikinci ededi daxil edin")
let c = +prompt("Ucuncu ededi daxil edin")

if (a>b && a>c) {
    console.log(a)
} else if (c>a && c>b){
    console.log(c)
}
else {
    console.log(b)
}