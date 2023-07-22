import React from 'react';
import { Form, Formik, Field, ErrorMessage, FieldArray } from 'formik';
import './News.css'
//import * as Yup from 'yup'


const News = () => {
  
  const validateFirstName = (value) =>{
    let error
    const firstNameElement = document.getElementById('firstName')

    if(!value){
      error = 'Required'
    } else if (value.length > 8){
      error = 'First name should be less than 8 characters'
    } else if (!isNaN(value)){
      error = 'First name should be only letters'
    } else{
      firstNameElement.classList.remove('field');
    }
    return error
  }
  const firstNameErr = (errMsg) => {
    const firstNameElement = document.getElementById('firstName')
    firstNameElement.classList.add('field');
    return(<span className='text-danger ms-2'>{errMsg}</span>)
  }

  const validateLastName = (value) =>{
    let error
    const lastNameElement = document.getElementById('lastName')

    if(!value){
      error = 'Required'
    } else if (value.length > 8){
      error = 'Last name should be less than 8 characters'
    } else if (!isNaN(value)){
      error = 'Last name should be only letters'
    } else{
      lastNameElement.classList.remove('field');
    }
    return error
  }
  const lastNameErr = (errMsg) => {
    const lastNameElement = document.getElementById('lastName')
    lastNameElement.classList.add('field');
    return(<span className='text-danger ms-2'>{errMsg}</span>)
  }

  const validateEmail = (value) =>{
    let error
    const emailElement = document.getElementById('email')

    if(!value){
      error = 'Required'
    } else{
      emailElement.classList.remove('field');
    }
    return error
  }
  const emailErr = (errMsg) => {
    const emailElement = document.getElementById('email')
    emailElement.classList.add('field');
    return(<span className='text-danger ms-2'>{errMsg}</span>)
  }

  const validateNumber = (value, index) =>{
    let error

    if(!value){
      error = 'Required'
    }
    return error
  }


  return (
    <Formik
      initialValues={
        {
          firstName: '',
          lastName: '',
          email: '',
          description : '',
          phNumbers : ['']
        }
      }
      onSubmit = {
        values => {
          alert(JSON.stringify(values, null, 2));
        }
      }
    >     
    {
      (formik) =>{
        //console.log(formik)
        return(
          <Form className='mx-5 mt-2'>

            <h1>Formik Form</h1>

            <div className=''>
              <label htmlFor="firstName">First Name</label>
              <ErrorMessage name="firstName" render={firstNameErr} />
              <Field className="form-control w-50" id="firstName" name="firstName" type="text" validate={validateFirstName} />
            </div>
    
            <br></br>
    
            <div>
              <label htmlFor="lastName">Last Name</label>
              <ErrorMessage name="lastName" render={lastNameErr} />
              <Field className="form-control w-50" id="lastName" name="lastName" type="text" validate={validateLastName} />
            </div>
    
            <br></br>
    
            <div>
              <label htmlFor="email">Email Address</label>
              <ErrorMessage name="email" render={emailErr} />
              <br />
              <Field className="form-control w-50" id="email" name="email" type="email" validate={validateEmail} />
            </div>
    
            <br></br>
    
            <div>
              <label htmlFor="description">Description</label>
              <span className="text-danger ms-2">
                <ErrorMessage name="description" />
              </span>
              <br />
              <Field as='textarea' className="form-control w-50" id="description" name="description" placeholder="What do you think ?" />
            </div>
    
            <br></br>
    
            <div>
              <label htmlFor="phNumbers">Phone Numbers</label>
              <span className="text-danger ms-2">
                <ErrorMessage name="phNumbers" />
              </span>
              <br />
              <FieldArray id="phNumbers" name="phNumbers" >
              {
                (fieldArrayProps) => {
                  const {push, remove, form} = fieldArrayProps
                  const {values} = form
                  const {phNumbers} = values
                  return(
                    <div>
                      {
                        phNumbers.map((phnumber, index) => {
                          return(  
                            <div key={index}>
                              <Field id={index} name={`phNumbers[${index}]`} validate={validateNumber} />
                              {
                                index > 0 ? <button type='button' onClick={() => {remove(index)}}> - </button> : null
                              }
                              <button type='button' onClick={() => {push('')}}> + </button>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                }
              }
              </FieldArray>
            </div>
    
            <br></br>
    
            <button type="submit" className='btn btn-primary' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </Form>
        )
      }
    }

    </Formik>
  );
};

export default News;