import axios from 'axios';
import React, { Component } from 'react';
import './About.css'

class About extends Component {

  state = {
    users : [],
    loading : "dots-flow"
  }
  
  componentDidMount(){    
    setTimeout( async () => {
      try {
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            this.setState({
              users : resp.data
            })        
          }
        );
      } catch (error){
        alert(error)
      }
    }, 2000)
  };

  render(){
    const usersList = this.state.users.map(
      (user) => {
        this.setState({
          loading : ''
        });
        return(
          <div key={user.id} className={'user'}>
            <span>Name : {user.name}</span>
            <br></br>
            <span>Email : {user.email}</span>
          </div>
        );
      }
    );
    return(
      <div>
        <h1>&nbsp;Our team</h1>
        <div id='about' className={"" + this.state.loading}>
        {usersList}
        </div>
      </div>
    )
  }
}

export default About;
