import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { punkApi } from "../utils/api";
import { Beer } from "../types/Beer";
import { Title } from "../components/Title";
import { BackButton } from "../components/BackButton";

export const SearchResult = () => {
    const params = useParams();
    const [infosBeer, setInfosBeer] = useState<Beer[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getSearchBeer = async () => {
        try {
            setError(false);
            setLoading(true);

            const response = await punkApi.getSearchBeer(params.slug);
            setInfosBeer(response);

            if (response.length === 0) {
                setError(true);
            }

            setLoading(false);

        } catch (error) {
            setError(true);
            return;
        }
    }

    useEffect(() => {
        getSearchBeer();
    }, []);

    return (
        <div className="py-2 container mx-auto">

            <div className="flex flex-1 justify-between">
                <Title />
                <BackButton />
            </div>
            
            {error === true && 
                <div className="flex flex-col items-center">
                    <h1 className="text-black font-bold text-2xl">Beers Not Found</h1>
                </div>
            }
            {loading && error === false &&
                <p className="font-bond text-2xl text-black">Loading...</p>
            }
            {infosBeer.map(item =>
                <Link key={item.id} to={`/beer/${item.id}`}>
                    <div key={item.id} className="border border-black py-4 rounded-md px-3 m-4 hover:opacity-60 cursor-pointer inline-block">
                        <img src={item.image_url} className="rounded-md w-60 h-60 mb-4"/>
                        <hr />
                        <p className="text-black font-bold py-2">{item.name}</p>
                        <p className="text-black font-bold">Brewed: {item.first_brewed}</p>
                    </div>
                </Link> 
            )}
        </div>
    );
}