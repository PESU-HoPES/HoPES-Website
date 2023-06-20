'use client';

import { footerLinks } from '@/public/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord, FaTwitter, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='border-t bg-primary-600 px-5 py-5 ss:px-12 sm:px-10 md:px-24'>
			<div className='flex flex-wrap items-start justify-between gap-y-5'>
				{footerLinks.map((footerLink) => (
					<div
						key={footerLink.category}
						className='flex flex-col gap-y-4'
					>
						<h2 className='font-semibold'>{footerLink.category}</h2>
						<ul>
							{footerLink.sublinks.map((sublink) => (
								<motion.li
									key={sublink.title}
									onHover={{ scale: 1.1 }}
								>
									<Link
										href={sublink.href}
										className='text-xs'
									>
										{sublink.title}
									</Link>
								</motion.li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='flex items-center justify-between'>
				<p className='text-[10px] font-medium'>
					©2023 All rights reserved.
				</p>
				<div className='flex gap-x-2'>
					<a
						href='https://www.instagram.com/hopes.pesu/'
						alt='instagram'
					>
						<AiFillInstagram className='relative h-6 w-6 before:absolute before:left-1/2 before:top-1/2 before:h-20 before:w-20 before:translate-x-1/2 before:translate-y-1/2 before:bg-orange-400' />
					</a>
					<a
						href='https://www.linkedin.com/company/hopes-pesu/'
						alt='linkedin'
					>
						<AiFillLinkedin className='relative h-6 w-6 before:absolute before:left-1/2 before:top-1/2 before:h-20 before:w-20 before:translate-x-1/2 before:translate-y-1/2 before:bg-orange-400' />
					</a>
					<FaDiscord />
					<FaTwitter />
					<FaFacebookSquare />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
