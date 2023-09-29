import { useState } from 'react';
import { api } from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

export const SignUpUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (name === '' || email === '' || password === '') {
            alert('The name and/or email and/or password cannot be blank!');
            return;
        }

        const response = await api.signup(
            name,
            email,
            password
        );

        if (response.error === false) {
            alert(response.message);
            setName('');
            setEmail('');
            setPassword('');

            navigate(-1);

            return;
        }

        alert(response.message);
        return;
        
    }

    return (
        <div className="container mx-auto max-w-2xl max-h-96 flex flex-col items-center justify-content border border-black rounded-md p-10 px-6">
            <h1 className='font-bold text-2xl text-black'>Register</h1>
            <input 
                className="px-3 py-2 w-full rounded-md m-4 outline-none" 
                type="text" 
                placeholder="Type your Name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
            />
            <input 
                className="px-3 py-2 w-full rounded-md m-4 outline-none" 
                type="email" 
                placeholder="Type your E-mail" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
            <input 
                className="px-3 py-2 w-full rounded-md m-4 outline-none" 
                type="password"
                placeholder="Type your Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <div>
                <button className="bg-yellow-500 p-3 rounded-md font-bold hover:opacity-90 m-4 text-black" onClick={handleSignUp}>Register</button>
                <Link to='/'><button className="border border-black bg-black p-3 rounded-md font-bold hover:opacity-90 m-4">Go Login</button></Link>
            </div>
        </div>
    );
}