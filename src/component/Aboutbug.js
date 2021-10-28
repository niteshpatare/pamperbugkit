import React, {Fragment, useEffect} from 'react';
import ab1 from './images/bee.png';
import ab2 from './images/chalks.jpg';
import ab3 from './images/floral.png';
import ab4 from './images/kids.png';
import ab5 from './images/doodle.png';
import ab6 from './images/image1.jpg';
import ab7 from './images/image2.jpg';
import { appendScript } from '../razor/Paybtnscript.js';

const Aboutbug = () => {

    useEffect(() => {
        appendScript("https://checkout.razorpay.com/v1/payment-button.js", "btnone", "pl_IAiuucmhN31Rda");
      }, []);

    return (
        <Fragment>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-prm font-extrabold">About</span> <span className="text-sec"> Pamper Bug</span>
                </h1>
                </div>
            </header>
        <main>
      <div className="relative  overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-32 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-4xl ">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl text-sec">
                Bugs are live!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new collection will shelter you from the harsh elements of a world that doesn't care
                if you live or enjoy.
              </p>
              <br/>
              <div className="py-16">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Email</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                contact@pamperbug.com
                </p>
                <p className="mt-8 max-w-2xl text-xl text-gray-500 ">
                Awesome monthly projects and more activities.
                </p>
                <br />
                <form id='btnone'>

                </form>
                </div>
                
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-2">
                    <div className="flex items-center space-x-6 lg:space-x-10">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-64 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src={ ab1 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ ab2 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ ab4 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ ab3 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ ab5 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ ab6 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ ab7 }
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      </Fragment>
    )
  }
export default Aboutbug;  