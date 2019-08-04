import React, { Component } from 'react';
import './404.scss';
import notFound from '../../assets/img/resource/404.gif';

class NotFound extends Component {
    render() {
        return (
            <article>
                <section>
                    <div className="container not-found">
                        <div className="display-flex">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 info">
                                <h1>404</h1>
                                <p>PAGE NOT FOUND</p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 img">
                                <img src={notFound} alt="Page Not Found"/>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default NotFound;
