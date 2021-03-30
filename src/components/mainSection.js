import React, { useContext } from 'react';
import { AllCentralStateContext } from '../context/allCentralStateContext';

const MainSection = ({ children, pageName }) => {

    const {
        blurred,
        firstMount,
        darkTheme
    } = useContext(AllCentralStateContext);

    return (
        <section className={`main-section ${blurred ? 'blur' : ''}`}>
            <h1 className={`main-section-h1 ${!firstMount[pageName] ? 'h1-permanent' : ''} ${darkTheme ? 'h1-dark' : ''}`} >
                {pageName}
            </h1>
            {children}
        </section>
    )
}

export default MainSection;
