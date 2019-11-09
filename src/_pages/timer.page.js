import React, { Component } from 'react';
import { Time,ClockButton } from "../_components";
import { withRouter } from "react-router-dom";
class Timer extends Component {
    
        state = {
            hour:'',
            minute:'',
            second:'',
            start: false,
            counter:0,
        }
    
        changclock = (event) => {
            
    const { target: { value,name} } = event;
      
    this.setState({[name]:value})

    
        }
   

       

    
    startStopWatch = () => {
        
        const{hour,minute,second,counter}=this.state
    
        
        this.setState({ start: true })
        this.interval = setInterval(() => {
           
           if(counter>=0) this.setState( { counter: this.state.counter - 1 })
        }, 1000)
    
     
    

       
    }
    
    goBack = () => {
        this.props.history.push('/');
    }
    restart = () => {
        clearInterval(this.interval);
        this.setState({
            counter: 0,
            hour:'',
            minute:'',
            second:'',
        })
        
      
    }


    pauseStopWatch = () => {
        this.setState({
            start: false,
        });
        clearInterval(this.interval);
        
    }
    renderBtn = () => {
        if (this.state.start) {
            return <>
                <ClockButton onClick={this.restart}>Reset</ClockButton>
                <ClockButton onClick={this.pauseStopWatch}>Pause</ClockButton>
            </>
        } else {
            return <>
                <ClockButton onClick={this.goBack}>Back</ClockButton>
                <ClockButton onClick={this.startStopWatch}>Start</ClockButton>
            </>
        }
    }
    render() {
        const { counter,hour,minute,second } = this.state
        return <div className="clock-page">
            <input
            type="number" name="hour" 
            onChange={this.changclock} min="00" max="24" placeholder="00" />:
            <input type="number" name="minute" onChange={this.changclock} min="00" max="24" placeholder="00" /> :
            <input type="number" name="second" onChange={this.changclock} min="00" max="24" placeholder="00" />
            
            
            <Time counter={counter+ +hour*3600 + +minute*60+ +second*1} />
            <div style={{ marginTop: 20, width: 350, justifyContent: 'space-around' }}>


                {this.renderBtn()}
            </div> 
        </div>
    }
}

const style = {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold'
};
withRouter(Timer);
export { Timer };
