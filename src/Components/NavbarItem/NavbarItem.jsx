import PropTypes from 'prop-types';

const NavbarItem = ({route}) => {
    const {id,path, name} = route;
    return (
       
            <li className="mr-10  bg-slate-500 text-white px-5" key={id}><a href={path}>{name}</a></li>
    );
};


NavbarItem.propTypes = {
    route: PropTypes.object.isRequired
}


export default NavbarItem;