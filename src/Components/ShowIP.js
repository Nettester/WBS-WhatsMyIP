import React, { useState } from 'react'
import { getGeolocation } from '../getIp';

export default function ShowIP() {
//console.clear()
    const [userIp, setUserIp] = useState("");    

    if(userIp===""){
        getGeolocation().then(res => setUserIp(res.ip));
    }
    
    return (
        <>
            <div>ShowIP</div>
            {userIp}
        </>
        

    )
}
