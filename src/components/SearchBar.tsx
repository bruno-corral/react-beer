import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    getBeersAgain: (search: string) => void;
}

export const SearchBar = ({ getBeersAgain }: Props) => {
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSearchBeer = async (search: string) => {
        if (search === '') {
            getBeersAgain(search);
            return;
        }
        navigate(`/home/results/${search}`);
    }

    return (
        <div className="">
            <input type="text" placeholder="Search beers by name" className="px-3 py-2 w-96 rounded-md m-4 outline-none" value={search} onChange={e => setSearch(e.target.value)} />
            <button className="bg-black p-2 border border-white rounded-md font-bold hover:opacity-90" onClick={() => handleSearchBeer(search)}>Search</button>
        </div>
    );
}