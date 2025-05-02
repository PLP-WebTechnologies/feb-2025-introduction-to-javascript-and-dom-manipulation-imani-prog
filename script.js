// Change text content dynamically
function changeText() {
    document.getElementById("main-heading").textContent = "JavaScript is Awesome!";
  }
  
  // Modify CSS styles dynamically
  function changeStyle() {
    const desc = document.getElementById("description");
    desc.style.color = "blue";
    desc.style.fontSize = "1.5em";
    desc.style.fontWeight = "bold";
  }
  
  // Add or remove an element
  function toggleElement() {
    const existing = document.getElementById("new-item");
  
    if (existing) {
      existing.remove(); // remove if it already exists
    } else {
      const newPara = document.createElement("p");
      newPara.textContent = "This element was added with JavaScript!";
      newPara.id = "new-item";
      document.body.appendChild(newPara);
    }
  }
  