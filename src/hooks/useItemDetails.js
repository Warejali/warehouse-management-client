import { useEffect, useState } from "react";

const useItemDetails = id => {
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `https://mymoon-warehouse.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id])

    return [items]
}

export default useItemDetails;