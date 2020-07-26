import React from "react";
import { Col, Card, Icon } from "react-materialize";

const WorkItem = ({ post }) => {
  return (
    <Col m={4} s={12}>
      <Card
        className="grey lighten-4"
        closeIcon={<Icon>close</Icon>}
        revealIcon={<Icon>more_vert</Icon>}
        textClassName=""
        title={post.title}
      >
        {post.desc}
      </Card>
    </Col>
  );
};

export default WorkItem;
