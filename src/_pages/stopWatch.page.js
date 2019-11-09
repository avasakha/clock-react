import React,{Component} from 'react';
import { StopWatch,ClockButton } from "../_components";
import { withRouter } from "react-router-dom";
class StopWatchPage extends Component {

    state = {
        counter: 0,
        start: false,
        lap:[]
    }

    goBack = () => {
        this.props.history.push('/');
    }

    startStopWatch = () =>{
        this.setState({start: true})
        this.interval = setInterval(()=>{
            this.setState({counter: this.state.counter + 1})
        },1000)
    }

    addLap = () =>{
    const{counter,lap}=this.state
    const sec = counter % 60;
  const min = ((counter - sec) / 60) % 60;
  const hour = (counter - min * 60 - sec) / 3600;
  const total=hour.toLocaleString('en',{minimumIntegerDigits:2})+':'+min.toLocaleString('en',{minimumIntegerDigits:2})+':'+sec.toLocaleString('en',{minimumIntegerDigits:2})
  lap.push(total);
    }

    pauseStopWatch = () =>{
        this.setState({
            start: false,
        });
        clearInterval(this.interval);
    }

    restart = () =>{
        this.setState({
            counter: 0
        })
    }

    renderBtn = () =>{
        if (this.state.start) {
            return <>
                <ClockButton onClick = {this.addLap}>Lap</ClockButton>
                <ClockButton onClick={this.pauseStopWatch}>Pause</ClockButton>
            </>
        } else {
            return <>
                <ClockButton onClick = {this.goBack}>Back</ClockButton>
                {this.state.counter ? <ClockButton onClick = {this.restart}>Restart</ClockButton> : null}
                <ClockButton onClick={this.startStopWatch}>Start</ClockButton>
            </>
        }
    }

    render () {
        const {counter,lap} = this.state;
        return <div className="clock-page">
            <StopWatch counter = {counter}/>
            <div style={{display:'flex',flexDirection:'column',color:'white',marginLeft:10}}>
                {lap.map(item=><span>{item}</span>)}
            </div>
            <div style={{marginTop: 20,width: 350,justifyContent: 'space-around'}}>
                {this.renderBtn()}
            </div>
        </div>
    }
}

withRouter(StopWatchPage);

export {StopWatchPage}