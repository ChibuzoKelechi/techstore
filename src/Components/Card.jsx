/* eslint-disable react/prop-types */
const ProductCard = ({name, price, stock, gadgetType, img}) => {
    return ( 
        <article className="p-4 w-1/3 m-2 my-14">

         <div className="card-img "> 
            <img src={img} alt="productitem" className="w-full h-48 object-contain"/>
         </div>

         <div>
            <h1 className="font-bold text-2xl">{name}</h1>  
            <h5 className="text-sm text-neutral-500 inline rounded-md font-bold">{gadgetType}</h5>
            <h3 className="font-semibold text-xl">₦{price}</h3>
           <h4 className="text-md">Number left in stock: 
            <span className="">{stock}</span>
           </h4>
            
         </div>
        </article>
     );
}

export default ProductCard;