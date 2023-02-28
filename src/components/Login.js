import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
export default function Login() 
{
  const init = {
    email: "",
    password: ""
  }


  const reducer = (state, action) => {
    switch (action.type) 
    {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;
    }}


  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
 
  const navigate = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    }
    fetch("http://localhost:8080/checklogin", reqOptions)
      .then(resp => {
                        if(resp.ok)
                        {
                          return resp.text();
                        }
                        else{
                          throw new Error("Server Error");
                        }
                    })
                    .then(text => text.length ? JSON.parse(text) : {})
                    .then(obj => {
                        if (Object.keys(obj).length === 0) {
                            setMsg("wrong email_id/password")
                        }
                        else {
                            if (obj.status === false) {
                            alert("Request has not been approved");
                            navigate('/Login')
                            }
                        else {
                            if (obj.role_id.role_id === 1) {
                                navigate("/admin_home");
                                }
                        else if (obj.role_id.role_id === 2)
                        {
                            navigate("/counsellor_home");
                        }
                        else if (obj.role_id.role_id === 3)
                        {
                            navigate("/patient_home");
                        }

                        }
        }

      })
      .catch((error) => alert(" oops !! Server down Please come back after some time "))

  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={info.email}
              onChange={(e) => { dispatch({ type: 'update', fld: 'email', val: e.target.value }) }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={info.password}
              onChange={(e) => { dispatch({ type: 'update', fld: 'password', val: e.target.value }) }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
            <button type="reset" className="btn btn-primary" onClick={() => { dispatch({ type: 'reset' }) }}>
              Clear
            </button>
          </div>
          {/* <div className="d-grid gap-2 mt-3">
          </div> */}
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <p>{JSON.stringify(info)}</p>
          <p>{msg}</p>
        </div>
      </form>
      <div>




      </div>
    </div>
  )
}

