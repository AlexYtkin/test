import React, { Component} from "react";


class Profile extends Component {
    constructor(props){
        super(props);
        this.authState = false;
    }

    componentWillMount(){
        this.authState = localStorage.getItem('auth');
        console.log(this.authState)
    }

    render(){
        const pageContent = <div className="segment"><br/><p>Username: admin </p></div>;
        return(
            <div>
                {(this.authState === 'true') ? pageContent : ""}
            </div>
        )
    }
}

export default Profile;