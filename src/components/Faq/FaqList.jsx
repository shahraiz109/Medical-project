import React from 'react';
import { faqs } from '../../assets/data/faq';
import FaqItem from './FaqItem';

const FaqList = () => {
    return (
        <ul className='mt-[38px]'>
            {faqs && Array.isArray(faqs) ? (
                faqs.map((item, index) => (
                    <FaqItem item={item} key={index} />
                ))
            ) : (
                <p>No FAQs available.</p>
            )}
        </ul>
    );
};

export default FaqList;
