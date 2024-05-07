import React from "react"; 
import Card from "./Card";

function Cards({ data }) {
    return (
        <div className="flex flex-wrap justify-center gap-5">
           { data.map((item) => (
                <Card key={item.name} hex={item.hex} item={item} />
            ))}
        </div>
    );
}

export default Cards;
