import React from 'react';

function Loading() {
    return(
        <>
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <progress className="progress is-small is-primary" max="100">15%</progress>
                </div>
            </section>
        </>
    )
}

export default Loading;