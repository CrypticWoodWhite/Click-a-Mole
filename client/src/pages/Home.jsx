import React, { Component } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Scores from "../components/Scores";
import Image from "../components/Image";
import {Container, Row, Column} from "../components/Grid";
import Footer from "../components/Footer";
import Data from "../Data";

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
        this.setState({
            ImgOne: Data[0],
            ImgTwo: Data[1],
            ImgThree: Data[2],
            ImgFour: Data[3],
            ImgFive: Data[4],
            ImgSix: Data[5],
            ImgSeven: Data[6],
            ImgEight: Data[7],
            ImgNine: Data[8],
            ImgTen: Data[9],
            ImgEleven: Data[10],
            ImgTwelve: Data[11],
            ImgThirteen: Data[12],
            ImgFourteen: Data[13],
            ImgFifteen: Data[14],
            ImgSixteen: Data[15],
            currentScore: 0,
            allScores: [],
            topScore: 0
        })
    };

    randomize = () => {

        let imgArr = [];
        let randomId = Math.random() * 15;

        while (imgArr.length < 16) {
            if (imgArr.includes(randomId)) {
                randomId = Math.random() * 15;
            } else {
                imgArr.push(randomId);
            }
        };

        this.setState({
            ImgOne: Data[imgArr[0]],
            ImgTwo: Data[imgArr[1]],
            ImgThree: Data[imgArr[2]],
            ImgFour: Data[imgArr[3]],
            ImgFive: Data[imgArr[4]],
            ImgSix: Data[imgArr[5]],
            ImgSeven: Data[imgArr[6]],
            ImgEight: Data[imgArr[7]],
            ImgNine: Data[imgArr[8]],
            ImgTen: Data[imgArr[9]],
            ImgEleven: Data[imgArr[10]],
            ImgTwelve: Data[imgArr[11]],
            ImgThirteen: Data[imgArr[12]],
            ImgFourteen: Data[imgArr[13]],
            ImgFifteen: Data[imgArr[14]],
            ImgSixteen: Data[imgArr[15]],
        })

    };

    handleClick = event => {
        event.preventDefault();

        console.log("click!");

        let clickedImgArr = [];
        let clickedImg = event.target.value;
        let currentScore = this.state.currentScore;

        if (clickedImgArr.length < 16) {
            if (!clickedImgArr.includes(clickedImg)) {
                clickedImgArr.push(clickedImg);
                currentScore++;
                this.randomize();
            } else {
                alert("You already clicked that mole!");
                this.randomize();
            };
        };
    };

    ////

    render () {
        return (
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
                            key={this.state.ImgOne.id}
                            src={this.state.ImgOne.src}
                            onClick={() => this.handleClick}
                        />
                    </Column>
                    <Column idNumber="col-two">
                        <Image
                            key={this.state.ImgTwo.id}
                            src={this.state.ImgTwo.src}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-three">
                        <Image
                            key={this.state.ImgThree.id}
                            src={this.state.ImgThree.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-four">
                        <Image
                            key={this.state.ImgFour.id}
                            src={this.state.ImgFour.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-two">

                    <Column idNumber="col-five">
                        <Image
                            key={this.state.ImgFive.id}
                            src={this.state.ImgFive.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-six">
                        <Image
                            key={this.state.ImgSix.id}
                            src={this.state.ImgSix.src}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-seven">
                        <Image
                            key={this.state.ImgSeven.id}
                            src={this.state.ImgSeven.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-eight">
                        <Image
                            key={this.state.ImgEight.id}
                            src={this.state.ImgEight.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-three">

                    <Column idNumber="col-nine">
                        <Image
                            key={this.state.ImgNine.id}
                            src={this.state.ImgNine.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-ten">
                        <Image
                            key={this.state.ImgTen.id}
                            src={this.state.ImgTen.src}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-eleven">
                        <Image
                            key={this.state.ImgEleven.id}
                            src={this.state.ImgEleven.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-twelve">
                        <Image
                            key={this.state.ImgTwelve.id}
                            src={this.state.ImgTwelve.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-four">

                    <Column idNumber="col-thirteen">
                        <Image
                            key={this.state.ImgThirteen.id}
                            src={this.state.ImgThirteen.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-fourteen">
                        <Image
                            key={this.state.ImgFourteen.id}
                            src={this.state.ImgFourteen.src}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-fifteen">
                        <Image
                            key={this.state.ImgFifteen.id}
                            src={this.state.ImgFifteen.src}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-sixteen">
                        <Image
                            key={this.state.ImgSixteen.id}
                            src={this.state.ImgSixteen.src}
                            onClick={() => this.handleClick}
                        />
                    </Column>

                </Row>

                <Footer></Footer>

            </Container>
        )
    };

}

export default Index;