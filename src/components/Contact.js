import React, {Component} from "react";
import {Form, Button, Card} from "react-bootstrap"
import Swal from "sweetalert2/dist/sweetalert2.all";

class Contact extends Component {

    state = {
        newNum : '',
        contacts : [
            {num : '+216 26644323'}
        ]
    }

    newNumUpdate = (e)=>{
        this.setState({
            //...this.state.contacts,
            newNum : e.target.value
        })
    }

    addNum = ()=>{
        if(this.state.newNum !== ''){
            let contacts = [...this.state.contacts]
            contacts.push({ num : '+216 '+this.state.newNum })
            this.setState({
                contacts,
                newNum : ''
            })
        }
    }

    changePassword = () => {
        
        Swal.fire({
            title: 'Change password',
            html: 'Please enter <b>your email</b>',
            input: 'email',
            confirmButtonText: 'Change'
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire({
                    title: 'Invalid E-mail',
                    icon: 'error',
                })
            }
        })
    }

    render (){
        return (
        <>
            <div className="mx-5 my-3">
                <div className="row g-0">
                    <input maxLength={8} className="col-auto form-control w-50 me-3" value={this.state.newNum} onChange={this.newNumUpdate} /> 
                    <button className="col-auto btn btn-success" onClick={this.addNum}>+ ADD</button>
                </div>
                <br />
                <h1 className="p-0">Contacts :</h1>
                <ul>
                    {
                        this.state.contacts.map(
                            (contact) =>{
                                return(<li key={Math.random()}>{contact.num}</li>)
                            } 
                        )
                    }
                </ul>
            </div>
            
            <Card className="w-75 mx-auto mt-5">
                <Card.Header><h2 className="text-center">React-bootstrap</h2></Card.Header>
                <Card.Body>
                    <Form className="row">
                        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                            <Form.Group id='username'>
                                <Form.Label>Email :</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>
                            <br />
                            <Form.Group id='password'>
                                <Form.Label>Password :</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                            <br />
                            <Button type="submit" className="w-100 text-center mt-3">Sign In</Button>
                            <br />
                            <a href="#" id="change-password" onClick={this.changePassword}>Forgot password ?</a>
                        </div>
                        <div className="col-md-6">
                            <Card.Img style={{width: '100%'}} src="https://www.grid.news/resizer/hWvBPn345AlGL-yiSJ0N1YYHf9A=/arc-photo-thesummit/arc2-prod/public/D2YP5VNBIJGXVCEC66MLUFZPIA.jpeg" />
                        </div>                   
                    </Form>
                    
                </Card.Body>
            </Card>

            <div className="mt-4 d-flex flex-column flex-sm-row">
                <p className="flex-grow-1 ms-4">Logo</p>
                <p className="me-4">Home 1</p>
                <p className="me-4">Home 2</p>
                <p className="me-4">Home 3</p>
                <p className="me-4">Home 4</p>
            </div>
        </>
        );
    }
}

export default Contact;
