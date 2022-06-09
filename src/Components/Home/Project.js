import React from 'react';
import "./Project.css"

const Project = ({img,title}) => {
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title justify-center">{title}</h2>
    <div class="card-actions justify-center">
      <button class="btn px-12 bg-rose-500 border-0">Live Site</button>
    </div>
  </div>
</div>
    );
};

export default Project;