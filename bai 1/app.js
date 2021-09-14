//b1
function ptbac1(a, b) {
    if (a == 0) {
        alert("Phương trình vô nghiệm");
    } else if (b == 0) {
        alert("Phương trình có vô số nghiệm");
    } else {
        x = -b / a;
        alert("Kết quả x là: " + x);
    }
}
ptbac1(5, 8);