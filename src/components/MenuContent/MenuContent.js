import React from 'react';
import { Link } from "react-router-dom";
import {
  WrapTextMenu,
  CloseMenu
} from './style/MenuContent-style';
import { Row, Col } from 'antd';


export const MenuContent = () => {
  return (
    <div>

        <Row>
          <Col span={24}>
            <WrapTextMenu>
              <Link to="/">
                Books Lists(main page)
              </Link>

              <Link to='/shelf' >
                Shelves
              </Link>

              <Link to='/shelfinterview' >
                Shelf with Review
              </Link>
              <CloseMenu>Close</CloseMenu>
            </WrapTextMenu>
          </Col>
        </Row>
    </div>
  )
}