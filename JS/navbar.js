const navBar = () => {

  return (
    `
      <img src="../Images/4h.png" id="img1">
      <ul>
          <li><a href="./Home.html">Home</a></li>
          <li><a href="#">Pagani</a></li>
          <li><a href="#">BMW I8</a></li>
          <li><a href="#">Mclaren</a></li>
          <li><a href="./Misc_accessories.html">Accessories</a></li>
          <li><a href="./Services.html">Packages</a></li>
          <li><a href="./Financials.html">Finances</a></li>
          <li><a href="./About_us.html">About us</a></li>
      </ul> 
    `
  )
}

document.getElementById("nav-bar").innerHTML = navBar();