import React from "react";

const CarouselCard = ({title, imageUrl, link, num}) => {
	return (
		<div class="carousel-item">
			<div class="carousel-box">
				<div class="title">{title}</div>
				<div class="num">{num}</div>
				<img src={imageUrl} />
			</div>
		</div>
	);
};

export default CarouselCard;
