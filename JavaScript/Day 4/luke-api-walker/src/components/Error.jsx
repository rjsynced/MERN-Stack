import React from 'react'

const Error = () => {
    return (
        <div>
            <label>These arn't the driods you're looking for</label> <br />
            <img src="data:image/jpeg;base64,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" alt="obiwan" />
        </div>
    )
}

export default Error