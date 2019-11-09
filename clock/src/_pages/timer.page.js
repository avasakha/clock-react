import React, { Component } from 'react';
import { Time,ClockButton } from "../_components";
import { withRouter } from "react-router-dom";
class Timer extends Component {
    
        state = {
            counter: 0,
            start: false,
        }
    
        changclock = (event) => {
        
        const { target: { value,name} } = event;
        if(name==="hour"){
    this.setState({ counter: this.state.counter+(value*3600) })
        }
        if(name==="minute"){
       
            this.setState({ counter: this.state.counter+(value*60) })
        }
       
        if(name==="second"){
            this.setState({ counter: this.state.counter +(value*1) })
        }
    }
        
       

    
    startStopWatch = () => {
        
        this.setState({ start: true })
        this.interval = setInterval(() => {
           
            this.setState({ counter: this.state.counter - 1 })
        }, 1000)
    }
    
    goBack = () => {
        this.props.history.push('/');
    }
    restart = () => {
        this.setState({
            counter: 0
        })
        clearInterval(this.interval);
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
        const { counter } = this.state
        return <div className="clock-page">
            <input type="number" name="hour" onChange={this.changclock} min="00" max="24" placeholder="00" />:<input type="number" name="minute" onChange={this.changclock} min="00" max="24" placeholder="00" /> :<input type="number" name="second" onChange={this.changclock} min="00" max="24" placeholder="00" />
            
            
            <Time counter={counter} />
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
