import React from "react"
import "./style.scss"
import { Row, Col } from 'antd';
import chunk from "lodash/chunk"
import { Link } from "react-router-dom";

type Animation = {
  title: string,
  img: string,
  url: string
}

const Animations = [
  {
    title: "The begining",
    img: "",
    url: "/sin-circle"
  }
]

const Home: React.FC = () => (
  <div className="home">
    {chunk(Animations, 4).map((animations: Animation[]) =>
      <Row gutter={[24, 24]}>
        {animations.map((animation: Animation) =>
          <Col span={6} >
            <Link to={animation.url}>
              <div className="column">
                <img src={animation.img} />
                <p>{animation.title}</p>
              </div>
            </Link>
          </Col>
        )}
      </Row>
    )}
  </div>
)

export default Home