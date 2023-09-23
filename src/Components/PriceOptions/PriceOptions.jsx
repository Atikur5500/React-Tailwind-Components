import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Fitness classes (limited)",
                "Unlimited fitness classes"
            ],
            "price": "$29.99/month"
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Full access to gym facilities",
                "Locker room access",
                "Unlimited fitness classes",
                "Personal training sessions (2/month)"
            ],
            "price": "$49.99/month"
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "Access for two adults and two children",
                "Full access to gym facilities",
                "Locker room access",
                "Unlimited fitness classes for all members"
            ],
            "price": "$89.99/month"
        }
    ]

    return (
        <div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
               
           </div>
        </div>
    );
};

export default PriceOptions;