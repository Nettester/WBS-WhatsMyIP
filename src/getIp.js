const apiKey = process.env.REACT_APP_IPIFY_KEY;

export const getIp = async () => {
    let res;
    try {
        const get = await fetch(`https://api.ipify.org?format=json`);
        const ip = await get.json();
        res = ip.ip;
    } catch (err) {
        res = err
    }
    return res
}

export const getGeolocation = async () => {
    
    try{
        const ip = await getIp()
        const fetcher = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
        const geoInfo = await fetcher.json();
        return geoInfo
    } catch (err) {
        return console.log(err);
    }
}