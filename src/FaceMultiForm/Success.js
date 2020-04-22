import React, { Component } from 'react';


export class Success extends Component {
   

    render() {
        // const {values: {firstName,lastName,email, occupation,city,bio } } = this.props;
        return (
            
               <div>
                    <h1>Success</h1>           
                        <h3>Thank You for Your Submission</h3>
                        <p>You will get an email with further 
                            instructions</p>
                   </div>
                
        )
    }
}


export default Success;
