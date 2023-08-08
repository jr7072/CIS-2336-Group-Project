const navBar = () => {
  // <img src="../Images/4h.png" id="img1">

  return (
    `
      <ul>
          <li><a href="./Home.html">Home</a></li>
          <li><a href="../HTML/p1mclaren.html">P1 Mclaren</a></li>
          <li><a href="../HTML/Pagani_Huayra.html">Pagani Huayra</a></li>
          <li><a href="../HTML/bmw_i8.html">Bmw i8</a></li>
          <li><a href="./Misc_accessories.html">Products</a></li>
          <li><a href="./Services.html">Packages</a></li>
          <li><a href="./Financials.html">Finances</a></li>
          <li><a href="./About_us.html">About us</a></li>
      </ul> 
    `
  )
}

document.getElementById("nav-bar").innerHTML = navBar();