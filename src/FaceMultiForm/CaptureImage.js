import React, { Component } from 'react'
import Camera from './utils/Camera';
import { formatDate } from './utils/DateFormat';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Spinner from './Reusable/Spinner';

export class CaptureImage extends Component {

    continue = e => {
        const {values} = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }



    onImageConfirm = (base64Image) => {
        //console.log("In image confirm");
        //console.log(base64Image);
        //this.setState({faceImage: base64Image, imageFlag: true});
        this.props.handleState('faceImage', base64Image);
        this.props.handleState('imageFlag', true);
        this.closeCamera();
    }

    showCamera = () => this.props.handleState('showCamera', true);

    closeCamera = () => this.props.handleState('showCamera', false);

    onSubmit = e =>{
        e.preventDefault();
    }

    render() {
         const { values, handleState, handleChange, handleDate } = this.props;
         console.log(values.dob);

        return (
            <div className='content'>
        <div className='row '>
          {/* Start Content*/}
          <div className='container' >
            <div
              className='d-flex align-items-center card border-light mb-3'
              // style={{ backgroundColor: '#f7f7f7' }}
            >
              <div
                className='col-sm-5 p-3 mb-2'
                style={{
                  backgroundColor: '#56c9ef',
                  color: '#fff',
                  textAlign: 'center',
                  marginTop: '15px',
                  boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)"
                }}
              >
                <i className='far fa-user' />
                &nbsp; Face Verification
              </div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit}>
                 {/* Image show after confirm image */}

                 

                   
            <div className = "center">
                     

                {/* NID NO */}
                <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='nid'
                        value={values.nidNo}
                        onChange={handleChange('nidNo')}
                        placeholder='NID No.'
                      />
                    </div>
                    {/* NID NO */}

                    {/* Date of Birth */}
                    <div className='form-group d-flex justify-content-between'>
                    <div className=''>
                      <label htmlFor='dob'>Date of Birth:</label>
                    </div>
                    <div className=''>
                      
                      <DatePicker
                        placeholderText='DD/MM/YYYY'
                        selected={values.dob}
                        dateFormat='dd/MM/yyyy'
                        onChange={date => handleDate("dob", date)}   
                      />
                    </div>
                  </div>
                  {/* Date of Birth */}

                   {/* Capture Image */}
                {values.imageFlag ?
                    (<img
                       src={values.flag + values.faceImage}
                         style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width:"100px",
                          height: "100px"
                         }}
                       className=' img-thumbnail center animated slideInDown'
                       id='imagePicture'
                        alt='cameraPicture'
                />)
                : ""
                }   
             </div>
                  {/* end Image show after confirm image */}

                  
                 

                  


                  

                  <button
                    type='submit'
                    disabled={values.isEnable}
                    className='btn btn-block'
                    style={{ backgroundColor: '#8f8e8e', color: '#fff', boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}
                    data-toggle="modal"
                    data-target="#cameraModal"
                    onClick={ this.showCamera }
                  >
                   <i className="far fa-images" />
                    &nbsp; Capture Image
                  </button>
                  {/* modal for image */}
                  <div className="modal fade " id="cameraModal" tabIndex="-1" role="dialog" aria-labelledby="cameraModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog mw-100 w-75" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="cameraModalLabel">Capture Your Image</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ this.closeCamera }>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {values.showCamera ? <Camera onConfirm={this.onImageConfirm}/> : ""}
                            </div>
                        </div>
                    </div>
                </div>
                  {/* modal for image */}
                 
                  
                 
                  
                  <div className="d-flex justify-content-center" >

                                <button className="btn text-white mb-3" onClick={this.back} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Back</button>&nbsp; &nbsp;
                            <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Next Page</button>
                            </div>


               
                </form>
              </div>
            </div>
          </div>

          {/* End Content*/}
        </div>
      </div>
        )
    }
}

export default CaptureImage
