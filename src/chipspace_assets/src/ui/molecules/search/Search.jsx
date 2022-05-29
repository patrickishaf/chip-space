import React, { useState } from 'react';
import '../../../style/Search.css';
import searchIcon from '../../../assets/vectors/ic-search.svg';

function Search({ onClickSearch, height, width }) {
    const [isActive, setIsActive] = useState(false);

    function onSearchClicked (event) {
        setIsActive(!isActive);
        onClickSearch();
        console.log('THE NEW VALUE OF IS_ACTIVE IS ', isActive);
    }

    function submitForm(submissionEvent) {
        console.log('THE FORM HAS BEEN SUBMITTED. THE FORM EVENT IS: ', submissionEvent);
    }

    function SearchEntryField() {
        return (
            <div>
                <form onSubmit={submitForm} method="post" className='row search-form'>
                    <input type="text" name="searchQuery" id="search-query" className='search-entry-field' placeholder='What are you looking for?'/>
                    <p onClick={() => {
                        setIsActive(!isActive);
                        onClickSearch();
                    }} >X</p>
                </form>
            </div>
        )
    }

    return (
        <div className='row'>
            <div className={'row ' + (isActive ? 'search-icon-active' : undefined)}>
                <img width={width} height={height} onClick={onSearchClicked} src={searchIcon} alt="search for NFT listing to rent" className='search-btn' />
                {
                    isActive && <SearchEntryField />
                }
            </div>
        </div>
        
    );
}

export default Search;