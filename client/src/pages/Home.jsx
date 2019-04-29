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

    loadImages = () => {
        this.setState({
            // ImgOne: Data[0],
            // ImgTwo: Data[1],
            // ImgThree: Data[2],
            // ImgFour: Data[3],
            // ImgFive: Data[4],
            // ImgSix: Data[5],
            // ImgSeven: Data[6],
            // ImgEight: Data[7],
            // ImgNine: Data[8],
            // ImgTen: Data[9],
            // ImgEleven: Data[10],
            // ImgTwelve: Data[11],
            // ImgThirteen: Data[12],
            // ImgFourteen: Data[13],
            // ImgFifteen: Data[14],
            // ImgSixteen: Data[15],
            currentScore: 0,
            allScores: [],
            topScore: 0
        })
    };

    randomize = (imgArray) => {
        let i = imgArray.length,
            j = 0,
            temp;
    
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            // swap randomly chosen element with current element
            temp = imgArray[i];
            imgArray[i] = imgArray[j];
            imgArray[j] = temp;
            return imgArray;
        };

        this.setState({
            ImgOne: imgArray[0],
            ImgTwo: imgArray[1],
            ImgThree: imgArray[2],
            ImgFour: imgArray[3],
            ImgFive: imgArray[4],
            ImgSix: imgArray[5],
            ImgSeven: imgArray[6],
            ImgEight: imgArray[7],
            ImgNine: imgArray[8],
            ImgTen: imgArray[9],
            ImgEleven: imgArray[10],
            ImgTwelve: imgArray[11],
            ImgThirteen: imgArray[12],
            ImgFourteen: imgArray[13],
            ImgFifteen: imgArray[14],
            ImgSixteen: imgArray[15]
        });
    };

    handleClick = event => {
        event.preventDefault();

        console.log("click!");

        // let imgArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

        let clickedImgArr = [],
            clickedImg = event.target.value,
            currentScore = this.state.currentScore;

        // if (clickedImgArr.length < 16) {
        //     if (!clickedImgArr.includes(clickedImg)) {
        //         clickedImgArr.push(clickedImg);
        //         currentScore++;
        //         this.randomize(imgArr);
        //     } else {
        //         alert("You already clicked that mole!");
        //         this.randomize(imgArr);
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
                            key={this.state.ImgOne.id}
                            src={mole1}
                            onClick={() => this.handleClick}
                        />
                    </Column>
                    <Column idNumber="col-two">
                        <Image
                            key={this.state.ImgTwo.id}
                            src={mole2}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-three">
                        <Image
                            key={this.state.ImgThree.id}
                            src={mole3}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-four">
                        <Image
                            key={this.state.ImgFour.id}
                            src={mole4}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-two">

                    <Column idNumber="col-five">
                        <Image
                            key={this.state.ImgFive.id}
                            src={mole5}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-six">
                        <Image
                            key={this.state.ImgSix.id}
                            src={mole6}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-seven">
                        <Image
                            key={this.state.ImgSeven.id}
                            src={mole7}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-eight">
                        <Image
                            key={this.state.ImgEight.id}
                            src={mole8}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-three">

                    <Column idNumber="col-nine">
                        <Image
                            key={this.state.ImgNine.id}
                            src={mole9}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-ten">
                        <Image
                            key={this.state.ImgTen.id}
                            src={mole10}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-eleven">
                        <Image
                            key={this.state.ImgEleven.id}
                            src={mole11}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-twelve">
                        <Image
                            key={this.state.ImgTwelve.id}
                            src={mole12}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    
                </Row>

                <Row idNumber="row-four">

                    <Column idNumber="col-thirteen">
                        <Image
                            key={this.state.ImgThirteen.id}
                            src={mole13}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-fourteen">
                        <Image
                            key={this.state.ImgFourteen.id}
                            src={mole14}
                            onClick={() => this.handleClick}

                        />           
                    </Column>
                    <Column idNumber="col-fifteen">
                        <Image
                            key={this.state.ImgFifteen.id}
                            src={mole15}
                            onClick={() => this.handleClick}

                        />
                    </Column>
                    <Column idNumber="col-sixteen">
                        <Image
                            key={this.state.ImgSixteen.id}
                            src={mole16}
                            onClick={() => this.handleClick}
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