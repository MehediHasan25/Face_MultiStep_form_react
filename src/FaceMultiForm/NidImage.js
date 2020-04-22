import React, { Component } from 'react'

export class NidImage extends Component {

    continue = e => {
        const { values } = this.props;
        e.preventDefault();
        this.props.nextStep();
    };



    //Nid front Image upload
    fileSelectedHandler = event => {
        if (event.target.files[0]) {
            let file = event.target.files[0];
            console.log(file.type);
            var reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = () => {
                // console.log(typeof reader.result);
                // console.log(btoa(reader.result));
                let base64Image = btoa(reader.result);
                // this.setState({
                //   profilePic: base64Image,
                //   profilePicType: file.type

                //   //nidImage: URL.createObjectURL(event.target.files[0])
                // });
                this.props.handleState('NidFront', base64Image);

                this.props.handleState('NidFrontType', file.type)
            };
            reader.onerror = () => {
                console.log('there are some problems');
                alert('File can not be read');
            };
        }
    };

    //Nid Back Image upload
    fileSelectedHandlerTwo = event => {
        if (event.target.files[0]) {
            let file = event.target.files[0];
            console.log(file.type);
            var reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = () => {
               
                let base64Image = btoa(reader.result);

                this.props.handleState('NidBack', base64Image);

                this.props.handleState('NidBackType', file.type)
            };
            reader.onerror = () => {
                console.log('there are some problems');
                alert('File can not be read');
            };
        }
    };

    render() {
        const { values, handleChange, handleState } = this.props;
        // console.log(values.profilePicType);
        // console.log(values.flag)
        return (
            <div>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <div
                                className='col-sm-6 p-3 mb-2'
                                style={{
                                    backgroundColor: '#56c9ef',
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)"
                                }}
                            >
                                <i className='fas fa-edit' />
                    &nbsp;Upload FrontNid Image
                  </div>
                        </div>
                        <br />
                        <div className='d-flex justify-content-center'>
                            <img
                                src={values.flag + values.NidFront}
                                style={{
                                    margin: "auto", cursor: 'pointer', width: "300px", height: "200px"
                                    
                                }}
                                className='img-fluid img-thumbnail'
                                id='FrontNidPic'
                                alt=''
                            />
                        </div>
                        <br />
                        <div className='d-flex justify-content-center'>
                            <div className='card mb-3' style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
                                <div className='card-body d-flex justify-content-between'>
                                    <div className=''>
                                        <input
                                            type='file'
                                            onChange={this.fileSelectedHandler}
                                            className='form-control-file'
                                            id='input-file'
                                            aria-describedby='fileHelp'
                                        ></input>
                                    </div>
                                    <div className=''>
                                        <button
                                            type='button'
                                            onClick={() => console.log("uploaded")}
                                            style={{ backgroundColor: '#56c9ef', boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}
                                            className='btn btn-primary'
                                        >
                                            Upload
                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <div
                                className='col-sm-6 p-3 mb-2'
                                style={{
                                    backgroundColor: '#56c9ef',
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)"
                                }}
                            >
                                <i className='fas fa-edit' />
                    &nbsp;Upload BackNid Image
                  </div>
                        </div>
                        <br />
                        <div className='d-flex justify-content-center'>
                            <img
                                src={values.flag + values.NidBack}
                                style={{
                                    margin: "auto", cursor: 'pointer', width: "300px", height: "200px"
                                   
                                }}
                                className='img-fluid img-thumbnail'
                                id='nidBack'
                                alt=''
                            />
                        </div>
                        <br />
                        <div className='d-flex justify-content-center'>
                            <div className='card mb-3' style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
                                <div className='card-body d-flex justify-content-between'>
                                    <div className=''>
                                        <input
                                            type='file'
                                            onChange={this.fileSelectedHandlerTwo}
                                            className='form-control-file'
                                            id='input-file'
                                            aria-describedby='fileHelp'
                                        ></input>
                                    </div>
                                    <div className=''>
                                        <button
                                            type='button'
                                            onClick={() => console.log("uploadedback")}
                                            style={{ backgroundColor: '#56c9ef', boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}
                                            className='btn btn-primary'
                                        >
                                            Upload
                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" >

                    <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Next Page</button>
                </div>
            </div>
        )
    }
}

export default NidImage;
