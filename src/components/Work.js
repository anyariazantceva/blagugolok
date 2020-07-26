import React from "react";
import PageTitle from "./PageTitle";
import WorkList from "./WorkList";
import "../assets/styles/work.css";

const Work = () => {
  return (
    <div className="work">
      <PageTitle text="Как мы работаем" />
      <div className="work_title-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at
        expedita necessitatibus obcaecati placeat repudiandae similique vel,
        veritatis vero voluptatibus! Fuga laboriosam tempora tenetur. Asperiores
        enim impedit ipsum odit quod?
      </div>
      <WorkList />
    </div>
  );
};
export default Work;
