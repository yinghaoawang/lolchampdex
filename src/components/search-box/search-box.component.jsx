import { Component } from "react";

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