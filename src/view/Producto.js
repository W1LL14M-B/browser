



import React from "react";

export const Producto = () => {
  return (
    <div className="row">
      <div className="col-12 text-1">
        <h2>Browse By Categories</h2>
      </div>

      <div className="iconouno">
        <svg
          className="img-1 ms-auto"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
          style={{ marginLeft: "36px" }}
          aria-hidden="true"
        >
          <path d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z" />
        </svg>
      </div>

      <div className="col-12 text-2">
        <p>Top categories of the Week</p>
      </div>

      <div className="col-12 icon-container d-flex justify-content-around flex-wrap">
        {["Bombillo", "Torre", "Mensaje", "Candado", "Maleta","Virrete", "Avion", "Lampara"].map((label, index) => (
          <div className="icon-box" key={index}>
            <svg
              className="img-1"
              id="Layer_1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.31a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z" />
            </svg>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
