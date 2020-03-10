import React, { Component } from 'react';

import './BinToDec.css'

export default class BinToDec extends Component {

  constructor(props){
    super();
    this.state={
      binario: "",
      decimal: 0,
      carecterErro: '',
      convertSucess: '',
    }
    this.converte = this.converte.bind(this)
  }
  converte(){
    const binario = this.state.binario
    if (binario.match(/[^0-1]/g)!==null) {
      this.setState({carecterErro:'Somente 0 e 1'})
      this.setState({convertSucess:''})
    }else{
      this.setState({carecterErro:''})
      const decimal = parseInt(binario,2)
      this.setState({decimal})
      this.setState({convertSucess:'Convertido'})
    }
    console.log(this.state)
  }
  render() {
    return (
      <div className='conversor'>
        <h2>Binario para decimal</h2>
        <input type="text" onChange={(event)=>{this.setState({binario:event.target.value})}}/>
        <input type="button" value="converte" onClick={this.converte}/>
        <h2>{this.state.decimal}</h2>
        <h4 className='erro'>{this.state.carecterErro}</h4>
        <h4 className='sucesso'>{this.state.convertSucess}</h4>
      </div>
    )
  }
}
