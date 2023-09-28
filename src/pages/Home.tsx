import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Beer } from "../types/Beer";
import { punkApi } from "../utils/api";
import { SearchBar } from "../components/SearchBar";
import { Title } from "../components/Title";

export const Home = () => {
    const [beers, setBeers] = useState<Beer[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getBeers = async () => {
        try {
            setLoading(true);
            setError(false);

            const response = await punkApi.getBeers();
            setBeers(response);

            setLoading(false);
        } catch (error) {
            setError(true);
            return;
        }
    }

    useEffect(() => {
        getBeers();
    }, []);

    return (
        <div className="py-2 container mx-auto">

            <div className="flex flex-1 justify-between">
                <Title />
                <SearchBar getBeersAgain={getBeers} />
            </div>

            {loading && error === false &&
                <p className="font-bond text-2xl text-black text-center">Loading...</p>
            }

            {error === true &&  
                <h1 className="my-4 text-2xl font-bold text-black">There was an error, we are fixing it!</h1>
            }

            {beers.map(item =>
                <Link key={item.id} to={`/beer/${item.id}`}>
                    <div className="border border-black py-4 rounded-md px-3 m-4 hover:opacity-60 cursor-pointer inline-block">
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