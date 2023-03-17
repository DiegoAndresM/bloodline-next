
import Head from 'next/head';
import Layout from '../components/layout'




const homepage = () => {
    return (

        <Layout>
            <div className="p-4 sm:ml-28">
                <div className="flex p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    
                    <div className="flex mb-4  flex-col basis-2/3 bg-base-100 gap-4">

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

                        <div className="flex  shadow-xl">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUUQDPJSUoiDVHqHStGIgXqT0fvOC_5IXqQ&usqp=CAU" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
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
                            <div className="card flex-shrink-0 justify-items-center w-full max-w  bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>





                </div>
            </div>


        </Layout>

    )
}

export default homepage;