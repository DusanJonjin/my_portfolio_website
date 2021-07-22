import { useEffect } from 'react';

function usePageMount (firstMount, otherContext, pageName, linkPosition) {

    const { 
        handleFirstMount, 
        sideMenu, 
        hideSideMenu, 
        traceNavPointPosition, 
        unblurPage
    } = otherContext;

    /*We need this so that mobile view nav menu can have slide effect, 
      because on every route change Page component mounts and unmounts: */
    useEffect(() => {
        if (firstMount[pageName]) setTimeout(() => 
            handleFirstMount(pageName), 1500);
        if (sideMenu) hideSideMenu();
        traceNavPointPosition(linkPosition);
        unblurPage();
    // eslint-disable-next-line
    }, [])

    return null;

}

export default usePageMount