import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Layout from '../components/layout'

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 28.649523337260085, lng: -106.08416335259865 }), []);

    return (
        <Layout>
            <div className="p-4 sm:ml-28">
                <div className="flex p-4  mt-14">
                <div className="flex  justify-items-end justify-center">
                    <GoogleMap zoom={10} center={center} mapContainerClassName="w-screen h-screen">
                        <MarkerF position={{lat: 28.649360327818002, lng:-106.06984629047494}} />
                        <MarkerF position={{lat: 28.643298275113565, lng:-106.0785191330754}} />
                        <MarkerF position={{lat: 28.630301493001465, lng:-106.12435367425002}} />
                        <MarkerF position={{lat: 28.66403507687505, lng:-106.13056612445934}} />
                    </GoogleMap> 
                    </div>
                </div>
            </div>
        </Layout>   
    );
}