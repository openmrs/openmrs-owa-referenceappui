import React from 'react';

const LoginForm = ({ onSubmit, onChange, username, password, sessionLocation }) => {
  return (
    <div className="row">
      <div className="col-lg-10">
      <form className="login-form" onSubmit={onSubmit}>
        <h4 className="login-header">ACCOUNT LOGIN</h4>
        <div className="form-group">
          <input
            className="form-control"
            id="text"
            name="username"
            onChange={onChange}
            value={username}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={onChange}
            value={password}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="location"
            name="sessionLocation"
            onChange={onChange}
            value={sessionLocation}
            required
          >
            <option value= "">Location for this session</option>
            <option value="Laboratory">Laboratory</option>
            <option value="Inpatient">Inpatient Ward</option>
            <option value="Isolation">Isolation Ward</option>
            <option value="Outpatient">Outpatient Coptionnic</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Registration">Registration Desk</option>
          </select>
        </div>

        <span className="forgot-password"> Forgot Password ?</span>
        
        <button type="submit" className="login-button">Login</button>
      </form>
      </div>
    </div>
  )
}

export default LoginForm;
