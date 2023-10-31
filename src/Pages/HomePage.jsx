import StorePage from './Store'

const Home = () => {


    return ( 
        <section>
         <header className="w-full">
            
         </header>

         <main>
            <article className="welcome grid place-items-center">
             <div className="text-center text-4xl py-4">
                <h1 className="text-2xl ">Welcome to</h1>
                <h2 className="text-5xl py-2 font-semibold ">TechStore</h2>
             </div>
            </article>
           <StorePage/>

         </main>
        </section>
     );
}
 
export default Home;