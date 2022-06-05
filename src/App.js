import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import "./App.css";
import "antd/dist/antd.min.css";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Reveal from "./components/Reveal";
import Round from "./components/Round";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header style={{ paddingTop: 10 }}>
                <Title level={2} style={{ color: "white" }}>
                    Liar Game
                </Title>
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
    );
}

export default App;
