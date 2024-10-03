import React from "react"
import '../../styling/avatar.css'

// TODO: Send username through props.
const Avatar = () => {
    const username = "Stian Rusvik";

    const getInitials = (str: string) => {
        const [firstName, lastName] = str.split(' ');
        return firstName.charAt(0).toLocaleUpperCase() + lastName.charAt(0).toLocaleUpperCase();
    }

    return (
        <div className="avatar-container">
            <div className="circle-background">
                { getInitials(username)}
            </div>
        </div>
    )
}

export default Avatar;