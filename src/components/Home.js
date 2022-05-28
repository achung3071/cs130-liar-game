import { Row, Col, Layout, Select, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const { Header, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const Home = () => {
    const {
        numPlayers,
        setNumPlayers,
        numSpies,
        setNumSpies,
        minsPerRound,
        setMinsPerRound,
    } = useContext(MainContext);

    const handleNumPlayersChange = (value) => {
        setNumPlayers(value);
        if (value <= 4 && numSpies === 2) {
            setNumSpies(1);
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
                <Row gutter={[16, 100]}>
                    <Col span={8}>
                        <Title level={4}>Number of Players</Title>
                        <Select
                            defaultValue="3"
                            style={{ width: 120 }}
                            onChange={handleNumPlayersChange}
                            value={numPlayers}
                        >
                            <Option value={3}>3</Option>
                            <Option value={4}>4</Option>
                            <Option value={5}>5</Option>
                            <Option value={6}>6</Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Title level={4}>Number of Spies</Title>
                        <Select
                            defaultValue="3"
                            style={{ width: 120 }}
                            onChange={setNumSpies}
                            value={numSpies}
                        >
                            <Option value={1}>1</Option>
                            <Option value={2} disabled={numPlayers <= 4}>
                                2
                            </Option>
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Title level={4}>Time Per Round</Title>
                        <Select
                            defaultValue="3 mins"
                            style={{ width: 120 }}
                            value={minsPerRound}
                            onChange={setMinsPerRound}
                        >
                            <Option value={3}>3 mins</Option>
                            <Option value={4}>4 mins</Option>
                            <Option value={5}>5 mins</Option>
                            <Option value={6}>6 mins</Option>
                        </Select>
                    </Col>
                    <Col span={24}>
                        <Link to="/reveal-word">
                            <Button type="primary">Start Game!</Button>
                        </Link>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Home;
