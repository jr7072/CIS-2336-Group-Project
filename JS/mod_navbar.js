const navBar = () => {

  return (
    `
      <img src="../Images/4h.png" id="img1">
      <ul>
          <li><a href="../HTML/Home.html" target="_blank">Home</a></li>
          <li><a href="../HTML/Car1.html" target="_blank">Car 1</a></li>
          <li><a href="../HTML/Car2.html" target="_blank">Car 2</a></li>
          <li><a href="../HTML/Car3.html" target="_blank">Car 3</a></li>
          <li><a href="../HTML/Misc_accessories.html" target="_blank">Accessories</a></li>
          <li><a href="../HTML/Services.html" target="_blank">Packages</a></li>
          <li><a href="../HTML/Financials.html" target="_blank">Finances</a></li>
          <li><a href="../HTML/About_us.html" target="_blank">About us</a></li>
      </ul> 
    `
  )
}

document.getElementById("nav-bar").innerHTML = navBar();