import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Image, Modal, Button } from "antd";
import { useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Reveal from "./components/Reveal";
import Round from "./components/Round";
import spyImg from "./assets/images/spy.png";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function App() {
    const [isModalVisible, setIsModalVisible] = useState(true);
    return (
        <>
            <Modal
                title="🕵 How to Play Liar Game 🕵"
                visible={isModalVisible}
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
                bodyStyle={{ textAlign: "left" }}
                width={800}
                style={{ maxWidth: "95%" }}
            >
                <Text>
                    Welcome to the Liar Game! This game is meant to be played
                    with 3-6 players and a single device that you can pass
                    around between different people. Here's how to play:
                </Text>
                <Title style={{ textAlign: "left" }} level={5}>
                    1. Choose the number of players and liars
                </Title>
                <Text>
                    On the home screen, choose the number of players you have,
                    the number of "liars" you want to have amongst the players,
                    and the time alloted for each round.
                </Text>
                <Title style={{ textAlign: "left" }} level={5}>
                    2. Choose the category
                </Title>
                <Text>
                    Choose the category of the word you want to get a random
                    word from. The available categories include animals,
                    countries, jobs, movies, sports, and food.
                </Text>
                <Title style={{ textAlign: "left" }} level={5}>
                    3. Check your role
                </Title>
                <Text>
                    Once you choose a category, the game will begin. Player 1
                    will start, and click "Reveal Word" to view the word from
                    the category the players chose. If the player is a "liar",
                    however, they will not be shown the word, and will instead
                    be shown the text "You are a liar!" The liar(s), therefore,
                    will not know what the word is. The player then passes the
                    device to the next player who does the same thing, until all
                    players have seen either the word or that they are a liar.
                </Text>
                <Title style={{ textAlign: "left" }} level={5}>
                    4. Play the game
                </Title>
                <Text>
                    Once everyone has seen the word, the game starts with player
                    1, and everyone goes around giving a hint about the word
                    (e.g., "crocodile" → "Being near one can be dangerous.") The
                    liar(s) must give hints pretending like they know the word.
                    At any point during the round, a player may "call out"
                    another player as a liar, and a vote is taken. If there is a
                    majority vote and the person called out is the liar, then
                    the other players win, while if the person called out is not
                    the liar, then the liar wins. If there is no majority vote
                    by the end of the round, the liar must reveal themselves and
                    guess what the word is. The liar wins only if the guess the
                    word right. The liar can also reveal themselves and guess at
                    any point before the round ends, which is why it is
                    imperative that the players give hints that are not
                    "obvious" (so that the liar is unable to guess the word).
                </Text>
            </Modal>
            <Layout style={{ height: "100vh" }}>
                <Header style={{ paddingTop: 10 }}>
                    <Image
                        style={{ marginTop: -20, paddingRight: 5 }}
                        height={40}
                        src={spyImg}
                        preview={false}
                    />
                    <Title
                        level={2}
                        style={{ display: "inline-block", color: "white" }}
                    >
                        Liar Game
                    </Title>
                    <Image
                        style={{ marginTop: -20, paddingLeft: 5 }}
                        height={40}
                        src={spyImg}
                        preview={false}
                    />
                    <Button
                        type="text"
                        size="small"
                        style={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                        }}
                        onClick={() => setIsModalVisible(true)}
                    >
                        How to Play
                    </Button>
                </Header>
                <Content style={{ paddingTop: 50, height: "100%" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/reveal-word" element={<Reveal />} />
                        <Route path="/play-game" element={<Round />} />
                    </Routes>
                </Content>
            </Layout>
        </>
    );
}

export default App;
