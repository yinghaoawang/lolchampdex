import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props;
        return (
            <input
                className={className}
                placeholder={placeholder}
                type='search'
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;