import React, { Component } from "react";

export default class StateComponent extends Component {
  state = {
    nama: "Bambang",
    umur: 0,
  };

  handleUmur = () => {
      this.setState(prevState => ({
        umur: ( (prevState.umur < 0 ) ? prevState.umur  : prevState.umur+ 1 )
      }));
  }
  handleKurang = () => {
    this.setState(prevState => ({
      umur: ( (prevState.umur > 0 ) ? prevState.umur-1 : prevState.umur)
    }));
}
  render() {
    return (
      <div>
        <h3>Nama : {this.state.nama}</h3>
        <p className="lead">Umur : {this.state.umur}</p>
        <button className='btn btn-dark' onClick={this.handleUmur}>Tambah umur</button>
        <button className='btn btn-dark ml-2' onClick={this.handleKurang}>Kurangi Umur</button>
      </div>
    );
  }
}
