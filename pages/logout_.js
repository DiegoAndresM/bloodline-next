
export default function Logoutest(){
   
    async function logoutSubmit(){
           
        const res = await fetch('/api/logout',{
          method:'POST'
        });
        console.log(res);
    }

      return(
        <>
            <button className="btn" onClick={() => logoutSubmit()}>Log out</button>
        </>
      )
}