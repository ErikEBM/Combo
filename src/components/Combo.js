import React from "react";


class Combo extends React.Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    
    componentDidMount(){
        let ambito = this;

        fetch("http://192.168.0.17/~vimcemt/inventario/public/index.php/departamentos").then(function(response){
            
            return response.json().then(function(json){
                    
                    ambito.setState({
                        data: json
                    });
            });

        }).catch(function(err){
            console.log("error");
        });
    }

    render(){


        return(
                <div>
                    <select name="" id="">
                        
                        <option value="">seleccionar</option>
                        { this.state.data.map( (e, i) => {
                            return <option key={i + "key"}>{e.nombre}</option> 
                        } )}
                    
                    </select>
                </div>

        )
    }
}


export default Combo;