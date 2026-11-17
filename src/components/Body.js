
import React from 'react'
import "../styles/Body.css";
import { useState } from 'react';
import { store } from '../productsStore/Store';
import HoverImage from './HoverImage';
import { Link } from 'react-router-dom';


const Body = () => {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);


    const showHandler = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }

    const showHandler2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
        setShow4(false)
    }

    const showHandler3 = () => {
        setShow3(true)
        setShow(false)
        setShow2(false)
        setShow4(false)
    }

    const showHandler4 = () => {
        setShow4(true)
        setShow(false)
        setShow2(false)
        setShow3(false)
    }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }
    return (
        <div>
            <div className='categoryHold flex flex-col gap-14 font-normal absolute left-16 top-11'>

                <div className='bodyHold lineHeight w-56 w56rem' onMouseMove={showHandler}>
                    <p className=' font-semibold hover-underline-animation'>BODY</p>
                </div>

                <div className='hairHold lineHeight w-56' onMouseMove={showHandler2}>
                    <p className=' font-semibold hover-underline-animation'>HAIR</p>
                </div>

                <div className='travelHold w-52 lineHeight' onMouseMove={showHandler3}>
                    <p className=' font-semibold hover-underline-animation'>TRAVEL</p>
                </div>



                <div className='newHold lineHeight' onMouseMove={showHandler4}>
                    <p className=' font-semibold hover-underline-animation'>NEW</p>
                </div>



            </div>



            {show && <div className=' z-50 bodyContent color text-base transition' onMouseLeave={dontShowHandler}>
                <p>   Body Wash </p>
                <p>   Body Scrub </p>
                <p>   Body Lotions </p>
                <p>   Body Oil </p>
                <p>   Hand Wash </p>
                <p>   Hand Creams </p>

                <div className='bodyTypeHold'>
                    {store.map((item) => {
                        if (item.type === "navbar-BodyType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>
                                    <div className="bodyTypeIndivitual">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg || item.primaryImage} className="rounded-xl bodyTypeImage" alt={item.name} />
                                        <p className='fs bodyTypeName'>{item.name}</p>
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                </div>

            </div>}



            {show2 && <div className=' z-50 hairContent flex flex-col transition2' onMouseLeave={dontShowHandler}>
                <div className='hairTypeCategoryONE flex flex-col gap-8'>
                    <p className=' font-bold text-xl'>  CATEGORY </p>
                    <p>  Shampoos </p>
                    <p>  Conditioners </p>
                    <p>  Treatments </p>
                </div>


                <div className='hairTypeCategoryTWO flex-col flex gap-10'>
                    <p className='font-bold'>  HAIR CONCERN </p>
                    <p>  Deep Cleanse </p>
                    <p>  Oily </p>
                    <p>  Dry </p>
                    <p>  Volume </p>
                    <p>   Normal </p>
                </div>

                <div className='hairImageHold flex flex-row gap-10'>
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Signature_Foaming_Facial_Cleanser_125ml_01_Product_540x.jpg?v=1599504600' alt='Natural haircare' className=' rounded-xl w-52' />
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Signature_Facial_Moisturiser_125ml_01_Product_540x.jpg?v=1599504612' alt='Sustainable lifestyle' className=' rounded-xl w-52' />
                </div>

                <div className='hairTextHold flex flex-row relative font-semibold'>
                    <p className='flex flex-row flex-wrap w-56'>Make The Switch! Why Natural Haircare Is Best</p>
                    <p className='flex flex-row flex-wrap w-56'>How to lead a natural & sustainable lifestyle</p>
                </div>



            </div>}

            {show3 && <div className='z-50 travelContent transition3' onMouseLeave={dontShowHandler}>
                <div className='flex flex-row'>
                    <div className='TravelStoreHold flex flex-row gap-16'>
                        {store.map((item) => {
                            if (item.type === "navbar-TravelType") {
                                return (
                                    <Link to={`/${item.id}`} key={item.id}>

                                        <div key={item.id} className="TravelIndivitual">
                                            <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" alt={item.name} />
                                            <p className=' font-semibold text-base px'> {item.name} </p>
                                            <p className='text-base font-normal text-center'> ${item.price} </p>
                                        </div>
                                    </Link>
                                )
                            }
                            return null
                        })}
                    </div>

                </div>
            </div>}




            {show4 && <div className='newContent relative left-72 text-base text-gray-500 top-16 transition4' onMouseLeave={dontShowHandler}>
                <div className='newCategoryHold flex flex-col gap-9'>
                    <p className='font-bold text-xl'>  CATEGORY </p>

                    <p>  Brightening Range </p>

                    <p>  Facial Masks </p>

                    <p>  Rosehip Range </p>

                    <p>  Shop All New Arrivals </p>
                </div>

                <div className='newTypeHold relative flex felx-row gap-10'>
                    {store.map((item) => {
                        if (item.type === "navbar-NewType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div className='newIndivitual'>
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" alt={item.name} />
                                        <p className='font-semibold text-center text-base px'> {item.name} </p>
                                        <p className='text-base font-normal text-center'> ${item.price} </p>
                                    </div>
                                </Link>
                            )
                        }
                        return null
                    })}
                </div>

            </div>}



        </div>
    )
}

export default Body
