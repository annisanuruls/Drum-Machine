import React from 'react';
import DrumPad from './drumpad';

class BankSetting extends React.Component{
    render(){
      let bankSetting = this.props.bankSelect.map((drumObj, i, bankArr) => {
        return(
          <DrumPad 
          key={bankArr[i].keyTrigger}
          clip={bankArr[i].url}
          clipId={bankArr[i].id}
          keyCode={bankArr[i].keyCode}
          keyTrigger={bankArr[i].keyTrigger}
          updateDisplay={this.props.updateDisplay}
          />
        );
      });
      return (
      <div className="pad-bank">{bankSetting}</div>
      )
    }
};

export default BankSetting;