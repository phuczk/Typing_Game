const paragraphs = JSON.parse(localStorage.getItem('Array_context')) || ["hello world", "mistake", "have a good day", "beauty and the beats", "the man who laugh", "no pain no gain"];
hienThiBang();
    function hienThiBang() {
      var table = document.getElementById("myTable");
      // Xóa dữ liệu cũ trong bảng
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }

      // Hiển thị dữ liệu mới
      for (var i = 0; i < paragraphs.length; i++) {
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = paragraphs[i];
        cell3.innerHTML = '<button style="background-color: green;border:none;border-radius:10px; color: #FFF; height: 50px; width: 120px;" onclick="capNhat(' + i + ')">Update</button> <button style="background-color: red;border:none;border-radius:10px; color: #FFF; height: 50px; width: 120px;" onclick="xoa(' + i + ')">Xóa</button>';
      }
    }

    function capNhat(index) {
      var newValue = prompt("Nhập giá trị mới:");
      if (newValue !== null) {
        paragraphs.splice(index, 1, newValue);
        // Lưu trữ dữ liệu vào Local Storage
        localStorage.setItem('Array_context', JSON.stringify(paragraphs));
        hienThiBang();
      }
    }

    function xoa(index) {
      paragraphs.splice(index, 1);
      // Lưu trữ dữ liệu vào Local paragraphs
      localStorage.setItem('Array_context', JSON.stringify(paragraphs));
      hienThiBang();
    }

    function themPhanTu() {
      var newValue = prompt("Nhập giá trị mới:");
      if (newValue !== null) {
        paragraphs.push(newValue);
        // Lưu trữ dữ liệu vào Local Storage
        localStorage.setItem('Array_context', JSON.stringify(paragraphs));
        hienThiBang();
      }
    }