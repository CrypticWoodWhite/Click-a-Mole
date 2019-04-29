import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Scores from "../components/Scores";
import Image from "../components/Image";
import {Container, Row, Column} from "../components/Grid";
import Footer from "../components/Footer";

class Index extends Component {

    state = {
        ImgOne: "",
        ImgTwo: "",
        ImgThree: "",
        ImgFour: "",
        ImgFive: "",
        ImgSix: "",
        ImgSeven: "",
        ImgEight: "",
        ImgNine: "",
        ImgTen: "",
        ImgEleven: "",
        ImgTwelve: "",
        ImgThirteen: "",
        ImgFourteen: "",
        ImgFifteen: "",
        ImgSixteen: "",
        currentScore: 0,
        allScores: [],
        topScore: 0
    };

    componentDidMount () {
        this.loadImages();
    }

    loadImages = () => {
        API.loadImages.then(res => {
            this.setState({
                ImgOne: res.data[0].src,
                ImgTwo: res.data[1].src,
                ImgThree: res.data[2].src,
                ImgFour: res.data[3].src,
                ImgFive: res.data[4].src,
                ImgSix: res.data[5].src,
                ImgSeven: res.data[6].src,
                ImgEight: res.data[7].src,
                ImgNine: res.data[8].src,
                ImgTen: res.data[9].src,
                ImgEleven: res.data[10].src,
                ImgTwelve: res.data[11].src,
                ImgThirteen: res.data[12].src,
                ImgFourteen: res.data[13].src,
                ImgFifteen: res.data[14].src,
                ImgSixteen: res.data[15].src,
                currentScore: 0,
                allScores: [],
                topScore: 0
            })
        }).catch(
            err => console.log(err)
        )
    };

    // getRandomImage = () => {

    //     let imgArr = [];
    //     let randomId = Math.random() * 15;

    //     if (imgArr.length < 16) {
    //         if (imgArr.includes(randomId)) {
    //             randomId = Math.random() * 15;
    //         } else {
    //             imgArr.push(randomId);
    //         }
    //     } else {
    //         imgArr = [];
    //     };

    //     API.getOneImage(randomId);
    // };

    handleClick = event => {
        event.preventDefault();

        let clickedImgArr = [];
        let clickedImg = event.target.value;
        let currentScore = this.state.currentScore;

        if (clickedImgArr.length < 16) {
            if (!clickedImgArr.includes(clickedImg)) {
                clickedImgArr.push(clickedImg);
                currentScore++;
            } else {
                alert("You already clicked that mole!");
            };
        };
    };

    ////

    render () {
        return (
            <Container>

                <Header>
                    <h1>Click-a-Mole</h1>
                    <h5>This is the memory game version of Whack-a-Mole. The moles get shuffled around after each click. Try to not click on the same mole twice. Click a mole to get started!</h5>
                </Header>

                <Nav>
                    <Scores>
                        Current Score: {this.state.currentScore};
                    </Scores>
                    <Scores>
                        Top Score: {this.state.topScore};
                    </Scores>
                </Nav>

                <Row idNumber="row-one">

                    <Column idNumber="col-one">
                        <Image
                            id="img-one"
                            src={this.state.ImgOne}
                        />
                    </Column>
                    <Column idNumber="col-two">
                        <Image
                            id="img-two"
                            src={this.state.ImgTwo}
                        />           
                    </Column>
                    <Column idNumber="col-three">
                        <Image
                            id="img-three"
                            src={this.state.ImgThree}
                        />
                    </Column>
                    <Column idNumber="col-four">
                        <Image
                            id="img-four"
                            src={this.state.ImgFour}
                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-two">

                    <Column idNumber="col-five">
                        <Image
                            id="img-five"
                            src={this.state.ImgFive}
                        />
                    </Column>
                    <Column idNumber="col-six">
                        <Image
                            id="img-six"
                            src={this.state.ImgSix}
                        />           
                    </Column>
                    <Column idNumber="col-seven">
                        <Image
                            id="img-seven"
                            src={this.state.ImgSeven}
                        />
                    </Column>
                    <Column idNumber="col-eight">
                        <Image
                            id="img-eight"
                            src={this.state.ImgEight}
                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-three">

                    <Column idNumber="col-nine">
                        <Image
                            id="img-nine"
                            src={this.state.ImgNine}
                        />
                    </Column>
                    <Column idNumber="col-ten">
                        <Image
                            id="img-ten"
                            src={this.state.ImgTen}
                        />           
                    </Column>
                    <Column idNumber="col-eleven">
                        <Image
                            id="img-eleven"
                            src={this.state.ImgEleven}
                        />
                    </Column>
                    <Column idNumber="col-twelve">
                        <Image
                            id="img-twelve"
                            src={this.state.ImgTwelve}
                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-four">

                    <Column idNumber="col-thirteen">
                        <Image
                            id="img-thirteen"
                            src={this.state.ImgThirteen}
                        />
                    </Column>
                    <Column idNumber="col-fourteen">
                        <Image
                            id="img-fourteen"
                            src={this.state.ImgFourteen}
                        />           
                    </Column>
                    <Column idNumber="col-fifteen">
                        <Image
                            id="img-fifteen"
                            src={this.state.ImgFifteen}
                        />
                    </Column>
                    <Column idNumber="col-sixteen">
                        <Image
                            id="img-sixteen"
                            src={this.state.ImgSixteen}
                        />
                    </Column>

                </Row>

                <Footer></Footer>

            </Container>
        )
    };

}

export default Index;