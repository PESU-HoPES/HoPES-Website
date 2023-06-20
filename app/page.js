import { carouseldata } from "@/public/constants";
import CarouselCard from "./components/CarouselCard";
import TextAnimation from "./components/TextAnimation";
import SplineLogo from "./components/spline/Hero";

export default function Home() {
	return (
		<div className="z-10 mx-6 my-4">
			<SplineLogo />
			<TextAnimation size="large">Sarang K</TextAnimation>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
				itaque incidunt quaerat commodi magni sit, placeat ipsam aperiam
				iste unde molestiae exercitationem. Sapiente iste aut asperiores
				laborum unde quisquam, repudiandae eum dolores magni praesentium
				repellat? Consectetur quasi praesentium laudantium sunt eveniet
				libero deleniti beatae corporis impedit, illo debitis, nostrum
				mollitia?
			</p>

			<div class="carousel">
				{carouseldata.map((data) => (
					<CarouselCard
						key={data.title}
						{...data}
					/>
				))}
			</div>
		</div>
	);
}
