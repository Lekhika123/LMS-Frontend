
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Retrieve stored user details from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if the user exists and the credentials match
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert('Login successful!');
            localStorage.setItem('isLoggedIn', 'true'); 
            navigate('/'); 
        } else {
            alert('Invalid email or password, or user not registered!');
        }
    };
    return (
        <HomeLayout>
            <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
                <form onSubmit={handleSubmit}  className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'> Email </label>
                        <input 
                            type="email" 
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email.."
                            className="bg-transparent px-2 py-1 border"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold'> Password </label>
                        <input 
                            type="password" 
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password.."
                            className="bg-transparent px-2 py-1 border"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
                       Login
                    </button>

                    <p className="text-center">
                        Do not have an account ? <Link to="/signup" className='link text-accent cursor-pointer'> Signup</Link>
                    </p>

                </form>
            </div>
        </HomeLayout>
    );
}

export default Login;