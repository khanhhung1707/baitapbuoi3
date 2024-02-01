//bai1
// B1: lương ngày : 100000
//     nhập vào số ngày làm, lấy value 
// B2: lương tổng = số ngày làm * lương ngày 
// B3: in ra màn hình tổng tiền lương
function bai1(){
    var luongNgay = 100000;
    var soNgayLam = +document.getElementById("dayWork").value;
    var luongTong = soNgayLam * luongNgay;
    luongTong = luongTong.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById("bai1").innerHTML = "Tổng số tiền nhận được : " + luongTong ;
    document.getElementById("bai1").style.cssText="background: gray; color: white; padding:20px;margin-top:20px;"
}


//bai2
// B1: nhập vào 5 số thực, lấy value
// B2: trung bình = tổng 5 số thực chia 5
// B3: in ra màn hình giá trị trung bình 
function bai2(){
    var a = +document.getElementById("number1").value;
    var b = +document.getElementById("number2").value;
    var c = +document.getElementById("number3").value;
    var d = +document.getElementById("number4").value;
    var e = +document.getElementById("number5").value;
    var trungBinh = (a+b+c+d+e)/5;
    document.getElementById("bai2").innerHTML = "Giá trị trung bình : " + trungBinh ;
    document.getElementById("bai2").style.cssText="background: gray; color: white; padding:20px;margin-top:20px;"
}

//bai3
// B1: 1 đô bằng 23500 vnd 
//     nhập vào số đô muốn đổi 
// B2: số tiền sau quy đổi = số đô muốn đổi * 23500
// B3: in ra màn hình số tiền sau quy đổi
function bai3(){
    var giaQuydoi = 23500;
    var soTienCanDoi = document.getElementById("moneyChange").value;
    var tongTien = giaQuydoi*soTienCanDoi;
    tongTien = tongTien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById("bai3").innerHTML = "Tổng tiền nhận được : " + tongTien ;
    document.getElementById("bai3").style.cssText="background: gray; color: white; padding:20px;margin-top:20px;"
}


//bai4
// B1: nhập chiều dài, chiều rộng, lấy value 
// B2: diện tích = dài*rộng
//     chu vi = (dài+rộng)/2
// B3: in ra màn hình kết quả của diện tích và chu vi
function bai4(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;
    document.getElementById("bai4").innerHTML = "Diện tích : " + dienTich + "<br>" + "Chu vi : " + chuVi;
    document.getElementById("bai4").style.cssText="background: gray; color: white; padding:20px;margin-top:20px;"
}


//bai5
// B1: nhập vào số có 2 chữ số,lấy value
// B2: hangChuc = soTuNhien / 10;lấy value
//     hangDonVi = soTuNhien % 10;lấy value
//     tổng 2 số bằng hàng chục + hàng đơn vị
// B3: in kết quả ra màn hình
function bai5(){
    var soTuNhien = document.getElementById("numberTwo").value;
    var hangChuc = Math.floor(soTuNhien / 10);
    var hangDonVi = soTuNhien % 10;
    var tongKySo = hangChuc + hangDonVi;
    document.getElementById("bai5").innerHTML = "tổng là  : " + hangChuc + "+" + hangDonVi + "=" + tongKySo;
    document.getElementById("bai5").style.cssText="background: gray; color: white; padding:20px;margin-top:20px;"
}