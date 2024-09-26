


function kolorea(){
    let randomNumber = Math.floor(Math.random() * 16777215);
    return "#" + randomNumber.toString(16).padStart(6, '0');
}


function addColorDiv() {
    let container = document.getElementById('container');
    let newDiv = document.createElement('div'); 
    let randomKolorea = kolorea();
  
    newDiv.classList.add('color-box');
    newDiv.style.backgroundColor = randomKolorea; 
    newDiv.textContent = randomKolorea;
  

    container.appendChild(newDiv);
  }
 
  document.getElementById('addColorBtn').addEventListener('click', addColorDiv);