import { Row, Col, Layout, Typography, Card, Image } from "antd";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import animalImg from "../assets/images/animal.png";
import countryImg from "../assets/images/country.png";
import foodImg from "../assets/images/food.png";
import jobImg from "../assets/images/job.png";
import movieImg from "../assets/images/movie.png";
import sportsImg from "../assets/images/sports.png";

const { Header, Content } = Layout;
const { Title } = Typography;

const Categories = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header style={{ paddingTop: 10 }}>
                <Title level={2} style={{ color: "white" }}>
                    Liar Game
                </Title>
            </Header>
            <Content style={{ padding: "50px 50px", height: "100%" }}>
                <Row>
                    <Col span={24}>
                        <Title level={3} style={{ paddingBottom: 40 }}>
                            Choose a Category
                        </Title>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Card title="Animals" hoverable>
                            <Image
                                height={100}
                                src={animalImg}
                                preview={false}
                            />
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Card title="Countries" hoverable>
                            <Image
                                height={100}
                                src={countryImg}
                                preview={false}
                            />
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Card title="Jobs" hoverable>
                            <Image height={100} src={jobImg} preview={false} />
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Card title="Movies" hoverable>
                            <Image
                                height={100}
                                src={movieImg}
                                preview={false}
                            />
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Card title="Sports" hoverable>
                            <Image
                                height={100}
                                src={sportsImg}
                                preview={false}
                            />
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Card title="Food" hoverable>
                            <Image height={100} src={foodImg} preview={false} />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Categories;
