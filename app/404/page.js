"use client";

import Image from "next/image";

export default function NotFoundPage() {
    return (
        <section className="container ">
            <div className="relative flex flex-col items-center justify-center text-center px-4  overflow-hidden">

                <div className="z-10">
                    <Image
                        src="/Image/cloud-l.png"
                        alt="404 Illustration"
                        width={240}
                        height={200}
                        priority
                        className="absolute right-30 top-40 mt-30"
                    />
                </div>
                <div className="z-10">
                    <Image
                        src="/Image/cloud-r.png"
                        alt="404 Illustration"
                        width={240}
                        height={200}
                        priority
                        className="absolute top-20 left-30 mt-30"
                    />
                </div>
                <div className="z-10">
                    <Image
                        src="/Image/404-frame.png"
                        alt="404 Illustration"
                        width={340}
                        height={160}
                        priority
                        className="mt-30"
                    />
                </div>
                <div className="flex background-wrap">
                    <div className="x1 z-10">
                        <Image
                            src="/Image/cloud-1.png"
                            alt="404 Illustration"
                            width={440}
                            height={260}
                            priority
                            className="cloud"
                        />
                    </div>
                    <div className="relative w-full h-[260px] overflow-hidden">
                        <div className="absolute z-10 animate-cloud">
                            <Image
                                src="/Image/cloud-2.png"
                                alt="404 Illustration"
                                width={440}
                                height={260}
                                priority
                                className="cloud"
                            />
                        </div>
                    </div>
                    <div className="x3 z-10">
        <Image
          src="/Image/cloud-3.png"
          alt="404 Illustration"
          width={440}
          height={260}
          priority
          className="cloud"
        />
        </div>
                </div>
            </div>
        </section>
    );
}
