import { useLoadScript, GoogleMap, MarkerF, MarkerA } from '@react-google-maps/api';
import { useMemo } from 'react';
import Layout from '../components/layout'



//Creamos funcion Home para renderizar
const Home = () => {
    const libraries = useMemo(() => ['places'], []); //Usamos librerias descargadas de google
    const mapCenter = useMemo(
        () => ({ lat: 28.65258573001897, lng: -106.089925420283862 }),//Le damos los valores donde se empezara a ver el mapa
        []
    );


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.key, //Credenciales que proporciona google, estas van conectadas con el archivo .env
        libraries: libraries
    });

    if (!isLoaded) {
        return <p>Loading...</p>; //Este if es utilizado para dar una pantalla de carga en caso de que tarde en renderizar
    }

    return (
        <Layout>
            <div className="p-4 sm:ml-28">
                <div className="flex p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div className="flex justify-items-end justify-center">

                        <GoogleMap

                            /* Esta etiqueta de GogleMap es la que utiliza la app para renderizar todo en este elemento, aqui mismo se le dan los parametros que necesitaremos como el zoom, que se utiliza para el zoom predeterminado con el que se iniciara la app. */
                            zoom={14}
                            center={mapCenter}
                            mapTypeId={google.maps.MapTypeId.ROADMAP}
                            mapContainerStyle={{ width: '1200px', height: '800px', marginLeft: '40px' }}
                            onLoad={() => console.log('Map Component Loaded...')}
                        >
                            <MarkerF position={{ lat: 28.643298275113565, lng: -106.0785191330754 }} />


                        </GoogleMap>






                    </div>
                </div>
            </div>
        </Layout>

    );
};
//exportamos la funcion home que contiene todo lo anterior
export default Home;