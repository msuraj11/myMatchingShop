import React from 'react';

export const Login = (props) => {
    const closeButtonHandler = () => {
        props.history.push('/');
    };

    return (
        <div id="modal">
            <div className="modal-contents">
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item tab-width">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Log-in</a>
                        </li>
                        <li className="nav-item tab-width">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sign-up</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <form className="mt-3 ml-5">
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" placeholder="E-mail or Phone number" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary">Log in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <form className="mt-3 ml-5">
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" placeholder="Enter Mobile number" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary">Send OTP</button>
                                    </div>
                                </div>
                            </form>    
                        </div>
                    </div>
                </div>
                <div className="close" onClick={closeButtonHandler}>&times;</div>
            </div>
        </div>
    );
}