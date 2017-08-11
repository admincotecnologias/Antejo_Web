import React, { Component } from 'react';
import Fetch from 'react-fetch';


  class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {nombre: ''}
    }

    login(){
      return function(){
        fetch('http://localhost/bantejo/public/AdminAuth/LogIn',{

          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: document.getElementById('username').value,
            password: document.getElementById('password').value,
          })
        }).then(response => response.json()).then(function(jsondata) {
          if(jsondata.token){
            window.location = '#/Dashboard';
          }

          console.log(jsondata)
        })
        }
      }


  render()  {
    return (

      <div className="app flex-row align-items-center">
        <link href="css/style.css" rel="stylesheet"/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <h1>Inicio de Sesion</h1>
                    <p className="text-muted">Iniciar sesion</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input type="text" className="form-control" placeholder="Usuario" id="username"/>
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input type="password" className="form-control" placeholder="Contraseña" id="password"/>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary px-4" onClick={this.login()}>Acceder</button>
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Olvidaste contraseña?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <img src="img/antejoBlanco.png" className="img-responsive"/>
                    <a className="btn btn-home px-4" href="#/root">Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }

export default Login;
