import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app} from '../config/firebase.config'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const firebaseAuth = getAuth(app)  
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const loginwithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
        console.log(userCred)
    })
  }
  return (
    <div className='relative w-screen h-screen flex items-center justify-center'>
      <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
        <div className='w-full md:w-96 p-6 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all' onClick={loginwithGoogle}>
            <FcGoogle />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
