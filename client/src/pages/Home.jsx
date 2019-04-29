import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Scores from "../components/Scores";
import {Container, Row, Column} from "../components/Grid";
import Footer from "../components/Footer";

class Index extends Component {

    state = {
        // ImgOne: "../../public/assets/img/mole-1.jpg",
        // ImgTwo: "../../public/assets/img/mole-2.jpg",
        // ImgThree: "../../public/assets/img/mole-3.jpg",
        // ImgFour: "../../public/assets/img/mole-4.jpg",
        // ImgFive: "../../public/assets/img/mole-5.jpg",
        // ImgSix: "../../public/assets/img/mole-6.jpg",
        // ImgSeven: "../../public/assets/img/mole-7.jpg",
        // ImgEight: "../../public/assets/img/mole-8.jpg",
        // ImgNine: "../../public/assets/img/mole-9.jpg",
        // ImgTen: "../../public/assets/img/mole-10.jpg",
        // ImgEleven: "../../public/assets/img/mole-11jpg",
        // ImgTwelve: "../../public/assets/img/mole-12.jpg",
        // ImgThirteen: "../../public/assets/img/mole-13.jpg",
        // ImgFourteen: "../../public/assets/img/mole-14.jpg",
        // ImgFifteen: "../../public/assets/img/mole-15.jpg",
        // ImgSixteen: "../../public/assets/img/mole-16.jpg",
        images: [],
        currentScore: 0,
        allScores: []
    };

    componentDidMount () {
        this.loadImages();
    }

    loadImages = () => {
        API.loadImages.then(
            this.setState({
                images: res.data,
                currentScore: 0,
                allScores: []
            })
        ).catch(
            err => console.log(err);
        )
    };

    getRandomImage = (id) => {
        API.getRandomImage(id).then(

        );
    };

    handleClick = event => {
        event.preventDefault();

    };

    topScore = Score => {

    };

    ////

    render () {
        return (
            <Container>

                <Header>
                    <h1>Click-a-Mole</h1>
                    <h5>This is the memory game version of Whack-a-Mole! The moles get shuffled around after each click. Try to not click on the same mole twice. Click on a mole to get started!</h5>
                </Header>

                <Nav>
                    <Scores>
                        Current Score:
                    </Scores>
                    <Scores>
                        Top Score: 
                    </Scores>
                </Nav>

                <Row idNumber="row-one">

                    <Column idNumber="col-one">
                        <Image
                            id="img-one"
                            href={this.state.ImgOne}
                        />
                    </Column>
                    <Column idNumber="col-two">
                        <Image
                            id="img-two"
                            href={this.state.ImgTwo}
                        />           
                    </Column>
                    <Column idNumber="col-three">
                        <Image
                            id="img-three"
                            href={this.state.ImgThree}
                        />
                    </Column>
                    <Column idNumber="col-four">
                        <Image
                            id="img-four"
                            href={this.state.ImgFour}
                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-two">

                    <Column idNumber="col-five">
                        <Image
                            id="img-five"
                            href={this.state.ImgFive}
                        />
                    </Column>
                    <Column idNumber="col-six">
                        <Image
                            id="img-six"
                            href={this.state.ImgSix}
                        />           
                    </Column>
                    <Column idNumber="col-seven">
                        <Image
                            id="img-seven"
                            href={this.state.ImgSeven}
                        />
                    </Column>
                    <Column idNumber="col-eight">
                        <Image
                            id="img-eight"
                            href={this.state.ImgEight}
                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-three">

                    <Column idNumber="col-nine">
                        <Image
                            id="img-nine"
                            href={this.state.ImgNine}
                        />
                    </Column>
                    <Column idNumber="col-ten">
                        <Image
                            id="img-ten"
                            href={this.state.ImgTen}
                        />           
                    </Column>
                    <Column idNumber="col-eleven">
                        <Image
                            id="img-eleven"
                            href={this.state.ImgEleven}
                        />
                    </Column>
                    <Column idNumber="col-twelve">
                        <Image
                            id="img-twelve"
                            href={this.state.ImgTwelve}
                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-four">

                    <Column idNumber="col-thirteen">
                        <Image
                            id="img-thirteen"
                            href={this.state.ImgThirteen}
                        />
                    </Column>
                    <Column idNumber="col-fourteen">
                        <Image
                            id="img-fourteen"
                            href={this.state.ImgFourteen}
                        />           
                    </Column>
                    <Column idNumber="col-fifteen">
                        <Image
                            id="img-fifteen"
                            href={this.state.ImgFifteen}
                        />
                    </Column>
                    <Column idNumber="col-sixteen">
                        <Image
                            id="img-sixteen"
                            href={this.state.ImgSixteen}
                        />
                    </Column>

                </Row>

                <Footer></Footer>

            </Container>
        )
    };

}

export default Index;