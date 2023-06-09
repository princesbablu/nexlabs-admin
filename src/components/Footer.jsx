import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import blur from '@/assets/blur/blur-footer.svg';


import logo from '@/assets/logo.png';
import social1 from '@/assets/social-icon-twitter.svg';
import social2 from '@/assets/social-icon-discord.svg';
import social3 from '@/assets/social-icon-paperplane.svg';
import social4 from '@/assets/social-icon-medium.svg';
import social5 from '@/assets/social-icon-linkedin.svg';
import social6 from '@/assets/social-icon-book.svg';
import social7 from '@/assets/social-icon-github.svg';

const Footer = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 -z-10">
                <Image src={blur} alt="" className="w-full h-full" />
            </div>
            <div className="container pb-10 pt-14">
                <div className="flex flex-col items-center">
                    <Image src={logo} alt="" />
                    <div className="flex mt-8 gap-7">
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social1} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social2} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social3} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social4} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social5} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social6} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-14 w-14 rounded-full bg-[#191C14]">
                            <Image src={social7} alt="" />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 mt-10">
                    <Link href="/" className="relative flex items-center justify-start gap-2 cursor-pointer">
                        <p className="text-[#d8dbd5]">
                            Policies &amp; Conditions
                        </p>
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-4 h-4"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g clipPath="url(#clip0_350_562)">
                                <path
                                    d="M11.1694 6.39661L5.43144 12.1346L4.48877 11.1919L10.2261 5.45394H5.16944V4.12061H12.5028V11.4539H11.1694V6.39661V6.39661Z"
                                    fill="#D8DBD5"
                                />
                            </g>
                            <defs>
                                <clippath id="clip0_350_562">
                                    <rect width={16} height={16} fill="white" transform="translate(0.5 0.120605)" />
                                </clippath>
                            </defs>
                        </svg>
                    </Link>
                    <Link href="/" className="relative flex items-center justify-start gap-2 cursor-pointer">
                        <p className="text-[#d8dbd5]">Referral Terms</p>
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-4 h-4"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g clipPath="url(#clip0_350_568)">
                                <path
                                    d="M11.1694 6.39661L5.43144 12.1346L4.48877 11.1919L10.2261 5.45394H5.16944V4.12061H12.5028V11.4539H11.1694V6.39661V6.39661Z"
                                    fill="#D8DBD5"
                                />
                            </g>
                            <defs>
                                <clippath id="clip0_350_568">
                                    <rect width={16} height={16} fill="white" transform="translate(0.5 0.120605)" />
                                </clippath>
                            </defs>
                        </svg>
                    </Link>
                    <Link href="/" className="relative flex items-center justify-start gap-2 cursor-pointer">
                        <p className="text-[#d8dbd5]">Brand Assets</p>
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-4 h-4"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g clipPath="url(#clip0_350_574)">
                                <path
                                    d="M11.1694 6.39661L5.43144 12.1346L4.48877 11.1919L10.2261 5.45394H5.16944V4.12061H12.5028V11.4539H11.1694V6.39661V6.39661Z"
                                    fill="#D8DBD5"
                                />
                            </g>
                            <defs>
                                <clippath id="clip0_350_574">
                                    <rect width={16} height={16} fill="white" transform="translate(0.5 0.120605)" />
                                </clippath>
                            </defs>
                        </svg>
                    </Link>
                </div>
                <p className="opacity-70 text-sm text-center text-[#d8dbd5] mt-6">
                    © 2023 NexLabs B.V. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer