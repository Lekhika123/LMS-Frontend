import { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link,useNavigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';

function Signup() {
    const [previewImage, setPreviewImage] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    function getImage(event) {
        event.preventDefault();
        const uploadedImage = event.target.files[0];

        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result);
            })
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const existingUser = JSON.parse(localStorage.getItem('user'));
        if (existingUser && existingUser.email === email) {
            alert('User already exists with this email!');
            return;
        }
        const userDetails = {
            fullName,
            email,
            password,
            profileImage: previewImage,
        };
        localStorage.setItem('user', JSON.stringify(userDetails));
        localStorage.setItem('isLoggedIn', 'true'); 
        navigate('/login');
    };

   

    return (
        <HomeLayout>
            <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className='w-24 h-24 rounded-full m-auto' />
                        )}
                    </label>
                    <input 
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="fullName" className='font-semibold'> Name </label>
                        <input 
                            type="text" 
                            required
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name.."
                            className="bg-transparent px-2 py-1 border"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
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
                        Create account
                    </button>

                    <p className="text-center">
                        Already have an account ? <Link to="/login" className='link text-accent cursor-pointer'> Login</Link>
                    </p>

                </form>
            </div>
        </HomeLayout>
    );
}

export default Signup;