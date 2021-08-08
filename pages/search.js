import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import {format} from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ results }) 
{
  const router = useRouter();
  const { location, startDate, endDate, guests} = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const placeholder = `${location} | ${range} | ${guests} guests`;
  return (
      <div>
        <Header placeholder={placeholder}/>
        <main className="flex">
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs">300+ Stays - {range} - for {guests} guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

            <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>

            <div className="flex flex-col">
              {results?.map((item, index) => (
                <InfoCard 
                key={index} 
                img={item.img} 
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                long={item.long}
                lat={item.lat}
                />
              ))}              
            </div>


          </section>
        </main>
        <Footer />
      </div>
    );
}

export default Search;

export async function getServerSideProps(context)
{
  const response = await fetch('https://links.papareact.com/isz');
  const results = await response.json();
  return {
    props: {
      results
    }
  }
}
