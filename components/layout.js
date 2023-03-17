import Head from 'next/head'
import Navbar from './navbar'


const Layout = (props) => {
  return (
    <div>
        <Head>
            <title>Next js proyect</title>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@2.50.1/dist/full.css" rel="stylesheet" type="text/css"/>
            
        </Head>
        <Navbar/>
        
        
        
        <div>
            {props.children}
        </div>
    </div>
  )
}



export default Layout;