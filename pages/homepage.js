
import Head from 'next/head';
import Layout from '../components/layout'
import Sidenav from '../components/sidenav'



const homepage = () => {
    return (

    <Layout>
        <div className="main">
          <div className="card card-side bg-base-100 shadow-xl">
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
        <br />;

        <div className="main">
          <div className="card card-side bg-base-100 shadow-xl">
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


        <div className="main-form">
            <div className="card w-96 bg-primary text-primary-content ">
            <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
            </div>
        </div>
        </div>
        </div>
        
      
    </Layout>
    
    )
}

export default homepage;