import React, { Component } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Scores from "../components/Scores";
import Image from "../components/Image";
import {Container, Row, Column} from "../components/Grid";
import Footer from "../components/Footer/Footer";
import {mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10, mole11, mole12, mole13, mole14, mole15, mole16} from "../img/imagesIndex";

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

    randomize = (array) => {
        let i = array.length,
            j = 0,
            temp;
    
        while (i > 0) {
            j = Math.floor(Math.random() * (i+1));
            i--
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };

        this.setState({
            ImgOne: array[0],
            ImgTwo: array[1],
            ImgThree: array[2],
            ImgFour: array[3],
            ImgFive: array[4],
            ImgSix: array[5],
            ImgSeven: array[6],
            ImgEight: array[7],
            ImgNine: array[8],
            ImgTen: array[9],
            ImgEleven: array[10],
            ImgTwelve: array[11],
            ImgThirteen: array[12],
            ImgFourteen: array[13],
            ImgFifteen: array[14],
            ImgSixteen: array[15]
        });
    };

    loadImages = () => {
        let imgArray = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10, mole11, mole12, mole13, mole14, mole15, mole16];
        this.randomize(imgArray);
    };

    handleClick = event => {
        event.preventDefault();

        console.log("click!");
        console.log(event.target.value);

        // let imgArray = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10, mole11, mole12, mole13, mole14, mole15, mole16];

        // let clickedImgArr = [],
        //     clickedImg = event.target.value,
        //     currentScore = this.state.currentScore;

        // if (clickedImgArr.length < 16) {
        //     if (!clickedImgArr.includes(clickedImg)) {
        //         clickedImgArr.push(clickedImg);
        //         currentScore++;
        //         this.randomize(imgArray);
        //     } else {
        //         alert("You already clicked that mole!");
        //         this.randomize(imgArray);
        //     };
        // };
    };

    ////

    render () {
        return (
            <div>
            <Container>

                <Header>
                    <h1 className="title">Click-a-Mole</h1>
                    <h5>This is the memory game version of Whack-a-Mole. The moles get shuffled around after each click. Try to not click on the same mole twice. Click a mole to get started!</h5>
                </Header>

                <Nav>
                    <Scores>
                        Current Score: {this.state.currentScore}
                    </Scores>
                    <Scores>
                        Top Score: {this.state.topScore}
                    </Scores>
                </Nav>

                <Row idNumber="row-one">

                    <Column idNumber="col-one">
                        <Image
                            src={this.state.ImgOne}
                            onClick={this.handleClick}
                        />
                    </Column>
                    <Column idNumber="col-two">
                        <Image
                            src={this.state.ImgTwo}
                            onClick={this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-three">
                        <Image
                            src={this.state.ImgThree}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-four">
                        <Image
                            src={this.state.ImgFour}
                            onClick={this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-two">

                    <Column idNumber="col-five">
                        <Image
                            src={this.state.ImgFive}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-six">
                        <Image
                            src={this.state.ImgSix}
                            onClick={this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-seven">
                        <Image
                            src={this.state.ImgSeven}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-eight">
                        <Image
                            src={this.state.ImgEight}
                            onClick={this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-three">

                    <Column idNumber="col-nine">
                        <Image
                            src={this.state.ImgNine}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-ten">
                        <Image
                            src={this.state.ImgTen}
                            onClick={this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-eleven">
                        <Image
                            src={this.state.ImgEleven}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-twelve">
                        <Image
                            src={this.state.ImgTwelve}
                            onClick={this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-four">

                    <Column idNumber="col-thirteen">
                        <Image
                            src={this.state.ImgThirteen}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-fourteen">
                        <Image
                            src={this.state.ImgFourteen}
                            onClick={this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-fifteen">
                        <Image
                            src={this.state.ImgFifteen}
                            onClick={this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-sixteen">
                        <Image
                            src={this.state.ImgSixteen}
                            onClick={this.handleClick}
                        />
                    </Column>

                </Row>

            </Container>

            <Footer></Footer>

            </div>
        )
    };

}

export default Index;