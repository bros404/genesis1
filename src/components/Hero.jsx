import { setGlobalState, useGlobalState } from '../store'
// import { heroBackground, robot, stars, } from "../assets";
import Button from '../pagecomponents/common/Button';
import Section from "../pagecomponents/common/Section";
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero1"
    >
       
        
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6 text-4xl leading-relaxed font-bold">
          Making Donations&nbsp;FAST, SECURE & TRANSPARENT&nbsp; with {` `}
          <span className="inline-block relative">
            FundeX Genesis{" "}
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-base lg:mb-8">
          Embrace Web3.0 and the Decentralized world. Make straightforward
          charitable donations using Cryptocurrency on the Blockchain.
        </p>
        <Button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " href=""
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </Button>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div
              className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
            >
              <span
                className="text-lg font-bold text-white
            leading-5"
              >
                {stats?.totalProjects || 0}
              </span>
              <span>Campaigns Created</span>
            </div>
            <div
              className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
            >
              <span
                className="text-lg font-bold text-white
            leading-5"
              >
                {stats?.totalBacking || 0}
              </span>
              <span>Campaign Donated</span>
            </div>
            <div
              className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
            >
              <span
                className="text-lg font-bold text-white
            leading-5"
              >
                {stats?.totalDonations || 0} ETH
              </span>
              <span>Amount Donated</span>
            </div>

            {/* <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={homeBackground}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                
              </div> */}
          </div>

          {/* <Gradient /> */}
        </div>
       



      </div>
    </Section>
    // <div className="text-center bg-gradient-to-b from-violet-900 to-gray-900 text-white py-24 px-6 min-h-full  pb-20">
    //   <h1
    //     className="text-xl md:text-4xl xl:text-4xl font-bold
    //   tracking-tight pt-20 mb-12"
    //   >
    //     <span className="capitalize">Making Donations and Fundings <br />
    //       FAST, SECURE and TRANSPARENT with </span>
    //     <br />
    //     <span className="uppercase text-violet-500">FundeX</span>
    //   </h1>
    //   <div className="flex justify-center items-center space-x-2">
    //     <button
    //       type="button"
    //       className="inline-block px-6 py-2.5 bg-violet-800
    //     text-white font-bold text-xs leading-tight uppercase
    //     rounded-full shadow-md hover:bg-violet-900 "
    //       onClick={() => setGlobalState('createModal', 'scale-100')}
    //     >
    //       Add Project
    //     </button>

    //     <button
    //       type="button"
    //       className="inline-block px-6 py-2.5 border-2 border-violet-600
    //     font-bold text-xs leading-tight uppercase text-violet-600
    //     rounded-full shadow-md bg-transparent hover:bg-violet-800
    //     hover:text-white"
    //     >
    //       Back Projects
    //     </button>
    //   </div>

    //   <div className="flex justify-center items-center mt-10">
    //     <div
    //       className="flex flex-col justify-center items-center
    //       h-20 border shadow-md w-full"
    //     >
    //       <span
    //         className="text-lg font-bold text-white
    //         leading-5"
    //       >
    //         {stats?.totalProjects || 0}
    //       </span>
    //       <span>Projects</span>
    //     </div>
    //     <div
    //       className="flex flex-col justify-center items-center
    //       h-20 border shadow-md w-full"
    //     >
    //       <span
    //         className="text-lg font-bold text-white
    //         leading-5"
    //       >
    //         {stats?.totalBacking || 0}
    //       </span>
    //       <span>Backings</span>
    //     </div>
    //     <div
    //       className="flex flex-col justify-center items-center
    //       h-20 border shadow-md w-full"
    //     >
    //       <span
    //         className="text-lg font-bold text-white
    //         leading-5"
    //       >
    //         {stats?.totalDonations || 0} ETH
    //       </span>
    //       <span>Donated</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Hero
