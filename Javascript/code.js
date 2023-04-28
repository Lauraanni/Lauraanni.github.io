//Laura Ahonen//


function showMessage(){

    // Haetaan päivämäärä //
    let today = new Date();
    let day = `${today.getDate() < 10 ? "0" 
    : ""}${today.getDate()}`;
    let month = `${(today.getMonth() + 1) < 10 ? "0"
    : ""}${today.getMonth() + 1}`;
    let year = today.getFullYear();



    
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let checkbox = document.getElementById("important");
    
    
    

    // Tulostetaan päivämäärä, nimi ja viesti //
    document.getElementById("result").innerHTML += `${day}/${month}/${year} ` + "("+name+")" + "<br>" + "Viesti: " + message + "<br>";


    // Tekstin väri muuttuu punaiseksi, mikäli checkbox on valittuna //
    if(checkbox.checked){
        result.classList.add("important");
    }
  
}




