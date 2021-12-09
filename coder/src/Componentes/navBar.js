import React from "react";


//OBJETO Con Muchas Funciones


const CardWidget = () => (

    <img src="https://www.kindpng.com/picc/m/177-1771804_download-shopping-cart-icon-icono-carro-de-compras.png"/>

)



function NavBar (){

    return (

        <nav className = "navContainer">   
            <div>LOGO</div>
            <div>
                <ol className="listContainer">
                    <li>HOME</li>
                    <li>NOSOTROS</li>
                    <li>PRODUCTOS</li>
                    <li>CONTACTO</li> 
                    
                </ol>
            </div>
            <CardWidget></CardWidget>

        </nav>

    )

}

export default NavBar;