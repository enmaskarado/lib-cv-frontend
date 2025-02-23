import React from 'react'

function Certificado({certificado}) {
    console.log(certificado);
    return (
            <div className="card m-4 border-0" style={{"width": "18rem"}}>
                <img className="card-img-top" src={certificado.image}/>
                    <div className="card-body">
                        <h5 className="card-title">{certificado.name}</h5>
                    </div>
            </div>
    )
}

export default Certificado
