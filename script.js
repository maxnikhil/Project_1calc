function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function calculate() {
    try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
      document.getElementById("display").value = 'Error';
    }
  }
  
  // 🔑 Keyboard support
  document.addEventListener("keydown", function(event) {
    const key = event.key;
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];
  
    if (allowedKeys.includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      let display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });
  