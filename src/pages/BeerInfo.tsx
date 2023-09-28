import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { punkApi } from "../utils/api";
import { Beer } from "../types/Beer";
import { BackButton } from "../components/BackButton";
import { Title } from "../components/Title";

export const BeerInfo = () => {
    const params = useParams();
    const [infosBeer, setInfosBeer] = useState<Beer[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getInfosBeer = async () => {
        try {
            setLoading(true);
            setError(false);

            const response = await punkApi.getBeer(params.id);
            setInfosBeer(response);
            
            setLoading(false);
        } catch (error) {
            setError(true);
            return;
        }
    }

    useEffect(() => {
        getInfosBeer();
    }, []);

    return (
        <div className="container mx-auto">

            <div className="flex flex-1 justify-between">
                <Title />
                <BackButton />
            </div>

            {loading && error === false &&
                <p className="font-bond text-2xl text-black text-center">Loading...</p>
            }

            {error === true &&  
                <h1 className="my-4 text-2xl font-bold text-black">There was an error, we are fixing it!</h1>
            }

            {infosBeer.map(item =>
                <div key={item.id} className="flex flex-row">
                    <img src={item.image_url} className="border border-black p-3 rounded-md w-96 h-96 mx-4"/>
                    <div>
                        <h1 className="text-black font-bold text-4xl p-3">{item.name}</h1>
                        <h2 className="text-black text-3xl p-3">Brewed: {item.first_brewed}</h2>
                        <p className="text-black text-2xl p-3">Description: {item.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}