import { Row, Col, Layout, Typography, Button } from "antd";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const Reveal = () => {
    const { numPlayers, numSpies } = useContext(MainContext);
    const [showWord, setShowWord] = useState(false);
    const [currWord, setCurrWord] = useState("Dolphin");
    const [spyIndices, setSpyIndices] = useState([]);
    const [currIdx, setCurrIdx] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const newSpyIndices = [];
        for (let i = 0; i < numSpies; i++) {
            let idx = Math.floor(Math.random() * numPlayers);
            while (newSpyIndices.includes(idx)) {
                idx = Math.floor(Math.random() * numPlayers);
            }
            newSpyIndices.push(idx);
        }
        setSpyIndices(newSpyIndices);
    }, [numPlayers, numSpies]);

    const revealWord = () => {
        if (spyIndices.includes(currIdx)) {
            setCurrWord("You are a spy!");
        } else {
            setCurrWord("Dolphin");
        }
        setShowWord(true);
        setTimeout(() => {
            setShowWord(false);
            if (currIdx === numPlayers - 1) {
                return navigate("/play-game");
            }
            setCurrIdx(currIdx + 1);
        }, 1000);
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
                        <Paragraph strong={true} style={{ fontSize: 20 }}>
                            Player {currIdx + 1}, your word is:
                        </Paragraph>
                    </Col>
                    <Col span={24}>
                        {showWord ? (
                            <Paragraph style={{ fontSize: 20 }}>
                                {currWord}
                            </Paragraph>
                        ) : (
                            <Button onClick={revealWord} type="primary">
                                Reveal Word
                            </Button>
                        )}
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Reveal;
