import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const SearchForm = ({
    onSubmit,
    isLoading
}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isLoading) {
            onSubmit(value);
            setValue('');
        }
    };
    return (
        <form
            className={classnames('search-form', {
                'is-loading': isLoading
            })}
            onSubmit={handleSubmit}
        >
            <div className="search-form__inner">
                <div className="search-form__field">
                    <input
                        className="search-form__input"
                        type="text"
                        value={value}
                        placeholder="AB 123 C"
                        maxLength="6"
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>
            </div>
        </form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default SearchForm;
