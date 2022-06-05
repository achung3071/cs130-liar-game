import { Row, Col, Typography, Card, Image } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import animalImg from "../assets/images/animal.png";
import countryImg from "../assets/images/country.png";
import foodImg from "../assets/images/food.png";
import jobImg from "../assets/images/job.png";
import movieImg from "../assets/images/movie.png";
import sportsImg from "../assets/images/sports.png";

const { Title } = Typography;

const Categories = () => {
    const { setCategory } = useContext(MainContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setCategory(category);
        return navigate("/reveal-word");
    };

    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={3} style={{ paddingBottom: 40 }}>
                        Choose a Category
                    </Title>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ padding: "0px 20px" }}>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <Card
                        title="Animals"
                        hoverable
                        onClick={() => handleCategoryClick("animals")}
                    >
                        <Image height={100} src={animalImg} preview={false} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <Card
                        title="Countries"
                        hoverable
                        onClick={() => handleCategoryClick("countries")}
                    >
                        <Image height={100} src={countryImg} preview={false} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <Card
                        title="Jobs"
                        hoverable
                        onClick={() => handleCategoryClick("jobs")}
                    >
                        <Image height={100} src={jobImg} preview={false} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <Card
                        title="Movies"
                        hoverable
                        onClick={() => handleCategoryClick("movies")}
                    >
                        <Image height={100} src={movieImg} preview={false} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <Card
                        title="Sports"
                        hoverable
                        onClick={() => handleCategoryClick("sports")}
                    >
                        <Image height={100} src={sportsImg} preview={false} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <Card
                        title="Food"
                        hoverable
                        onClick={() => handleCategoryClick("jobs")}
                    >
                        <Image height={100} src={foodImg} preview={false} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Categories;
