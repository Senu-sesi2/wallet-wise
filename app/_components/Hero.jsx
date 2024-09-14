import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Practical Approach to <br />
                <span className="text-2xl md:text-[6rem] text-primary font-bold mt-1 leading-none">
                  Helping Africans make wise financial decisions!
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/dashboard.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;

// import Image from 'next/image'
// import React from 'react'

// function Hero() {
//   return (
//     <section className="bg-gray-50 flex items-center flex-col">
//   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
//     <div className="mx-auto max-w-xl text-center">
//       <h1 className="text-3xl font-extrabold sm:text-5xl">
//         Practical Approach to
//         <strong className="font-extrabold text-primary sm:block"> Managing Personal finances </strong>
//       </h1>

//       <p className="mt-4 sm:text-xl/relaxed">
//         Helping Africans make wise financial decisions!
//       </p>
//     </div>
//   </div>
//   {/* <Image src={'/dashboard.png'} alt='dashboard'
//   width={1000}
//   height={700}
//   className='-mt-8 rounded-xl border-2'
//   /> */}
// </section>
//   )
// }

// export default Hero
