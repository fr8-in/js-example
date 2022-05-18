import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {gql, useQuery } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const Query = gql
  `query city {
      city(where: {is_connected_city: {_eq: true}}) {
        id
        name
        is_connected_city
      }
    }
  `;

  const { loading, error, data } = useQuery(Query);

  if (loading) return;
  <p>Loading...</p>;

  if (error) return;
  <p>Error: {error}</p>;

  let output = [];

  data.city.map((city) => {
    const Data = city.name;
    output.push(Data);
  });

  const RegisterSubmit = (e) => {
    e.preventDefault();
    console.log(`${email} ${name} Register Successful`);
  };

  return (
    <>
      <div className="container align-content-center mt-5">
        <h2 className="row d-flex justify-content-center">Register Form</h2>
        <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">

            <form id="loginform" onSubmit={RegisterSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="nameInput"
                  placeholder="Enter Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div><br/>
              <div className="form-group">
                <Autocomplete
                  options={output}
                  style={{ width: 350 }}
                  renderInput={(elem) => <TextField {...elem} label="City"/>}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
