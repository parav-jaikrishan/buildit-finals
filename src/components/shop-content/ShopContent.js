import React, { useState } from "react";
import { Card } from "../card/Card";
import { ContentModal } from "../content-modal/ContentModal";
import { FaCoins } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./ShopContent.scss";

export const ShopContent = () => {
    const smoothieCards = [
        {
            name: 'Smoothie',
            img: "assets/smoothie.png"
        },
        {
            name: 'Smoothie',
            img: "assets/smoothie1.png"
        },
        {
            name: 'Smoothie',
            img: "assets/smoothie2.png"
        }
    ];
    const smoothieModals = [
        {
            name: 'Purple Smoothie',
            img: "assets/smoothie.png",
            content: "Gives the consumer pinpoint precision and concentration. Known side effects include exhaustion after effect wears off",
            cost: 50,
        },
        {
            name: 'Green Smoothie',
            img: "assets/smoothie1.png",
            content: "Gives the consumer the power of Earth-bending. Known side effects are that it's a hard power to control.",
            cost: 50,
        },
        {
            name: 'Yellow Smoothie',
            img: "assets/smoothie2.png",
            content: "Gives the consumer the ability to talk to animals. Some side effects are, well, some animals are annoying.",
            cost: 50,
        },
    ];
    const soupCards = [
        {
            name: 'Bat Popsicle',
            img: "assets/icecream1.png"
        },
        {
            name: 'Thunder Popsicle',
            img: "assets/icecream2.png"
        },
        {
            name: 'Spidey Popsicle',
            img: "assets/icecream3.png"
        }
    ];
    const soupModals = [
        {
            name: 'Bat Popsicle',
            img: "assets/icecream1.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect",
            cost: 50,
        },
        {
            name: 'Thunder Popsicle',
            img: "assets/icecream2.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect",
            cost: 50,
        },
        {
            name: 'Spidey Popsicle',
            img: "assets/icecream3.png",
            content: "Allows the user to experience spidey sense. Known side effects include mild headache and decrease in blood sugar levels.",
            cost: 50,
        }
    ];
    const [openedSmoothieModal, setOpenedSmoothieModal] = useState(
        Array(smoothieModals.length).fill(false)
    );
    const [openedSoupModal, setOpenedSoupModal] = useState(
        Array(smoothieModals.length).fill(false)
    );
    const [showModal, setShowModal] = useState("");
    const openSmoothieModal = i => {
        let arr = Array(openedSmoothieModal.length).fill(false);
        arr[i] = true;
        setOpenedSmoothieModal([...arr]);
        setShowModal("show");
    }
    const closeSmoothieModal = () => {
        setOpenedSmoothieModal(Array(openedSmoothieModal.length).fill(false));
    }
    const openSoupModal = i => {
        let arr = Array(openedSoupModal.length).fill(false);
        arr[i] = true;
        setOpenedSoupModal([...arr]);
        setShowModal("show");
    }
    const closeSoupModal = () => {
        setOpenedSoupModal(Array(openedSoupModal.length).fill(false));
    }
    const [cartItems, setCartItems] = useState([]);
    const addSmoothieToCart = i => {
        let arr = cartItems;
        arr.push(smoothieModals[i]);
        setCartItems([...arr]);
    }
    const addSoupToCart = i => {
        let arr = cartItems;
        arr.push(soupModals[i]);
        setCartItems([...arr]);
    }
    return (
        <div className="shop-container">
            <div className="shop-content">
                <div className="shop-section">
                    <h1>Super Smoothies</h1>
                    <div className="card-container">
                        {
                            smoothieCards.map((card, index) => {
                                return (
                                    <Card key={index} name={card.name} image={card.img} clicked={() => openSmoothieModal(index)}/>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="shop-section">
                    <h1>Super Soups</h1>
                    <div className="card-container">
                        {
                            soupCards.map((card, index) => {
                                return (
                                    <Card key={index} name={card.name} image={card.img} clicked={() => openSoupModal(index)}/>
                                );
                            })
                        }
                    </div>
                </div>
                {
                    //eslint-disable-next-line
                    smoothieModals.map((modal, index) => {
                    if(openedSmoothieModal[index])
                        return (
                            <ContentModal key={index} show={showModal} data={modal} onClose={() => closeSmoothieModal()} buy={true} addItems={() => addSmoothieToCart(index)}/>
                        );
                })}
                {
                    //eslint-disable-next-line
                    soupModals.map((modal, index) => {
                    if(openedSoupModal[index])
                        return (
                            <ContentModal key={index} show={showModal} data={modal} onClose={() => closeSoupModal()} buy={true} addItems={() => addSoupToCart(index)}/>
                        );
                })}
            </div>
            <div className="super-cart">
                <h1>Your super cart <AiOutlineShoppingCart className="icon cart"/></h1>
                <div className={cartItems.length > 0 ? "cart-container" : ""}>
                    {
                        cartItems.map((card, i) => {
                            return (
                            <div className="item" key={i}>
                                <div className="text">
                                    <h2>{card.name}</h2>
                                    <p>{card.content}</p>
                                    <p className="cost">Price: {card.cost} <FaCoins/></p>
                                </div>
                                <img src={card.img}/>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}