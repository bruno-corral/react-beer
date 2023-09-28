import { useState, useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth/AuthContext';
import { api } from '../utils/api';

export const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (email === '' || password === '') {
            alert('The E-mail and/or Password cannot be blank!');
            return;
        }

        const response = await api.signin(email, password);
        const isLogged = await auth.signin(email, password);

        if (isLogged) {
            setEmail('');
            setPassword('');

            navigate('/home');
        } 

        if (!isLogged) {
            alert(response.message);
            return;
        }
    }

    return (
        <div className="container mx-auto max-w-2xl max-h-96 flex flex-col items-center justify-content border border-black rounded-md p-10 px-6">
            <h1 className='font-bold text-2xl text-black'>Login</h1>
            <input 
                className="px-3 py-2 w-full rounded-md m-4 outline-none" 
                type="text" 
                placeholder='Type your e-mail' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
            <input 
                className="px-3 py-2 w-full rounded-md m-4 outline-none" 
                type="password" 
                placeholder='Type your password' 
                value={password} 
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <button className="bg-yellow-500 p-3 rounded-md font-bold hover:opacity-90 m-4 text-black" onClick={handleLogin}>Login</button>
                <Link to='/signup'><button className="bg-black p-3 border border-white rounded-md font-bold hover:opacity-90">Sign Up</button></Link> 
            </div>
        </div>
    );
}