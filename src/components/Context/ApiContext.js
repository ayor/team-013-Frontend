import React from 'react';

const apiContext = React.createContext({
    loadingMessage: '',
    userName: '',
    email: '',
    courseOfStudy: '',
    sideDrawerStatus: false,
    
    setSideDrawer: () => { }
})

export default apiContext;