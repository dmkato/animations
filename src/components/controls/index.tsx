import React from 'react';
import { Slider, Row, Col } from 'antd';

interface Control {
  name: string,
  max: number,
  default: number
}

interface ControlsList {
  [index: string]: Control
}

interface Props {
  controls: ControlsList,
  onChange: (key: string, value: number | [number, number]) => void
}


const Controls = ({ controls, onChange }: Props) => (
  <>
    {Object.entries(controls).map(([key, control]: [string, Control]) => (
      <Row align="middle" key={control.name}>
        <Col span={4}>
          <p>{control.name}</p>
        </Col>
        <Col span={8}>
          <Slider
            max={control.max}
            defaultValue={control.default}
            onChange={(value) => onChange(key, value)}
          />
        </Col>
      </Row>
    ))}
  </>
);

export default Controls;
