// Điều kiện của form khi submit
// Lấy tất cả nút Input
let ListInput = document.querySelectorAll("input");
let listMessError = document.querySelectorAll(".Error")// List lưu các phương thức khi bị lỗi
function KTForm() {
    listMessError.forEach(span => {
        span.innerHTML = "";// duyệt vào listMessError 
    })
    // khai báo các biến để lưu phương thức
    let note = document.querySelector("#note");// gọi ghi chú
    let isCheckedSex = 0;// giới tính
    let isCheckedHobby = 0;// sở thích
    let checkForm = false;
    let checkRadio = false;
    let checkCBox = false;
    // các input được duyệt với tên 
    ListInput.forEach(Nhap => {
        Nhap.style.background = "#f1f1f1";
        // Các điều kiện của input type text
        if (Nhap.type == "text") {
            let otherChecked = document.querySelector("#other-checked");
            if (Nhap.value.length == 0 & Nhap.name != "hobby") {// nếu các ô input không được nhập và khác với sở thích 
                Nhap.style.background = "yellow";
                checkForm = false;// background được tô màu vàng và báo lỗi
                listMessError.forEach(span => {// duyệt tới thẻ span
                    if (Nhap.name == span.dataset.name){
                        span.innerHTML = "Vui lòng nhập thông tin!"
                    }
                })
            }else if (Nhap.value.length > 0 & Nhap.name != "hobby") {
                checkForm = true;
            }
            // phương thức xử lý "invalid"
            Nhap.addEventListener("invalid", function () {
                Nhap.style.background = "yellow";
                checkForm = false;
                listMessError.forEach(span => {
                    if (Nhap.name == span.dataset.name && Nhap.name == "mssv"){
                        span.innerHTML = "Mã Sinh Viên Gồm 10 Chữ Số Từ 1-9!"
                    }
                    if (Nhap.name == span.dataset.name && Nhap.name == "fullname"){
                        span.innerHTML = "Họ tên không được chứa chữ số!"
                    }
                    if (Nhap.name == span.dataset.name && Nhap.name == "mail"){
                        span.innerHTML = "Mail phải đúng định dạng và không chứa ký tự đặc biệt!"
                    }
                })
            })
          }
          // Điều kiện của input type radio
          if (Nhap.type == "radio") {
              let gioitinh = document.querySelector("#gioitinh");

              if (Nhap.checked) { // giới tính được chọn 
                  isCheckedSex += 1;
              }

              listMessError.forEach(span => {
                  if (Nhap.name == span.dataset.name){
                      if (isCheckedSex == 0){
                          checkRadio = false;
                          gioitinh.style.background = "yellow";
                          span.innerHTML = "Vui lòng chọn 1 trong 2 giới tinh !!!" 
                      }
                      else{
                        gioitinh.style.background = "#f1f1f1";
                          span.innerHTML = "";
                          checkRadio = true;
                      }
                  }
              })
          }

          // Điều kiện của input type checkbox
          if (Nhap.type == "checkbox") {
              let hobbies = document.querySelector("#hobbies");
              if (Nhap.checked) {
                  isCheckedHobby += 1;
              }

              listMessError.forEach(span => {
                  if (Nhap.name == span.dataset.name){
                      if (isCheckedHobby == 0) {
                          checkCBox = false;
                          hobbies.style.background = "yellow";
                          
                          
                          span.innerHTML = "Vui lòng  chọn ít nhất 1 sở thích!" 
                      }
                      else {
                          hobbies.style.background = "#f1f1f1";
                          span.innerHTML = "";
                          checkCBox = true;
                      }
                  }
              })
              
          }
      })
      // Điều kiện ghi chú không quá 200 ký tự
      if (note.value.length > 200) {
          alert("Ghi chú không quá 200 ký tự!")
          checkForm = false;
      }
      // Thông báo Mã số SV không được để trống
      var i = document.querySelector("#mssv").value;
      if(i.length==0){
        alert('Mã số SV không đê trống!!!')
        return false;
      }
      //Thông báo Họ và tên SV không được để trống
      var i = document.querySelector("#fullname").value;
      if(i.length==0){
        alert('Họ và tên SV không đê trống!!!')
        return false;
      }
      
      // Kiểm tra lần cuối xem thông tin đã hợp lên hay không
      if (checkForm == checkCBox && checkForm == checkRadio && checkForm == true){
          return true;
      }
      else{
          return false;
      }
  }
  // thêm thuộc tính autocomplete="off" cho các thẻ input
  ListInput.forEach(obj => {
      obj.autocomplete = "off";
  })
  // Điều kiện sở thích "Khác" khi được checked
  let otherHobby = document.querySelector("#other-hobby");
  let otherChecked = document.querySelector("#other-checked");
  otherChecked.style.display = "none";
  otherHobby.addEventListener("click", function () {
      if (otherHobby.checked) {
          otherChecked.style.display = "block";
      } else {
          otherChecked.style.display = "none";
      }
  })