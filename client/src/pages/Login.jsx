import React, { useState } from 'react'
const URL = "http://localhost:7000/api/auth/login";
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const [user, SetUser] = useState({
    email: "",
    password: ""

  })
  // 😍😎😋😊😉
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    SetUser({ ...user, [name]: value })


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user)
      });

      console.log("Login Response", response);

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLs(res_data.token); // Correct case with an uppercase 'T'
        // alert("Login Successfull")
        toast.success('Login Successful');
        SetUser({ email: "", password: "" });
        navigate("/")



      }
      else {
        toast.error("Error In Login");
      }
    } catch (error) {
      console.log(error);
    }
  }





  return (
    <>

      <section>
        <main>
          <div className="section-registration">
            <div className="contiainer grid grid-two-cols">
              <div className="registration-image">
                <img src="/images/register.png" alt="A register image" width="400" height="500" />
              </div>

              {/* let build registration form 😁😁😁😁😁😁😁😁😁😁 */}
              <div className="registration-form">
                <h1 className='main-heading mb-3'>login form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="username">email</label>
                    <input onChange={handleInput} value={user.email} type="email" name="email" placeholder='email' id="email" required autoComplete='off' />
                  </div>

                  <div>
                    <label htmlFor="username">password</label>
                    <input onChange={handleInput} value={user.password} type="password" name="password" placeholder='password' id="password" required autoComplete='off' />
                  </div>
                  <br />
                  <button type='submit' className='btn btn-submit'>Login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login

