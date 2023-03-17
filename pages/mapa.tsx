import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';
import Layout from '../components/layout'
import type { NextPage } from 'next';



const Home: NextPage = () => {
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(
      () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
      []
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
          disableDefaultUI: true,
          clickableIcons: true,
          scrollwheel: false,
        }),
        []
      );

   

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.key as string,
        libraries: libraries as any,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <div className="p-4 sm:ml-28">
                <div className="flex p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div className="flex justify-items-end justify-center">
                        
                    <GoogleMap

                        options={mapOptions}
                        zoom={14}
                        center={mapCenter}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: '800px', height: '800px', marginLeft: '40px' }}
                        onLoad={() => console.log('Map Component Loaded...')}
                        >
                             <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
                            </GoogleMap>


                            

                            
                        
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default Home;