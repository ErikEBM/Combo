import React from "react";

        const desabilitado = {
                backgroundColor: 'lightgrey',
                color: '#a1a2a2',
                
            }

const Combo = (props)  =>  {
   
        


         let desabilitar = (props.data.length === 0) ? desabilitado : {};

        

        return (
                <div>
                    <select name="" id="" style={desabilitar}>
                        
                        <option value="">seleccionar</option>
                        { props.data.map( (e, i) => {

                            return <option key={i + "key"}>{e.nombre}</option> 
                        } )}
                    
                    </select>
                </div>

        )
    
}

Combo.defaultProps = {
    data : []
}

export default Combo;