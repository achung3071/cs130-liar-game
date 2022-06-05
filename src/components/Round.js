import { Row, Col, Typography, Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";

import Countdown from "react-countdown";

const { Paragraph } = Typography;

const Round = () => {
    const { minsPerRound } = useContext(MainContext);

    const renderCountdown = ({ minutes, seconds, completed }) => {
        if (completed) {
            return (
                <Paragraph strong={true} style={{ fontSize: 20 }}>
                    Round is over!
                </Paragraph>
            );
        } else {
            return (
                <Paragraph strong={true} style={{ fontSize: 24 }}>
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                </Paragraph>
            );
        }
    };

    return (
        <Row>
            <Col span={24}>
                <Countdown
                    date={Date.now() + 60000 * minsPerRound}
                    renderer={renderCountdown}
                />
            </Col>
            <Col span={24}>
                <Link to="/categories" style={{ marginRight: 5 }}>
                    <Button size="large">Choose another category</Button>
                </Link>

                <Link to="/" style={{ marginLeft: 5 }}>
                    <Button type="primary" size="large">
                        Back to Main Page
                    </Button>
                </Link>
            </Col>
        </Row>
    );
};

export default Round;
