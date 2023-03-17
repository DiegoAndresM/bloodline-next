import { useLoadScript, GoogleMap, MarkerF, MarkerA } from '@react-google-maps/api';
import { useMemo } from 'react';
import Layout from '../components/layout'




const Home = () => {
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(
      () => ({ lat: 28.65258573001897, lng: -106.089925420283862 }),
      []
    );
   

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.key,
        libraries: libraries 
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

                        
                        zoom={14}
                        center={mapCenter}
                        mapTypeId={google.maps.MapTypeId.ROADMAP}
                        mapContainerStyle={{ width: '1200px', height: '800px', marginLeft: '40px' }}
                        onLoad={() => console.log('Map Component Loaded...')}
                        >
                             <MarkerF position={{ lat: 28.643298275113565, lng:-106.0785191330754 }} />
                            
                            
                            </GoogleMap>   


                            

                            
                        
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default Home;