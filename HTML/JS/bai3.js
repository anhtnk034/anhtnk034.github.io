// Bán Hàng
const  price = document.querySelector("#mucgia"); // Biến lưu mức giá
const  tr = document.querySelectorAll("tr"); // Lấy tất cả các row
const  th = document.querySelectorAll(".money"); // Lấy tất cả các col "Thành Tiền"
const  money = document.querySelector("#money"); // Lấy ô tổng tiền
let Tong = 0; // Biến lưu tổng tiền
 // Lấy tất cả input có type "checkbox"
let ListCBox = document.querySelectorAll("input[type='checkbox']");
 // Lấy tất cả input có type "number"
let ListNum = document.querySelectorAll("input[type='number']");

// Set display cho row là "table-row"
tr.forEach(arrtr => {
    arrtr.style.display = "table-row";
})// arrtr là mảng mà hàm forEach duyệt và đưa ra là "table-row" 
// Lọc theo mức giá
// nếu số tiền trong mảng artr nhỏ hơn giá trị price or giá trị trong mảng là data-name="info" thì hiện ra danh sách lọc
// ngược lại cho ra none
price.addEventListener("change", function () {
    // Duyệt qua các "row"
    tr.forEach(arrtr  => {
        if (Number(arrtr.dataset.price) <= Number(price.value) || arrtr.dataset.name == "info" || arrtr.dataset.name == "Tong") {
            arrtr.style.display = "table-row";
        }else{arrtr.style.display = "none";}
    })
})
// Tính tiền mỗi sản phẩm với hàm duyệt forEach đến inpNum 
ListNum.forEach(inpNum =>{ //document.addEventListener để đính kèm một trình xử lý sự kiện vào tài liệu
    inpNum.addEventListener("change", function (){
        th.forEach(arrth =>{
// th được hàm forEach duyệt để đưa ra số tiền 
            if (inpNum.name == arrth.dataset.name){
                amount = Number(inpNum.value);
                // Lấy số lượng mỗi sản phẩm gán vào amount
                spice = Number(arrth.dataset.price);
                // Lấy số tiền mỗi sản phẩm gán vào spice
                arrth.innerHTML = amount*spice;
                // Tính tiền mỗi sản phẩm với số lượng được chọn
            }
        })
    })
})
// Set input "Number" mặc đinh là ẩn( khi nào nhấn nút checkbox mới hiện ra)
ListNum.forEach(inpNum =>{
    inpNum.disabled = true;
})
// Tổng tiền
Bill()
function Bill(){
    tr.forEach(arrtr => {
        // duyệt vào arrtr nếu style đưa ra là "table-row" thì tiếp tục được duyệt vào ListCBox 
        if (arrtr.style.display == "table-row"){
            ListCBox.forEach(inpCBox => {
                if (inpCBox.checked & inpCBox.name == arrtr .dataset.name) {
                    // nếu Checkbox được chọn và đúng tên của mảng arrtr thì sẽ được duyệt tiếp th ( tính tiền được đưa ra)
                    th.forEach(arrth=> {
                        if (inpCBox.name == arrtr.dataset.name & arrtr.dataset.name == arrth.dataset.name){
                            // Tổng tiền mỗi sản phẩm bằng số tiền được tính của mỗi ô cộng với Tổng đã tính
                            Tong += Number(arrth.innerHTML);
                            money.innerHTML = String(Tong);
                            // để show dữ liệu ra
                        }
                    })
                }else{money.innerHTML = Tong} 
            })
        }else{money.innerHTML = Tong}   
    })
    Tong = 0;
    setTimeout(Bill, 0) // set thời gian mỗi khi show Tổng tiền ra
}

// Click để disabled input
ListCBox.forEach(inpCBox =>
{// duyệt mảng ListCBox rồi dùng document.addEventListener để xử lý phương thức click
    inpCBox.addEventListener("click", function()
    {// khi click checkbox thì ListNum được duyệt
        ListNum.forEach(inpNum => 
        {
            if (inpCBox.name == inpNum.name)
            { // nếu vị trí của checkbox đúng với vị trí của Num thì
                th.forEach(arrth =>
                { // giá trị của mỗi ô sản phẩm được duyệt với mảng arrtr 
                    if(inpCBox.name == arrth.dataset.name)
                    { // nếu tên chechbox đúng với mảng arrtr trong tr 
                        if (inpCBox.checked)
                        {// nếu ô checkbox được chọn 
                            inpNum.disabled = false;
                            arrth.style.opacity = "1"; // và ô inpNum được hiệu hóa thì hiển thị ô Num
                        }else
                        {// ngược lại vô hiệu hóa thì ko hiển thị
                            inpNum.disabled = true;
                            arrth.style.opacity = "0";
                        } 
                    }
                })                 
            }
        })
    })
})