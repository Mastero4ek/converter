function getData(url) {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "rtN26E2yCtl2p65zFb77ZeAbdHuDeR3B");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    return fetch(url, requestOptions).then(response => response.json())
}

export { getData }