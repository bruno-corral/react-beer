import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const auth = useContext<AuthContextType>(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate('/');
    }

    return (
        <div className="bg-yellow-500 w-screen h-20 flex justify-center items-center mb-10">
            {!auth.user && 
                <h1 className="text-black font-bold text-2xl p-3">Beer Shop</h1>
            }
            {auth.user && 
                <div className="container mx-auto flex justify-between">
                    <p className="font-bold text-xl p-3 text-black">Hello {auth.user.name}, welcome!</p>
                    <h1 className="text-black font-bold text-2xl p-3">Beer Shop</h1>
                    <button className="bg-black p-3 border border-white rounded-md font-bold hover:opacity-90 mx-4" onClick={handleLogout}>Logout</button>
                </div>
            } 
        </div>
    );
}