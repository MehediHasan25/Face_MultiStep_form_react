import React, { Component } from 'react'

export class Nominee extends Component {


    continue = e => {
        const { values } = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    fileSelectedHandler = (event) => {
        if (event.target.files[0]) {
            let file = event.target.files[0];
            // console.log(file);
          //  console.log(idx);
            var reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = () => {
                let base64Image = btoa(reader.result);
                this.props.handleState(this.props.values.fields['photograph'], base64Image);
            };
            reader.onerror = () => {
                console.log('there are some problems');
                alert('File can not be read');
            };
        }
    };


    handleSubmit = e => {
        e.preventDefault()

        console.log(this.props.values.fields);
        
    }


    render() {
        const { values, fields, addFields, deteteRow } = this.props;
       // console.log(values.fields);
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.props.onChange}>


                    {
                        values.fields.map((val, idx) => {
                            let nomineeId = `nominee-${idx}`, relationId = `relation-${idx}`, photographId = `photograph-${idx}`
                            return (
                                <div key={idx} >
                                    <table style={{ border: "1px solid black" }}>
                                        <tr  key={idx}>
                                            <td>
                                                <label htmlFor={nomineeId}>Nominee</label>
                                                <input
                                                    type="text"
                                                    name="nominee"
                                                    data-id={idx}
                                                    id={nomineeId}
                                                   
                                                    value={values.fields[idx].nominee}
                                                    className="nominee"
                                                />

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <label htmlFor={relationId}>Relation</label>
                                                <input
                                                    type="text"
                                                    name="relation"
                                                    data-id={idx}
                                                    id={relationId}
                                                    value={values.fields[idx].relation}
                                                    className="relation"
                                                />

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className='d-flex justify-content-center'>
                                                    <div className='card mb-3' style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
                                                        <div className='card-body d-flex justify-content-between'>
                                                            <div className=''>
                                                                <input
                                                                // type="file"
                                                                // name="photograph"
                                                                // data-id={idx}
                                                                // id={photographId}
                                                                // value={values.fields[idx].photograph}
                                                                // className="photograph"
                                                                    type='file'
                                                                    name="photograph"
                                                                    onChange={this.fileSelectedHandler}
                                                                    className="photograph"
                                                                    data-id={idx}
                                                                    id={photographId}
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

                                            </td>
                                        </tr>

                                        <tr>
                                            <td> <button onClick={() => deteteRow(idx)}>Delete row</button></td>
                                        </tr>
                                    </table>

                                </div>

                            )
                        })

                    }


                    <input type="submit" value="Submit" />


                </form>
                <button onClick={addFields}>add row</button>
                <button onClick={this.continue}>Continue</button>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default Nominee;
