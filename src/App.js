import React from 'react';
import BankSetting from './banksetting';
import './App.css';
import './responsive.css';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: "Kick-n'Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Cymbal-4',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209675/Audio/cymbal4_ec4ddn.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Cymbal-5',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209674/Audio/cymbal5_thvcvm.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Cymbal-6',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209673/Audio/cymbal6_j9p2nq.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Drum-2',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209674/Audio/drum2_hzqd6m.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap-2',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209675/Audio/clap2_vd2gq1.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Clap-3',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209675/Audio/clap3_u0fivu.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Drum-4",
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209674/Audio/drum4_gii57m.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Drum-5',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209674/Audio/drum5_oynju9.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Drum-6',
    url: 'https://res.cloudinary.com/drq9qbozr/video/upload/v1651209674/Audio/drum6_st1vlc.mp3'
  },
];


let bankStat = true;

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    volumeValue: 10,
    displayVolume: 'Volume : ' + 10,
    bankSelect: bankOne,
    bankDisplay: "Piano Kit",
    drumDisplay: 'Chord 1'
  }

  this.changeVolume = this.changeVolume.bind(this);
  this.selectBank = this.selectBank.bind(this);
  this.displayPadName = this.displayPadName.bind(this);
};

displayPadName(drumpad){
  this.setState({
    drumDisplay: drumpad
  });
};

clearDisplayPadName(){
  this.setState({
    drumDisplay: String.fromCharCode(160)
  });
};

changeVolume(event){
  this.setState({
    volumeValue: event.target.value,
    displayVolume: 'Volume : ' + event.target.value
  })
}

selectBank(){
  bankStat = !bankStat;
  if(bankStat === true){
    this.setState({
      bankSelect: bankOne,
      bankDisplay: "Piano Kit"
    })
  }
  else if(bankStat === false){
    this.setState({
      bankSelect: bankTwo,
      bankDisplay: "Drum Kit"
    });
  };
};

render(){
  const volume = [].slice.call(document.getElementsByClassName('clip'));
  volume.forEach((audio) => {
    audio.volume = this.state.volumeValue / 100;
  });

  return(
    <div id="drum-machine" className='container'>
      <div className='pad-wrapper'>
        <BankSetting 
        bankSelect={this.state.bankSelect}
        updateDisplay={this.displayPadName}
        />
      </div>
      <div className='setting-wrapper'>
        <h1 className='project-title'>DRUM MACHINE</h1>
        <div className='bank-wrapper'>
          <button className="bank-button" onClick={this.selectBank}>Bank</button>
          <h1 className='bank-display'>{this.state.bankDisplay}</h1>
        </div>
        <p>Audio Name : </p>
        <h1 id='display' className='drumpad-display'>{this.state.drumDisplay}</h1>
        <div className = "volume-wrapper">
          <h1 className='volume-display' >{this.state.displayVolume}</h1>
          <input className='volume-setting' type="range" min="0" max="100" step="1" value={this.state.volumeValue} onChange={this.changeVolume} />
        </div>
      </div>
    </div>
  )
}
}

export default App;
