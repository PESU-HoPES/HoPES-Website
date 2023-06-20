"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const CarouselCard = ({ title, imageUrl, link, num, length }) => {
	useEffect(() => {
		let progress = 50;
		let startX = 0;
		let active = 0;
		let isDown = false;

		const speedWheel = 0.02;
		const speedDrag = -0.1;

		const getZindex = (array, index) =>
			array.map((_, i) =>
				index === i ? array.length : array.length - Math.abs(index - i)
			);

		const $items = document.querySelectorAll(".carousel-item");

		const displayItems = (item, index, active) => {
			const zIndex = getZindex([...$items], active)[index];
			item.style.setProperty("--zIndex", zIndex);
			item.style.setProperty(
				"--active",
				(index - active) / $items.length
			);
		};

		const animate = () => {
			progress = Math.max(0, Math.min(progress, 100));
			active = Math.floor((progress / 100) * ($items.length - 1));

			$items.forEach((item, index) => displayItems(item, index, active));
		};
		animate();

		$items.forEach((item, i) => {
			item.addEventListener("click", () => {
				progress = (i / $items.length) * 100 + 10;
				animate();
			});
		});

		const handleWheel = (e) => {
			const wheelProgress = e.deltaY * speedWheel;
			progress = progress + wheelProgress;
			animate();
		};

		const handleMouseDown = (e) => {
			isDown = true;
			startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
		};

		const handleMouseUp = () => {
			isDown = false;
		};

        const handleMouseMove = (e) => {
            if (e.type === 'mousemove') {}
            if (!isDown) return
            const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
            const mouseProgress = (x - startX) * speedDrag
            progress = progress + mouseProgress
            startX = x
            animate()
          }
          

		document.addEventListener("mousewheel", handleWheel);
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
		document.addEventListener("touchstart", handleMouseDown);
		document.addEventListener("touchmove", handleMouseMove);
		document.addEventListener("touchend", handleMouseUp);

		return () => {
			document.removeEventListener("mousewheel", handleWheel);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("touchstart", handleMouseDown);
			document.removeEventListener("touchmove", handleMouseMove);
			document.removeEventListener("touchend", handleMouseUp);
		};
	}, []);
	return (
		<div
			className={`carousel-item`}
			style={{ "--items": length }}
		>
			<div className="carousel-box">
				<div className="title absolute bottom-[20px] left-[20px] z-10 text-white">
					{title}
				</div>
				<div className="num absolute left-[20px] top-[10px] z-10 text-white ">
					{num}
				</div>
				<Image
					className="pointer-events-none h-full w-full object-cover"
					height={400}
					width={300}
					alt={`${title}-thumbnail`}
					src={imageUrl}
				/>
			</div>
		</div>
	);
};

export default CarouselCard;
