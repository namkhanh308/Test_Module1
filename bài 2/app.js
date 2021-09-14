function FindIndex(index,arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === index){
            return i;
        }
    }
    return -1;
}
arr = [1,2,3,4,5];
let input = parseInt(prompt("Nhập vào số bạn cần tìm"))
let check = FindIndex(input,arr);
if(check === -1){
    console.log("phần tử không nằm trong mảng")
}
else{
    console.log(`Phần tử nằm ở vị trí thứ ${check} trong mảng `)
}