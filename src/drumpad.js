import React from "react";

class DrumPad extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        press: false
      }
    
    
      this.playAudio = this.playAudio.bind(this);
      this.keyboardPress = this.keyboardPress.bind(this);
      this.pressButton = this.pressButton.bind(this);
    };
    
    componentDidMount(){
      document.addEventListener('keydown', this.keyboardPress);
    }
    
    componentWillUnmount(){
      document.removeEventListener('keydown', this.keyboardPress);
    }
    
    keyboardPress(event){
      if(event.keyCode === this.props.keyCode){
        this.playAudio();
      }
    }
    
    pressButton(){
      this.setState({
        press: true
      })
    }
    
    playAudio(){
      const audio = document.getElementById(this.props.keyTrigger);
      audio.currentTime = 0;
      audio.play();
      this.pressButton();
      setTimeout(() => this.setState({press: false}), 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }
    
    render(){
      return(
        <button
        className={`drum-pad ${this.state.press ? 'drum-pad-active' : ''}`} 
        id={this.props.clipId} 
        onClick={this.playAudio}>{this.props.keyTrigger}
          <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}>
          </audio>
        </button>
      )
    };
}

export default DrumPad;