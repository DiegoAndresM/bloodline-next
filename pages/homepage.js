
import Head from 'next/head';
import Layout from '../components/layout'
import Request from '../components/cards-req'
import prisma from '../lib/prismadb';




export default function homepage () {
    return (

        <Layout>
            <div className="p-4 sm:ml-28">
                <div className="flex p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div className="flex mb-4  flex-col basis-2/3 bg-base-100 gap-4">
                        {request.map((request) => (
                            <Request request={request} key={request.id} />
                        ))}

                        <div className="flex w-full shadow-xl">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUUQDPJSUoiDVHqHStGIgXqT0fvOC_5IXqQ&usqp=CAU" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Hugo Alberto Sanachez</h2>
                                <p>Hospital Angeles</p>
                                <p>Moderado</p>
                                <p>61478027832</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Contactar</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full shadow-xl">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUUQDPJSUoiDVHqHStGIgXqT0fvOC_5IXqQ&usqp=CAU" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex basis-1/3 justify-items-end justify-center w-60 mb-auto bg-base-100">
                        <div className="items-right justify-items-end justify-center rounded shadow-xl h-auto w-11/12">

                            <form action="/api/create_req" method='post'>
                                <input type="hidden" name="remember" defaultValue="true" />

                                <div className="card flex-shrink-0 justify-items-center w-full max-w  bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text ">Nombre del paciente</span>
                                            </label>
                                            <input type="text" name="p_name" id="p_name" placeholder='Nombre del paciente' className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Hospital en el que se encuentra</span>
                                            </label>
                                            <input type="text" name="h_name" id="h_name" placeholder="Hospital angeles" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Tipo de sangre que necesita</span>
                                            </label>
                                            <input type="text" name="b_type" id="b_type" placeholder="A+" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Numero de telefono al que se puedan comunicar</span>
                                            </label>
                                            <input type="text" name="p_number" id="p_number" placeholder="614-***-****" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Descripcion</span>
                                            </label>
                                            <input type="text" name="descrip" id="descrip" placeholder="Detalles extras" className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Create request</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>





                </div>
            </div>


        </Layout>

    )
}

export async function getStaticProps(context) {
    const data = await prisma.request.findMany({
        select: {
            paciente_name: true,
            hospital_name: true,
            blood_type: true,
            phone: true,
            description: true,
          },
    });
  
    //convert decimal value to string to pass through as json
    const requests = data.map((request) => ({}));
    return {
      props: { requests },
    };
  }
  