import PropTypes from "prop-types";
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Features = ({features}) => {
    return (
        <div className="flex items-center mt-1">
            <BsFillCheckCircleFill></BsFillCheckCircleFill>
            <p className="text-justify ml-2">{features}</p>
        </div>
    );
};

Features.propTypes = {
    features: PropTypes.string.isRequired
}
export default Features;