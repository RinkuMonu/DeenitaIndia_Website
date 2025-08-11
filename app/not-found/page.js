"use client";

import Image from "next/image";

export default function NotFoundPage() {
  return (
    <section className="container">
      <div className="relative flex flex-col items-center justify-center text-center overflow-hidden">


<div className="z-10 hidden md:block">
  <Image
    src="/Image/cloud-l.png"
    alt="404 Illustration"
    width={280}
    height={240}
    priority
    className="absolute right-30 top-40 mt-30 float-x-4"
  />
</div>

<div className="z-10 hidden md:block">
  <Image
    src="/Image/cloud-r.png"
    alt="404 Illustration"
    width={280}
    height={240}
    priority
    className="absolute top-20 left-30 mt-30 float-x-5"
  />
</div>



        <div className="z-10">
          <Image
            src="/Image/404-frame.png"
            alt="404 Illustration"
            width={300}
            height={120}
            priority
            className="md:mt-30 mt-20"
          />
        </div>


        <div className="flex">
          <div className="z-10 absolute left-20 top-125 float-x-1">
            <Image
              src="/Image/cloud-1.png"
              alt="404 Illustration"
              width={460}
              height={300}
              priority
            />
          </div>

          <div className="relative z-10 float-x-2">
            <Image
              src="/Image/cloud-2.png"
              alt="404 Illustration"
              width={440}
              height={260}
              priority
            />
          </div>

          <div className="z-10 absolute right-24 top-125 float-x-3">
            <Image
              src="/Image/cloud-3.png"
              alt="404 Illustration"
              width={460}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
