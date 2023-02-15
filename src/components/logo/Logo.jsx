const { useState } = require("react")

const Logo = ({type= "default"}) => {
    return (
        <>
            {type == "default" && <img src="/images/logo.svg" alt="" />}
            {type == "muted" && <img src="/images/logo-muted.svg" alt="" /> }
        </>
    )
}

export default Logo;