import React, { Component } from 'react';
import MainFace from '../FaceMultiForm/MainFace';
import Finger from '../FingerMultiForm.js/Finger';

export class DynamicComp extends Component {
    state = {
        jointArray :[],
        comp: ''
    }

    deleteComp = (index)=>{
        const copyArray = Object.assign([], this.state.jointArray);
        copyArray.splice(index,1);
        this.setState({
            jointArray: copyArray
        })
    }

    addComp = (val) =>{
        const copyArray = Object.assign([], this.state.jointArray);
        copyArray.push({
            comp:val
        })
        this.setState({
            jointArray:copyArray
        })
    }



    render() {
        return (
            <div>
                
                <ul>
                    {
                        this.state.jointArray.map((arr, index) => {
                            return (
                                <div>
                                    {arr.comp}
                                    <button onClick={()=>this.deleteComp(index)}>Delete</button>
                                    <br/>
                                    <hr/>
                                </div>
                       
                        )
                    })
                    }
                </ul>
                <button onClick={()=>this.addComp(<MainFace/>)}>Face</button>
                 <button onClick={()=>this.addComp(<Finger/>)}>Finger</button>
            </div>
        )
    }
}

export default DynamicComp;
