import React from "react";
import "./ShopContent.scss";

export const ShopContent = () => {
    const cards = [{

    }]
    return (
        <>
            <div className="shop-content">
                <div className="shop-section">
                    <h1>Super Food</h1>
                    {
                        cards.map((card, index) => {
                            return (
                                <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}