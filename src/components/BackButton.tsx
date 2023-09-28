import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    const handleGoList = () => {
        navigate(-1);
    }
    return (
        <button 
            className="border border-black bg-black text-white p-3 m-3 rounded-md font-bold hover:opacity-60" 
            onClick={handleGoList}>
                Go Back to List
        </button>
    );
} 