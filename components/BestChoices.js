import Image from 'next/image'
import React from 'react'

function BestChoices() {
    return (
        <>
            <section className='my-24'>
                <div className='container'>
                    <div className='md:flex justify-between align-middle'>
                        <p className="heading font-semibold ">
                            What Makes Us Your <br></br> <span className="theme-text">Best Choice</span>
                        </p>
                        <p className='md:max-w-sm pt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl  mx-auto mt-8">
                        <div className="relative group overflow-hidden border-b-4 border-r-4 border-gray-200 p-5 py-10 flex flex-col items-center justify-center">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <Image src="/images/secure-icon.png" alt="Secure" className="mb-4" width={40} height={40} />
                                <p className="theme-text text-xl">Secure</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden border-b-4 md:border-r-4 border-gray-200 p-5 py-10 flex flex-col items-center justify-center">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <Image src="/images/regulated-icon.png" alt="Regulated" className="mb-4" width={40} height={40} />
                                <p className="theme-text text-xl ">Regulated</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden border-b-4 border-r-4 md:border-r-0 border-gray-200 p-5 py-10 flex flex-col items-center justify-center">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <Image src="/images/audited-icon.png" alt="Audited" className="mb-4" width={40} height={40} />
                                <p className="theme-text text-xl ">Audited</p>
                            </div></div>

                        <div className="relative group overflow-hidden border-b-4 md:border-b-0  md:border-r-4 border-gray-200 p-5 py-10 flex flex-col items-center justify-center">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
                            <div className="relative z-10 flex flex-col items-center justify-center">
                            <Image src="/images/secure-icon.png" alt="Secure" className="mb-4" width={40} height={40} />
                            <p className="theme-text text-xl  ">Secure</p>
                        </div>
                    </div>
                        <div className="relative group overflow-hidden border-r-4 border-gray-200 p-5 py-10 flex flex-col items-center justify-center">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
                            <div className="relative z-10 flex flex-col items-center justify-center">
                        <Image src="/images/regulated-icon.png" alt="Regulated" className="mb-4" width={40} height={40} />
                        <p className="theme-text text-xl ">Regulated</p>
                    </div>
                    </div>
                        <div className="relative group overflow-hidden  p-5 py-10 flex flex-col items-center justify-center">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
                            <div className="relative z-10 flex flex-col items-center justify-center">
                 
                        <Image src="/images/audited-icon.png" alt="Audited" className="mb-4" width={40} height={40} />
                        <p className="theme-text text-xl ">Audited</p>
                    </div>
                    </div>
                </div>

            </div>
        </section >
        </>
    )
}

export default BestChoices
