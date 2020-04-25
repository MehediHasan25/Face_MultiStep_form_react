import React, { Component } from 'react'

export class PersonalDetails extends Component {

    continue = e => {
        const {values} = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
       // console.log(values.fatherName);
        return (
            <div className="col-sm-6">
            <div className="col d-flex justify-content-center" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <div className="col">
                    <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Enter Personal Details</h3>
                    <form >
                        {/* Applicant's Name */}
                        <div className="form-group">
                            <label htmlFor="">Applicant's Name</label>
                            <input type="text" value={values.applicantName} onChange={handleChange('applicantName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Applicant's Name" />
                        </div>

                        {/* Mother Name */}
                        <div className="form-group">
                            <label htmlFor="">Mother's Name</label>
                            <input type="text" value={values.motherName} onChange={handleChange('motherName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mother's Name" />
                            <small className="form-text text-muted">Enter Mother's Name</small>
                        </div>
                        
                        {/* Father Name */}
                        <div className="form-group">
                            <label htmlFor="">Father's Name</label>
                            <input type="email" value={values.fatherName} onChange={handleChange('fatherName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Father's Name" />
                            <small className="form-text text-muted">Enter Father's Name</small>
                        </div>

                        {/* Spouse Name */}
                        <div className="form-group">
                            <label htmlFor="">Spouse Name</label>
                            <input type="email" value={values.spouseName} onChange={handleChange('spouseName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Spouse Name" />
                            <small className="form-text text-muted">Enter Spouse Name</small>
                        </div>

                        {/* Gender */}
                    <div className='form-group'>
                    <label htmlFor="">Gender</label>
                    <select
                      className='custom-select'
                      value={values.gender}
                      onChange={handleChange('gender')}
                    >
                      <option value='' disabled>Gender</option>
                      <option value='M'>Male</option>
                      <option value='F'>Female</option>
                      <option value='T'>Other</option>
                    </select>
                  </div>

                        {/* Profession */}
                        <div className="form-group">
                            <label htmlFor="">Profession</label>
                            <input type="email" value={values.profession} onChange={handleChange('profession')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Profession" />
                           
                        </div>

                        {/* Mobile Phone Number */}
                        <div className="form-group">
                            <label htmlFor="">Mobile Phone Number</label>
                            <input type="email" value={values.mobileNumber} onChange={handleChange('mobileNumber')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Phone Number" />
                            
                        </div>

                        {/* Present Address */}
                        <div className="form-group">
                            <label htmlFor="">Present Address</label>
                            <input type="email" value={values.presentAddress} onChange={handleChange('presentAddress')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Provide Present Address" />
                            
                        </div>

                        {/* Permanent Address */}
                        <div className="form-group">
                            <label htmlFor="">Permanent Address</label>
                            <input type="email" value={values.permanentAddress} onChange={handleChange('permanentAddress')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Provide Permanent Address" />
                            
                        </div>
                        <div className="d-flex justify-content-center" >

                            <button className="btn text-white mb-3" onClick={this.back} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Back</button>&nbsp; &nbsp;
                        <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Next Page</button>
                        </div>

                    </form>
                </div>
            </div>




        </div>
        )
    }
}

export default PersonalDetails;
