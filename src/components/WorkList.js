import React, { useState } from "react";
import WorkItem from "./WorkItem";
import { Row } from "react-materialize";

const WorkList = () => {
  const [workPosts, setworkPosts] = useState([
    {
      id: "w1",
      title: "Назначаем встречу",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at expedita necessitatibus obcaecati placeat repudiandae similique vel, veritatis vero voluptatibus!",
    },
    {
      id: "w2",
      title: "Заключаем договор",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at expedita necessitatibus obcaecati placeat repudiandae similique vel, veritatis vero voluptatibus!",
    },
    {
      id: "w3",
      title: "Доставка",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at expedita necessitatibus obcaecati placeat repudiandae similique vel, veritatis vero voluptatibus!",
    },
  ]);
  return (
    <Row>
      {workPosts.map((post) => {
        return <WorkItem key={post.id} post={post} />;
      })}
    </Row>
  );
};
export default WorkList;
