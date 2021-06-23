import React from 'react'; 


export default function ImgProfile (pros) {


    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div className="mt-3">
                        <h4>{pros.fullname}</h4>
                        <p className="text-muted font-size-sm">{pros.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}