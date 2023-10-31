/* eslint-disable react/prop-types */
const Hero = ({children}) => {
    return ( 
        <article className="relative herobanner">
         {children}
        </article>
     );
}
 
export default Hero;