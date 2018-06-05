//Higher Order Component  - A component that renders another component
//The goal of the Higher Order Component is to reuse code
//Render Highjacking
//Prop manipulation
//Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This info is :{props.info}</p>
    </div>
)

/*const withAdminWarning=(WarppedComponent)=>{
    return (props)=>( 
        <div>
            {props.isAdmin &&<p>This is private info please dont share</p>}
            <WarppedComponent {...props}/>
        </div>
    )
}*/

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ?(
                //Here we can spread any object we want
                <WrappedComponent {...props}/>
            ):(
                <p>Please Login</p>
            )}
        </div>
    )
    
}

// const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This are the details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details"/>,document.getElementById('app'));

