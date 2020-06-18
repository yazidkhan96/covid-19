import React, { Component } from 'react';

class FormInput extends Component {
    state = {
        nama: '',
        alamat: '',
        hobi: '',
        mobil: 'Pajero',
        sex: 'Pria'
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>Nama saya : {this.state.nama}</p>
                <input 
                type="text" 
                class="form-control mt-5" 
                name='nama' 
                value={this.state.nama} 
                onChange={this.handleChange}/>
                <div>
                <p>Mobil saya : {this.state.mobil}</p>
                <select name="mobil" id="" onChange={this.handleChange} value={this.state.mobil}>
                    <option value="Jaguar">Jaguar</option>
                    <option value="Pajero">Pajero</option>
                    <option value="Civic Turbo">Civic Turbo</option>
                    <option value="BMW">BMW</option>
                </select>
                </div>
                <div>
        <p>Jenis Kelamin {this.state.sex}</p>
                    <input className='ml-2' type="radio" name="sex" id="" value='Pria' onChange={this.handleChange} checked={this.state.sex === 'Pria' ? true : false}/> Pria
                    <input className='ml-2' type="radio" name='sex'  value='Wanita' onChange={this.handleChange} checked={this.state.sex === 'Wanita' ? true : false}/> Wanita
                </div>
            </div>
        );
    }
}

export default FormInput;