import React, { Component } from "react";
import Header from "../components/Header";
import Scores from "../components/Scores";
import {Container, Row, Column} from "../components/Grid";
import Footer from "../components/Footer";








render () {
    <Container>

        <Header>
            <h1>Click-a-Mole</h1>
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
            <Column idNumber="col-one"></Column>
            <Column idNumber="col-two"></Column>
            <Column idNumber="col-three"></Column>
            <Column idNumber="col-four"></Column>
        </Row>

        <Row idNumber="row-two">
            <Column idNumber="col-one"></Column>
            <Column idNumber="col-two"></Column>
            <Column idNumber="col-three"></Column>
            <Column idNumber="col-four"></Column>
        </Row>

        <Row idNumber="row-three">
            <Column idNumber="col-one"></Column>
            <Column idNumber="col-two"></Column>
            <Column idNumber="col-three"></Column>
            <Column idNumber="col-four"></Column>
        </Row>

        <Row idNumber="row-four">
            <Column idNumber="col-one"></Column>
            <Column idNumber="col-two"></Column>
            <Column idNumber="col-three"></Column>
            <Column idNumber="col-four"></Column>
        </Row>

        <Footer></Footer>

    </Container>
}