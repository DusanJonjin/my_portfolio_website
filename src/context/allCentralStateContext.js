import React, { useState, createContext } from 'react'

export const AllCentralStateContext = createContext();

const AllCentralStateProvider = ({ children }) => {

    const [firstMount, setFirstMount] = useState(
        {   
            profile: true,
            skills: true,
            projects: true,
            contact: true
        }
    );

    const [darkTheme, setDarkTheme] = useState(false);

    const [blurred, setBlurred] = useState(false);

    const [sideMenu, setSideMenu] = useState(false);

    const [navPointPosition, setNavPointPosition] = useState('0deg');

    const handleFirstMount = pageName => {
        if (firstMount[pageName]) {
            setFirstMount(prevFirstMount => {
                return {...prevFirstMount, [pageName]: false}
            });
        }
    };

    const handleThemeChange = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    };

    const unblurPage = () => {
        setBlurred(false);
    }

    const blurPage = () => {
        setBlurred(true);
    };

    const showHideSideMenu = () => {
        setSideMenu(prevShowSideMenu => !prevShowSideMenu);
    };

    const hideSideMenu = () => {
        setSideMenu(false);
    };

    const traceNavPointPosition = deg => {
        setNavPointPosition(deg)
    };

    const value = {
        darkTheme,
        handleThemeChange,
        blurred,
        unblurPage,
        blurPage,
        firstMount,
        handleFirstMount, 
        sideMenu, 
        showHideSideMenu,
        hideSideMenu,
        navPointPosition,
        traceNavPointPosition
    };

    return (
        <AllCentralStateContext.Provider
            value={value}
        >
            {children}
        </AllCentralStateContext.Provider>
    )
}

const centralStateProvider = ({element}) => (
    <AllCentralStateProvider>
        {element}
    </AllCentralStateProvider>
);

export default centralStateProvider;
