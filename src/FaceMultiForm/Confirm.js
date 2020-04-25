import React, { Component } from 'react'
import { formatDate } from './utils/DateFormat';
export class Confirm extends Component {



    continue = e => {
        const { values } = this.props;
        e.preventDefault();
        //Process form//
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        console.log(values);
        return (
            <div>
                <h1>Account Details</h1><br />
               
                <p>Product and Services : {values.product}</p>
                <p>Account Type : {values.accountType}</p>
                <br /> <br />
                <h2>Account Opening Details</h2>
                <br />
                <h3>Nid front side</h3><br />
                <img src={values.flag + values.NidFront} alt="" style={{ width: "150px", height: "120px", border: "1px solid #333" }}></img>
                <h3>Nid back side</h3><br />
                <img src={values.flag + values.NidBack} alt="" style={{ width: "150px", height: "120px", border: "1px solid #333" }}></img>
                <br /> <br />
                <h2>Face Verification Details</h2><br />

                <p>Nid No : {values.nidNo}</p>
                <p>Date of Birth : {formatDate(values.dob)}</p><br />
                <h3>Applicant's Image</h3><br />
                <img src={values.flag + values.faceImage} alt="" style={{ width: "150px", height: "120px", border: "1px solid #333" }}></img>
                <br />
                <h2>Personal Information</h2><br />
                <p>Applicant's Name : {values.applicantName}</p>
                <p>Mother's Name : {values.motherName}</p>
                <p>Father's Name : {values.fatherName}</p>
                <p>Spouse Name : {values.spouseName}</p>
                <p>Gender : {values.gender}</p>
                <p>Profession : {values.profession}</p>
                <p>Mobile Phone Number : {values.mobileNumber}</p>
                <p>Present Address : {values.presentAddress}</p>
                <p>Permanent Address : {values.permanentAddress}</p>
                <br />

                {values.fields.map((val, i) => (
                    <div key={i}>
                        <br />
                        <h2>Nominee {i + 1}</h2>
                        <p>Nominee : {values.fields[i].nominee}</p>
                        <p>Relation : {values.fields[i].relation}</p>
                        <p>Photograph : {values.fields[i].photograph}</p>
                    </div>
                ))}
                <br />
                <h2>Applicant's Signature</h2><br />
                <img src={values.flag + values.signature} alt="" style={{ width: "150px", height: "120px", border: "1px solid #333" }}></img>
                <br />
                <br /> <br />

                <div className="d-flex justify-content-center" >

                    <button className="btn text-white mb-3" onClick={this.back} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Back</button>&nbsp; &nbsp;
                    <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default Confirm;
