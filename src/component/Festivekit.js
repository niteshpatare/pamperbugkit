import React, {Fragment, useEffect} from 'react';
import { appendScript } from '../razor/Paybtnscript.js';
import diya1 from './images/diya1.jpg';
import diya2 from './images/diya2.jpg';
import diya3 from './images/diya3.jpg';
import diya4 from './images/diya4.jpg';
const Festivekit = () => {
    useEffect(() => {
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnfkone", "pl_I7JS7967JNUcKm");        
 
      }, []);
    return (
        <Fragment>
        <header className="bg-white shadow">
                <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-prm font-extrabold">Festive</span> <span className="text-sec"> Kit</span>
                </h1>
                </div>
            </header>
            <main>
            <div className="">
                <div className="max-w-8xl mx-auto py-4 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-4 lg:max-w-8xl lg:px-8 lg:grid-cols-2">
                    <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Whats inside?</h2>
                    <p className="mt-4 text-gray-500">Spice up the Diwali celebration by adding fun filled activities.</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Origin</dt>
                        <dd className="mt-2 text-base text-gray-500">Pre-plan the entire diwali.</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Material</dt>
                        <dd className="mt-2 text-base text-gray-500">Decorate your home with handmade decor items.</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Happiness</dt>
                        <dd className="mt-2 text-base text-gray-500">Celebrate togetherness by handmade gifts.</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Treat</dt>
                        <dd className="mt-2 text-base text-gray-500">Organise your small diwali party.</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Family</dt>
                        <dd className="mt-2 text-base text-gray-500">Enjoy fun activity which allows you to spend quality time with family.</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Lights</dt>
                        <dd className="mt-2 text-base text-gray-500">Decorate your home with colored diyas & lantern made by your little champ.</dd>
                        </div>

                    </dl>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-lg text-gray-900">Culture</dt>
                        <dd className="mt-2 text-base text-gray-500">Encourage your kids to be involved in festivities and help them to learn about our culture.</dd><br/>
                        <form id="btnfkone"></form>
                        </div>
                    </dl>

                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src={ diya1 } alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="bg-gray-100 rounded-lg"/>
                    <img src={ diya3 } alt="Top down view of walnut card tray with embedded magnets and card groove." className="bg-gray-100 rounded-lg"/>
                    <img src={ diya2 } alt="Side of walnut card tray with card groove and recessed card area." className="bg-gray-100 rounded-lg"/>
                    <img src={ diya4 } alt="Walnut card tray filled with cards and card angled in dedicated groove." className="bg-gray-100 rounded-lg"/>
                    </div>
                </div>
            </div>
            </main>
        </Fragment>
    )
}

export default Festivekit;