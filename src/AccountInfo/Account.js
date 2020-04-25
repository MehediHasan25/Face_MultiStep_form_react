import React, { Component } from 'react'

export class Account extends Component {
    state={
        accountNumber:'',
        product:"",
        accountType:''

    }

    onChange = e =>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e =>{
        e.preventDefault();
        const { product, accountType} = this.state;
        const obj ={
            
            product,
            accountType
        }
        localStorage.setItem("accountInfo", JSON.stringify(obj));
        
        this.setState({
         
            accountType:'',
            product:''
        })
        if(accountType === 'Joint'){
            this.props.history.push('/dynamic-comp');
        }else{
            this.props.history.push('/face-account');
        }
    }

    render() {
        
        return (
            <div className="col-sm-6">
            <div className="col d-flex justify-content-center" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <div className="col">
                    <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Account Information</h3>
                    <form   onSubmit={this.onSubmit}>
                       

                         {/* Product and Service */}
                         <div className='form-group'>
                    <label htmlFor="">Product and Service</label>
                    <select
                      className='custom-select'
                      value={this.state.product}
                      onChange={this.onChange}
                      name="product"
                    >
                      <option value='' disabled>--Select--</option>
                      <option value='Current Account'>Current Account</option>
                      <option value='Savings Account'>Savings Account</option>
                      <option value='Credit Account'>Credit Accounts</option>
                      <option value='Debit Card'>Debit Card</option>
                      <option value='Credit Card'>Credit Card</option>
                    </select>
                  </div>
                        {/* Account Type */}
                        <div className='form-group'>
                    <label htmlFor="">Account Type</label>
                    <select
                      className='custom-select'
                      value={this.state.accountType}
                      onChange={this.onChange}
                      name="accountType"
                    >
                      <option value='' disabled>--Select--</option>
                      <option value='Single'>Single Account</option>
                      <option value='Joint'>Joint Account</option>
                      
                    </select>
                  </div>

                      
                        <div className="d-flex justify-content-center" >

                            <button className="btn text-white mb-3"  style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Submit</button>&nbsp; &nbsp;
        
                        </div>

                    </form>
                </div>
            </div>




        </div>
        )
    }
}

export default Account
