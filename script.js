document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // ป้องกันการ submit ฟอร์ม
  
      const usernameInput = document.getElementById('fullname');
      const passwordInput = document.getElementById('password');
  
      const usernameValue = usernameInput.value.trim();
      const passwordValue = passwordInput.value.trim();
  
      // เงื่อนไขการ validate
      const isUsernameValid = usernameValue !== '' && !usernameValue.includes(' ');
      const isUsernameLengthValid = usernameValue.replace(/\s/g, '').length > 3 && !(/^\d/.test(usernameValue));
  
      const isPasswordValid = passwordValue !== '';
      const isPasswordLengthValid = passwordValue.length > 4;
      const isPasswordStrong = /^(?=.*[A-Za-z])(?=.*\d).{4,}$/.test(passwordValue); // ตรวจสอบว่ามีตัวเลขและตัวอักษรรวมกันหรือไม่
  
      // ตรวจสอบและทำการแสดงผลลัพธ์
      if (isUsernameValid && isUsernameLengthValid && isPasswordValid && isPasswordLengthValid && isPasswordStrong) {
        // ถ้า validate ผ่าน
        window.location.href = 'https://www.example.com/'; // ไปยัง URL ที่กำหนด
        // หรือสามารถทำการ login ตรวจสอบตามเงื่อนไขและแจ้ง login successful ได้
      } else {
        // ถ้า validate ไม่ผ่าน
        usernameInput.style.borderColor = 'red'; // เปลี่ยนสีเส้นขอบของ input เป็นสีแดง
        passwordInput.style.borderColor = 'red'; // เปลี่ยนสีเส้นขอบของ input เป็นสีแดง
        // แสดงข้อความหรือทำอย่างอื่นตามที่ต้องการ
      }
    });
  });
  