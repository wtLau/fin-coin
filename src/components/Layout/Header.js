import React from 'react';
// import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import coinsLogo from '../../assets/coinsLogo.png';
// import FilterList from '../FilterList';
// import { itemListFilter } from '../../redux/modules/items';

import './style.css';

const style = {
    margin: 12
};

const Header = ({ dispatch, itemFilter }) => (
    <div className="header">
        <div className="logo_menu">
            <Link to="/">
                <img className="logo" alt="logo" src={coinsLogo} />
            </Link>
            {/* <FilterList
                dispatch={dispatch}
                handleChange={itemListFilter}
                itemFilter={itemFilter}
            /> */}
        </div>
        <div className="buttons">
            <Link to="/">
                <RaisedButton label="Coins" primary="true" style={style} />
            </Link>
            <Link to="/news">
                <RaisedButton label="News" style={style} />
            </Link>
        </div>
    </div>
);

// function mapStateToProps(state) {
//     return {
//         itemFilter: state.items.itemFilter
//     };
// }

// export default connect(mapStateToProps)(Header);
export default Header;
