import React, {Fragment, useEffect} from 'react';

import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.svg';
import { appendScript } from '../razor/Paybtnscript.js';
import hero from './images/hero1.png';
const Exploreenjoy = () => {

      useEffect(() => {
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnone", "pl_I7JIn2PZzCZpeN");
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btntwo", "pl_I7JS7967JNUcKm");
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnthree", "pl_I7JS7967JNUcKm");
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnfour", "pl_I7JS7967JNUcKm");        
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnfive", "pl_I7JQJxYDRCVtXh"); 
      }, []);
    return(
        <Fragment>
            <header className="bg-white shadow">
                <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Explore and Enjoy
                </h1>
                </div>
            </header>
            <main>
                <div className="max-w-8xl mx-auto py-12 sm:px-6 lg:px-8">
                {/*<!-- Replace with your content -->*/}
                
                {/*
                <div className="px-4 py-6 sm:px-0 hidden">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>


            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                        <a href="#here" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#here" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Live demo
                        </a>
                        </div>
                    </div>



                </div>*/}
            <div className="grid grid-cols-2 gap-4 px-4 py-6 sm:px-0">
            <div className="mt-14 mx-0 max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-12 xl:mt-6">
                    <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">What you get </span>
                        <span className="block text-indigo-600 xl:inline">every month</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        My extra hour's is a monthly subscription box, that offer's life skills to kids related to projects, crafts and activities related to different areas.
                    </p><br/><br/>
                    
            <form id="btnone">
                        
            </form>

            <br/><br/>
                        <div className="grid grid-col-1">
                        
                    </div>     
                    </div>
                </div>
                <div className="mx-0">
                <img className="rounded h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ hero } alt=""/>
            </div>
            </div>

            </div>

            <div className=" bg-gray-200">
                <div className="max-w-8xl mx-auto py-16 sm:px-6 lg:px-8">
                    <div className="flex gap-32 px-4 py-8 sm:px-0 ">
                        <div className="mx-0 w-3/4">
                <h2 className="block text-4xl text-indigo-600 xl:inline">Lifeskill projects, crafts & activities on different areas</h2>
                    <p className="mt-6s text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Each box comes in a guided step by step instruction manual and consists of 2 to 6 projects containing different activities that consist of challenges to do as a family and high quality materials to complete all of the projects.          
                    </p> <br/>
                    <form id="btntwo">
                        
                    </form>

                        </div>
                        <div className="mx-0 w-1/4">
                            <img className="rounded h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ image2 } alt=""/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <div className="max-w-8xl mx-auto py-16 sm:px-6 lg:px-8">
                    <div className="flex gap-32 px-4 py-8 sm:px-0 ">
                        <div className="mx-0 w-1/4">
                            <img className="rounded h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ image3 } alt=""/>
                        </div>
                        <div className="mx-0 w-3/4">
                <h2 className="block text-4xl text-indigo-600 xl:inline">Get your kid ready for a real world in a fun way</h2>
                <p className="mt-6s text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Perfect thing to keep little hands and minds busy, while promoting bonding and learning. A task that willl actually keep them engaged and teach them something throughout the process.
                    </p> <br/>
                    <form id="btnthree">
                        
                        </form>

                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="max-w-8xl mx-auto py-16 sm:px-6 lg:px-8">
                    <div className="flex gap-32 px-4 py-8 sm:px-0 ">
                        <div className="mx-0 w-3/4">
                <h2 className="block text-4xl text-indigo-600 xl:inline">Joyful childhood</h2>
                    <p className="mt-6s text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            A great way top bring the outdoors inside. Keep your kids engaged during their boredom hours and get extra hours for you to. 
                    </p> <br/>
                    
            <form id="btnfour">
            
            </form>

                        </div>
                        <div className="mx-0 w-1/4">
                            <img className="rounded h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ image4 } alt=""/>
                        </div>
                    </div>
                </div>
            </div>





            <div className="">



            {/*<!-- This example requires Tailwind CSS v2.0+ -->*/}
            <div className="py-12 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Fun arena</h2>
                <p className="mt-12 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    We ship happiness crate at your door step!
                </p>
                <p className="mt-8 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Awesome monthly projects and more activities.
                </p>
                <br/>
                <form id="btnfive">
            
            </form>
                </div>

                <div className="mt-16">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14">
                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/*<!-- Heroicon name: outline/globe-alt -->*/}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Designed by a mother</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        We offer all tools necessary to sculpt children into wholesome confident social beings and most importantly enjoy their own company.
                    </dd>
                    </div>

                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/*<!-- Heroicon name: outline/scale -->*/}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Designed by a mother</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Kids age 6 - 14 plus get outside creative hours and more fun inculcated acyive hours.
                    </dd>
                    </div>

                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/*<!-- Heroicon name: outline/lightning-bolt -->*/}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Designed by a mother</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Offer your kids joyfull childhood that help them use their own imagination to create things.
                    </dd>
                    </div>

                    <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {/*<!-- Heroicon name: outline/annotation -->*/}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Designed by a mother</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Explore outdoors, make friends to play with and lots of fun and enjoyment.
                    </dd>
                    </div>
                </dl>
                </div>
            </div>
            </div>


                {/*<!-- /End replace -->*/}
                </div>
            </main>
        </Fragment>
    )
}

export default Exploreenjoy;