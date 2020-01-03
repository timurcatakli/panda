import React, { memo, useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "antd";
import Circle from "../../circle.png";

const rowProps = {
  type: "flex",
  justify: "center",
  align: "middle",
  gutter: [0, 20]
};

const Onboarding = props => {
  return (
    <>
      <Row {...rowProps}>
        <Col span={24}>
          <img src={Circle} alt="website logo" width="300" />
        </Col>
      </Row>
      <Row {...rowProps}>
        <Col span={24}>
          <h1>Welcome to Panda</h1>
        </Col>
      </Row>
      <Row {...rowProps}>
        <Col span={24}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet odio porttitor, varius erat nec, cursus ante.
          </p>
        </Col>
      </Row>
      <Row {...rowProps}>
        <Col span={24}>
          <Button block type="primary" size="large">
            Register
          </Button>
        </Col>
      </Row>
      <Row {...rowProps}>
        <Col span={24}>
          <Button block type="default" size="large">
            Login
          </Button>
        </Col>
      </Row>
    </>
  );
};

Onboarding.propTypes = {};

Onboarding.defaultProps = {};

export default memo(Onboarding);
