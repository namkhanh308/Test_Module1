//b3
function timSoNguyenAm(char){
    let count = 0 ;
    for (let i = 0; i < char.length; i++) {
        if(char[i] === "u"||char[i] === "e"|| char[i] === "o"||char[i] === "a"||char[i] === "i"){
            count++
        }
    }
    if(count ===0){
        return false;
    }
    else {
        return  count;
    }
}
let char = prompt("Nhập vào chuỗi là: ")
console.log(timSoNguyenAm(char))