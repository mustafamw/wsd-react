import React from 'react';
import './Main.scss';

function Main() {
  return (
    <article>
      <section className="blue">
        <div className="container">
          <h1>What we do?</h1>
          <div>
            <div className="col-grid-third">
              a
            </div>
            <div className="col-grid-third">
              b
            </div>
            <div className="col-grid-third">
              c
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </section>
      <section className="orange">
        <div className="container">
          <h1>What we do?</h1>
          <div>
            <div className="col-grid-half">
              a
            </div>
            <div className="col-grid-half">
              b
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </section>
    </article>
  );
}

export default Main;
