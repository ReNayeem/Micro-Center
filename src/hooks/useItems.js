import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://micro-center.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems]
}

export default useItems;
