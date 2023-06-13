export default function Home() {
	return (
		<>

			<h1 className='font-opensans text-3xl font-bold underline'>
				Hello world!
			</h1>
			<p className="text-green-100 xs:text-orange-500 sm:text-slate-400 md:bg-red-400 lg:bg-yellow-300 xl:text-rose-800 2xl:bg-violet-500">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, sapiente.
			</p>
			<div className="flex gap-4 flex-wrap">
				<p className="shadow-custom-xs w-20 h-20 bg-primary-100 rounded-md"></p>
				<p className="shadow-custom-sm w-20 h-20 bg-primary-200 rounded-md"></p>
				<p className="shadow-custom-md w-20 h-20 bg-primary-300 rounded-md"></p>
				<p className="shadow-custom-lg w-20 h-20 bg-primary-400 rounded-md"></p>
				<p className="shadow-custom-hover w-20 h-20 bg-primary-500 rounded-md"></p>
				<p className="shadow-custom-xs w-20 h-20 bg-primary-600 rounded-md"></p>
				<p className="shadow-custom-xs w-20 h-20 bg-primary-700 rounded-md"></p>
				<p className="shadow-custom-xs w-20 h-20 bg-primary-800 rounded-md"></p>
				<p className="shadow-custom-xs w-20 h-20 bg-primary-900 rounded-md"></p>
				<p className="shadow-custom-xs w-20 h-20 bg-primary-950 rounded-md"></p>
			</div>
		</>
	);
}
