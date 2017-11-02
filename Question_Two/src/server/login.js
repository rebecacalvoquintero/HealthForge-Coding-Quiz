import React, {Component}from 'react';
import PatientsListItem from './patients_list_item';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      grantType: "password",
      client_id: "interview"
    };

  }

  validateUser = (username, password) => {
    //if username === "interview" && pasword === Interview01
    // send the token & redirect to main.html
  }

//go to https://auth.healthforge.io/auth/realms/interview/protocol/openid-connect/token
//and go to the main.html
