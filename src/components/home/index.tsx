import React from 'react';
import './style.scss';
import { Row, Col, Card } from 'antd';
import chunk from 'lodash/chunk';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';

type Animation = {
  title: string,
  img: string,
  url: string
};

const Animations = [
  {
    title: 'Sin Circle',
    img: '/img/sin-circle.png',
    url: '/sin-circle',
  },
];


const Home: React.FC = () => (
  <div className="home">
    {chunk(Animations, 4).map((animations: Animation[]) => (
      <Row gutter={[24, 24]} key={animations.map(({ url }) => url).join()}>
        {animations.map((animation: Animation) => (
          <Col span={6} key={animation.url}>
            <Link to={animation.url}>
              <Card hoverable cover={<img src={animation.img} alt={animation.title} className="img" />}>
                <Meta title={animation.title} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    ))}
  </div>
);

export default Home;
