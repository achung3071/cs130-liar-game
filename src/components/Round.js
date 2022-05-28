import { Row, Col, Layout, Typography, Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";

import Countdown from "react-countdown";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

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
        <Layout style={{ height: "100vh" }}>
            <Header style={{ paddingTop: 10 }}>
                <Title level={2} style={{ color: "white" }}>
                    Liar Game
                </Title>
            </Header>
            <Content style={{ paddingTop: 50, height: "100%" }}>
                <Row>
                    <Col span={24}>
                        <Countdown
                            date={Date.now() + 60000 * minsPerRound}
                            renderer={renderCountdown}
                        />
                    </Col>
                    <Col span={24}>
                        <Link to="/">
                            <Button type="primary">Back to Main Page</Button>
                        </Link>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Round;
