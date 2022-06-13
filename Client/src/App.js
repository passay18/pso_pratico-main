import React, {useState, useEffect, Component} from 'react';
import './App.css';
import Axios from 'axios';
import Header from './header.js'

function App() {

  const [nomeName, setNomeName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [Userlist, setUserList] = useState([]);

  var [nomeNameUpdate, setNomeNameUpdate] = useState("");
  var [emailNameUpdate, setEmailNameUpdate] = useState("");
  

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/usuarios').then((response)=>{
      setUserList(response.data);
    });
  }, [])

  const submitUser = () =>{
      Axios.post('http://localhost:3001/api/insert', {
        nomeName: nomeName,
        emailName: emailName
      }).then(()=>{
          alert('inserted:'+emailName);
      });
  }

  const sendUpdateUser = (o) => {
    Axios.post('http://localhost:3001/api/update', {
      id: o,
      nomeNameUpdate: nomeNameUpdate,
      emailNameUpdate: emailNameUpdate
    }).then(()=>{
        alert('inserted:'+emailNameUpdate);
    });
  };

  const handleClick = (o) => {
    document.getElementById(o).classList.remove('hidden');
    document.getElementById(o).classList.add('show');
  };

  const deleteUser = (o) => {
    Axios.post('http://localhost:3001/api/delete', {
      id: o
    }).then(()=>{
        alert('delete:'+o);
    });
  };
  

  return (
    <div className="App">
      <img id="logo-main" src="https://psoengenharia.com.br/wp-content/uploads/2020/04/PSO-Logo-Eng-RGB.svg" width="200" alt="Logo Thing main logo"></img>
      <div class="container">
        <h2>Novo usuario: </h2>
        <div class="text-field-outlined mr-5">
          <input  onChange={(e)=>{
        setNomeName(e.target.value);
      }} type="text" name="nomeName" required/>
          <span>Nome</span>
        </div>
        <div class="text-field-outlined  mr-5">
          <input onChange={(e)=>{
            setEmailName(e.target.value);
          }} type="text" name="emailName" required/>
          <span>E-mail</span>
        </div>
          <button onClick={submitUser} class="text-field-outlined" type="button">
            Cadastrar
          </button>
      </div>
      {<Header />}
      
      <div class="col-12 list-user-container">
        {Userlist.map((val)=>{
          return <div class="list-users">
            <div class="dropdown-container">
                <div class="dropdown-menu">
                  <button type="button" onClick={(e) => handleClick(val.id)}>Editar</button>
                  <button type="button" onClick={(e) => deleteUser(val.id)}>Deletar</button>
                </div>
              </div>
              <h5><span>Nome: </span>{val.nome}
              <span>Email: </span>{val.email}</h5> 
              <div class="user-edit hidden" id={val.id}>
                <label>nome: </label>
                <input type="text" onChange={(e)=>{
                  setNomeNameUpdate(e.target.value);
                }} name="nomeNameUpdate" defaultValue={val.nome}/>
                <label>email: </label>
                <input onChange={(e)=>{
                  setEmailNameUpdate(e.target.value);
                }} type="text" name="emailName" defaultValue={val.email}/>
                <button onClick={(e) => sendUpdateUser(val.id)}>Atualizar</button>
              </div>
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
