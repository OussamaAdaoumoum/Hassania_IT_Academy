import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from '../../UserContext';


function SignUp() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);

  const { login } = useContext(UserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
            }
    
    const handleSubmit = (event) => {
      event.preventDefault();

      axios.post('http://localhost/API/register.php', inputs).then(function(response){
        console.log(response.data);
        console.log(response.data.message); 
        console.log('input issssssssssss', inputs);
        setEmail(inputs.email);
        setName(inputs.name);
        login(inputs.name, inputs.email);

        navigate('/');
        });        
       }
    

  return (

  <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
  <form  className="flex w-[30rem] flex-col space-y-10" onSubmit={handleSubmit}>
    <div className="text-center text-4xl font-medium text-[#00283f]">Sign Up</div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 border-[#00283f]"
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-[#00283f]"
        // value={inputs.name}
        onChange={handleChange}
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 border-[#00283f]"
    >
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-[#00283f]"
        // value={inputs.email}
        onChange={handleChange}
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 border-[#00283f]"
    >
      <input
        type="number"
        placeholder="Phone Number"
        name="mobile"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-[#00283f]"
        // value={inputs.mobile}
        onChange={handleChange}
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 border-[#00283f]"
    >
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-[#00283f]"
        // value={inputs.password}
        onChange={handleChange}
      />
    </div>

    <button 
      className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
      >
          Submit
    </button>

    

    {/* <Link to="/SignIn" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</Link> */}

    <p className="text-center text-lg text-[#00283f]">
    already have account?  
      <Link  to='/SignIn' className="font-medium text-indigo-500 underline-offset-4 hover:underline">SIGN IN</Link>
    </p>
  </form>
</div>


  );
}

export default SignUp;