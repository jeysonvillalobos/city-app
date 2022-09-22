import React from 'react';
import './style.css';

const Pagination = ({browsePagination, total_pages, page}) => {

    const handleButon = (e) => {
        browsePagination(e);
    };

    const pagination = () => {
        let buttons = [];
        for(let i = 1; i <= total_pages; i++) {
            if(i === page) {
                buttons.push(<button key={i} className='pagination-number page-selected'>{i}</button>);
            } else {
                buttons.push(<button key={i} onClick={() => handleButon(i)} className='pagination-number'>{i}</button>);
            }
        }
        return buttons;
    };

    return (
        <div className='pagination'>
            { pagination() }
        </div>
    );

};

export default Pagination;
