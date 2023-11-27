import React from "react";
import NavbarComponent from "../components/NavbarComponent"

const Layouts = ({children}) =>{
    return(
        <React.Fragment>
            <NavbarComponent/>
            <div className="container md:min-h-[50rem] mx-auto px-2">
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}

export default Layouts;