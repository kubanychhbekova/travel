import React from "react";
import { RxCross2 } from "react-icons/rx";
import byBus from "../../../back-end/byBus";
const Content = () => {
  console.log(byBus);
  return (
    <div id="content">
      <div className="container">
        <div className="content">
          <div className="content--search">
            <div className="content--search__block1">
              <h4>Where from?</h4>
            </div>
            <div className="content--search__block2">
              <h4>Where to?</h4>
            </div>
            <div className="content--search__btn">
              <button>Search</button>
            </div>
          </div>
          <div className="content--select1">
            <h4>Ysyk-kol</h4>
            <h4>Bishkek</h4>
            <h4>Cholpon-Ata</h4>
            <h4>Ysyk-Ata</h4>
            <h4>Osh</h4>
            <h4>Talas</h4>
            <h4>Naryn</h4>
          </div>
          <div className="content--select2">
            <h4>Ysyk-kol</h4>
            <h4>Bishkek</h4>
            <h4>Cholpon-Ata</h4>
            <h4>Ysyk-Ata</h4>
            <h4>Osh</h4>
            <h4>Talas</h4>
            <h4>Naryn</h4>
          </div>
          <div className="content--blocks">
            <div className="content--blocks__byPlane">
              <h1>BY PLANE</h1>
              <div className="content--blocks__byPlane--linea"></div>
            </div>
            <div className="content--blocks__byBus">
              <h1>BY BUS</h1>
              <div className="content--blocks__byBus--linea"></div>
            </div>
            <div className="content--blocks__byTrain">
              <h1>BY TRAIN</h1>
              <div className="content--blocks__byTrain--linea"></div>
            </div>
          </div>
          <div className="content--card">
            <center>
              <h1>Popular bus destinations</h1>
            </center>
            <div className="content--card__rout">
              {byBus.map((el) => {
                return (
                  <div className="content--card__rout--city">
                    <img src={el.img} alt="" />
                    <h1>{el.city}</h1>
                    {el.go.map((elem) => {
                      return (
                        <div className="content--card__rout--city__go">
                          <h4>{elem.city}</h4>
                          <h4>{elem.price.chas}</h4>
                          <h4>{elem.price.sena}</h4>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
