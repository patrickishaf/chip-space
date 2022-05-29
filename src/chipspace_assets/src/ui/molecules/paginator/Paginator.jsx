import React from 'react';
import '../../../style/Paginator.css';
import leftArrow from '../../../assets/vectors/ic-arrow-left.svg';
import rightArrow from '../../../assets/vectors/ic-arrow-right.svg';

function Paginator(props) {
    var pageNumbers = [];
    for (let i = 1; i <= props.numberOfPages ; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='paginator row'>
            <img src={leftArrow} alt="previous page" className="arrow-btn"/>
            <button className="text-btn">First</button>
            {
                pageNumbers.map((pageNumber) => <button key={pageNumber * 0.2} className="text-btn">{pageNumber}</button>)
            }
            <button className="text-btn">Last</button>
            <img src={rightArrow} alt="next page"  className="arrow-btn" />
        </div>
    );
}

export default Paginator;