/* eslint-disable react/prop-types */
const ProductCard = ({name, price, stock, gadgetType, img}) => {
    return ( 
        <article className="p-4">
         <div>
            <img src={img} alt="" />
         </div>
         <div>
            <h1 className="font-bold">{name}</h1>  
            <h5 className="text-sm bg-neutral-800 inline p-1 rounded-md font-medium">{gadgetType}</h5>
            <h3 className="text-emerald-200 font-semibold">{price}</h3>
            <h4 className="text-md text-red-100">Number left in stock: {stock}</h4>
            
         </div>
        </article>
     );
}

export default ProductCard;