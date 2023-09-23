import  PropTypes  from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-slate-500 p-5 flex flex-col text-white space-y-5">
           <div className="flex-grow">
               <div className="text-center flex-grow">
                    <span className="text-2xl font-bold">{name}</span>
                    <p className="text-xl font-bold">{price}</p>
               </div>
               <div className="mt-4">
                    {
                        features.map((features, index) => <Features key={index} features={features}></Features>)
                    }
               </div>
           </div>
                <button className="btn rounded-sm w-full font-semibold">Buy Now</button>
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;