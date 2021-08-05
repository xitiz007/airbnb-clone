import Image from 'next/image';

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px]">
            <Image src="https://links.papareact.com/0fm" objectFit="cover" layout="fill" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="bg-white px-10 py-4 my-3 font-bold rounded-full shadow-md hover:shadow-xl text-purple-500 active:scale-90 transition duration-150">
                    I'm flexible
                </button>
            </div>
        </div>
    )
}

export default Banner
