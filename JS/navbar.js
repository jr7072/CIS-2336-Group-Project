const navBar = () => {

  return (
    `
      <img src="../Images/4h.png" id="img1">
      <ul>
          <li><a href="./Home.html">Home</a></li>
          <li><a href="./Car1.html">Car 1</a></li>
          <li><a href="./Car2.html">Car 2</a></li>
          <li><a href="./Car3.html">Car 3</a></li>
          <li><a href="./Misc_accessories.html">Accessories</a></li>
          <li><a href="./Services.html">Packages</a></li>
          <li><a href="./Financials.html">Finances</a></li>
          <li><a href="./About_us.html">About us</a></li>
      </ul> 
    `
  )
}

document.getElementById("nav-bar").innerHTML = navBar();