import React from "react";
import Combo from "./Combo";
import {CONFIG} from "./Constantes";

class ComboContainer extends React.Component {
    
     constructor(){
        super()
        this.state = {
            data : []
        }
    }

     componentDidMount(){
        let ambito = this;

        if(this.props.uri !== "" ){

            console.log(CONFIG.URL + this.props.uri);

        fetch("http://192.168.0.17/~vimcemt/inventario/public/index.php/"+ this.props.uri).then(function(response){
            
            return response.json().then(function(json){
                    
                    ambito.setState({
                        data: json
                    });
            });

        }).catch(function(err){
            console.log("error");
        });

         } 
    }

    
    
    render(){
        return(
           <Combo data={this.state.data}/> 
        )
    }
}

ComboContainer.defaultProps = {
    uri : ""
}

export default ComboContainer;