import React, { Component } from 'react';

class Home extends Component {

    state = {
        time : new Date(),
    }

    componentDidMount(){
        setInterval( () => {
            this.setState({
              time : new Date()
            })
          }, 100)
    }


    render () {
        let type = 'en-GB'
        //let options = { hour12: false }
        return(
            <div className='mx-5 my-2'>
                <h1>Homepage</h1>
                
                <h3>Time : {this.state.time.toLocaleTimeString(type)}</h3>
            </div>
        )
    }
}
export default Home