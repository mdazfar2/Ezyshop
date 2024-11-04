"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
  
interface RatingForkProps {
    type: 'star' | 'fork'
    count: string | number
    link: string
    bgColor: string
    btnBgColor: string
    btnTextColor: string
    btnHoverColor:string
    btnText: string
}
  
const RatingForkComponent: React.FC<RatingForkProps> = ({
    type,
    count,
    link,
    btnBgColor,
    btnTextColor,
    btnHoverColor,
    btnText,
  }) => {
    const [hovered, setHovered] = useState(false)
    const buttonStyle = {
      backgroundColor: hovered ? btnHoverColor : btnBgColor,
      color: btnTextColor,
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
    }
  
    return (
      <div
        className={`dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg md:w-[200px] text-3xl p-4 dark:bg-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.05)] w-full`}
      >
        {type === 'star' ? (
            <div className="inline-block text-[18px] w-[38px] dark:text-[#000] bg-Yellow rounded-full text-center p-0">
                <i className="fa-solid fa-star"></i>
            </div>
        ) : (
            <div className="inline-block text-[18px] w-[38px] dark:text-[#000] bg-Green rounded-full text-center p-0">
              <i className="fa-solid fa-code-fork"></i>
            </div>
        )}
        <div className="text-3xl my-1 mt-2">
          {count}
          <span className="text-lg m-2">
            {type === 'star' ? 'Stars' : 'Forks'}
          </span>
        </div>
        <Link href={link}>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={buttonStyle}
            className='text-base p-2 mt-2 rounded-lg text-center shadow-sm w-full'
          >
            {btnText}
          </button>
        </Link>
      </div>
    )
}

const GitHubStats = () => {

  const [starCount, setStarCount] = useState(0)
  const [forkCount, setForkCount] = useState(0)

  useEffect(() => {
    const getStarForkCount = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/mdazfar2/Ezyshop`
        )
        const data = await response.json()
        setStarCount(data.stargazers_count)
        setForkCount(data.forks)
      } catch (error) {
        console.error('Error fetching fork count:', error)
      }
    }
    getStarForkCount()
   }, [starCount, forkCount])

    return(

        <div className='min-h-52 p-8 rounded-3xl bg-gray-100 dark:bg-gray-700 bg-theme-primary-light mx-4 md:mx-8 mt-4 mb-20 border border-theme-secondary/25 shadow-md'>
            <div className= 'h-full flex flex-col lg:flex-row items-center justify-around'>
                <div className={'mr-0 lg:mr-8'}>
                    <div className="flex  items-start justify-between lg:px-4 pb-4 flex-col">
                        <div className="flex justify-center items-center">
                            <Image
                                src={"/ezyshop.png"}
                                width={60}
                                height={60}
                                alt="ezyshop logo"
                            />
                            <Link href="/" className="lg:ml:0 gap-x-2">
                                <p className="font-bold text-4xl text-customTeal dark:text-Green font-nunito">
                                    Ezyshop
                                </p>
                            </Link>
                        </div>
                        <p className={'ml-2 text-gray-700 dark:text-gray-200 text-justify pt-3'}>                      
                            EzyShop is a user-friendly platform that connects you to local
                            stores, offering a seamless shopping experience. Compare prices,
                            access exclusive deals, and enjoy hassle-free deliveries for
                            groceries, essentials, and organic products—all in one app.
                        </p>
                    </div>
                </div>
                <div className= 'flex sm:flex-row flex-col items-center justify-center gap-10 mt-4 lg:mt-0 w-full '>
                    
                    <RatingForkComponent
                        type="star"
                        count={starCount ? starCount : '150+'}
                        link="https://github.com//mdazfar2/Ezyshop"
                        bgColor="#575448"
                        btnBgColor="#FBD449"
                        btnHoverColor="#FFF455"
                        btnTextColor="black"
                        btnText="Give a star"
                    />

                    <RatingForkComponent
                        type="fork"
                        count={forkCount ? forkCount : '220+'}
                        link="https://github.com/mdazfar2/Ezyshop/blob/main/CONTRIBUTING.md"
                        bgColor="#403B56"
                        btnBgColor="#4CAF50"
                        btnHoverColor="#80d983"
                        btnTextColor="white"
                        btnText="Contribute now"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default GitHubStats;