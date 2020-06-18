import React, { Component } from 'react';
import axios from 'axios'
import Cry from '../../images/cry.svg'
import Happy from '../../images/happy.svg'
import Sad from '../../images/sad.svg'
import Indonesia from '../../images/indonesia.svg'
class Posts extends Component {
    state = {
        worlds: {
            case: '',
            death: '',
            recover: ''
        },
        indonesia: {
            positif: '',
            meninggal: '',
            sembuh: ''
        }
    }

    getDataFromApi = () => {
        axios.get('https://coronavirus-19-api.herokuapp.com/all').then(result => {
            this.setState({
                case: result.data.cases,
                death: result.data.deaths,
                recover: result.data.recovered
            })
        }).catch(err => {
            throw err
        })
    }

    getDataIndonesia = () => {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries').then(negara => {
            let indonesia = negara.data
            console.log(indonesia)
            if (indonesia.length > 0) {
                for (let i = 0; i < indonesia.length; i++) {
                   let dataIndonesia = indonesia[i];
                   let namaNegara = dataIndonesia.country;
                //    console.log(namaNegara)

                   if(namaNegara === 'Indonesia'){
                       console.log(dataIndonesia.cases)
                       this.setState({
                           positif: dataIndonesia.cases,
                           meninggal: dataIndonesia.deaths,
                           sembuh: dataIndonesia.recovered
                       })
                   }
                    
                }
            }
        }).catch(err => {
            throw err
        })
    }
    componentDidMount(){
        this.getDataFromApi();
        this.getDataIndonesia();
    }
    render() {
        return <div>
               <div className="jumbotron jumbotron-fluid bg-success text-white text-center">
      <div className="container">
        <h1 className="display-4">Corona Virus</h1>
        <h2>
              PANTAU PENYEBARAN COVID-19<br/>
              SECARA REAL-TIME<br/>
              Mari bersama menjaga kesehatan diri kita dan keluarga
          </h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
            <div className="bg-danger box text-white">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Positif</h5>
                    <h2 id="data-kasus">{this.state.case}</h2>
                    <h5>Orang</h5>
                  </div>
                  <div className="col-md-4">
                    <img src={Sad} alt="" width="100px"/>
                  </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="bg-info box text-white">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Meninggal</h5>
                    <h2 id="data-mati">{this.state.death}</h2>
                    <h5>Orang</h5>
                  </div>
                  <div className="col-md-4">
                    <img src={Cry} alt="" width="100px"/>
                  </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="bg-success box text-white">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Sembuh</h5>
                    <h2 id="data-sembuh">{this.state.recover}</h2>
                    <h5>Orang</h5>
                  </div>
                  <div className="col-md-4">
                    <img src={Happy} alt="" width="100px"/>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
              <div className="bg-primary box text-white">
                  <div className="row">
                    <div className="col-md-3">
                      <h2>INDONESIA</h2>
                      <h5 id="data-ind"> Positif : {this.state.positif} orang <br/>
                        Meninggal : {this.state.meninggal} orang <br/>
                        Sembuh: {this.state.sembuh} orang</h5>
                    </div>
                    <div className="col-md-4">
                      <img src={Indonesia} alt="" width="150px"/>
                    </div>
                  </div>
              </div>
          </div>
      </div>

    </div>

    <footer className="bg-success text-center text-white mt-3 pt-2 pb-2">
      Created By @YAZID-AKBAR
    </footer>
        </div>
    }
}

export default Posts;