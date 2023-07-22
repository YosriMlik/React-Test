import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { useNavigate } from 'react-router-dom'
//import * as Yup from 'yup'
import './News.css'
import happy from '../static-files/happy.png'
import sad from '../static-files/sad.png'



const Forme = () => {

    const validate = (values) => {
        const errors = {}
    
        if(!values.name){
            errors.name = 'Required'
        } else if(!isNaN(values.name)){
            errors.name = 'Name is not a number'
        } else if(values.name.length > 25){
            errors.name = 'Name should not pass 25 characters'
        }
    
        if(!values.phone){
            errors.phone = 'Required'
        } else if( (isNaN(values.phone) ) ){
            errors.phone = 'Phone should be a number'
        } else if( (values.phone.length !== 8) ){
            errors.phone = 'Phone should be 8 numbers'
        }
    
        return errors
    };
    const nameRender = (errMsg) => {
        return(<span className='text-danger'>{errMsg}</span>)
    }


    const phoneRender = (errMsg) => {
        return(<span className='text-danger'>{errMsg}</span>)
    }

    let images = (values) => {
        if(values.feeling === 'happy'){
            return <img className='image' src={happy} alt='Happy person' />
        } else if(values.feeling === 'sad') {
            return <img className='image' src={sad} alt='Sad person' />
        }
    }


    return(
        <Formik
        initialValues = {
            {
                name : '',
                phone : '',
                feeling : '',
            }
        }
        validate = {validate}
        /*validationSchema = {
            Yup.object({
                name : Yup.string().max(25, 'Name should not pass 25 characters').required('This field is Required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
                phone : Yup.number().typeError('Phone should be a number').required('This field is Required').test('len', 'Should be 8 numbers', (val) => val.toString().length === 8)
            })
        }*/
        onSubmit = {
            (values) => {
                alert('Name : ' + values.name+'\nPhone : ' + values.phone+'\nYou feel : '+ values.feeling)
                document.getElementById('myForm').reset()
                //window.location.reload()
            }
        }>
            {
                (formik) => {
                    return(
                        <div className='mx-5 mt-2'>
                            <Form id='myForm'>
                                <h1>Formik Form with Yup</h1>

                                <div>
                                    <label htmlFor='name'>Name :</label>
                                    <Field type='text' name='name' id='name' className='form-control' />
                                    <ErrorMessage name='name' render={nameRender} />
                                </div>
                
                                <div>
                                    <label htmlFor='phone'>Phone :</label>
                                    <Field type='text' name='phone' id='phone' className='form-control' />
                                    <ErrorMessage name='phone' render={phoneRender} />
                                </div>
                
                                <br></br>
                                How do you feel ?
                                <div className='row align-items-center g-0'>
                                    <div className='col-2'>                                        
                                        <div className="form-check form-switch">
                                            <Field type="radio" className="form-check-input" name='feeling' value="happy" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Happy</label>
                                        </div>
                                        <div className="form-check form-switch">
                                            <Field type="radio" className="form-check-input" name='feeling' value="sad"  />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Sad</label>
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                        {images(formik.values)}
                                    </div>
                                </div>

                                
                                <br />
                                <br />
                
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>
                        </div>                 
                    )
                }
            }
        </Formik>
    )
};

export default Forme;