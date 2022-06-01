import { Row, Col, Layout, Typography, Button } from "antd";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import animalList from "../assets/data/animals.json";
import countryList from "../assets/data/countries.json";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const categoryToList = {
    animals: animalList,
    countries: countryList,
};

const Reveal = () => {
    const { category, numPlayers, numSpies } = useContext(MainContext);

    const [showWord, setShowWord] = useState(false);
    const [currWord, setCurrWord] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [spyIndices, setSpyIndices] = useState([]);
    const [currIdx, setCurrIdx] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (category) {
            const wordList = categoryToList[category];
            const newWord =
                wordList[Math.floor(Math.random() * wordList.length)];
            setCurrWord(newWord);
            setDisplayText(newWord);
            const newSpyIndices = [];
            for (let i = 0; i < numSpies; i++) {
                let idx = Math.floor(Math.random() * numPlayers);
                while (newSpyIndices.includes(idx)) {
                    idx = Math.floor(Math.random() * numPlayers);
                }
                newSpyIndices.push(idx);
            }
            setSpyIndices(newSpyIndices);
        }
    }, [category, numPlayers, numSpies]);

    const revealWord = () => {
        if (spyIndices.includes(currIdx)) {
            setDisplayText("You are a spy!");
        } else {
            setDisplayText(currWord);
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
                                {displayText}
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
