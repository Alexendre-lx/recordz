import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardColumns, Button} from 'react-bootstrap'

class mainContent extends Component {
    render() {
        return (
            <div>
                <CardColumns>
                    <GetCards/>
                </CardColumns>
            </div>
        );
    }
}


export default mainContent;

var testArray = [{Title : "t1", Description: "D1",img: "https://cdn.pixabay.com/photo/2016/03/30/05/41/music-1290087__340.jpg"},{Title : "t2", Description: "D2", img : "https://cdn.pixabay.com/photo/2015/10/23/20/38/studio-1003635__340.png"},{Title : "t3", Description: "D3", img : "https://cdn.pixabay.com/photo/2017/04/12/12/55/studio-2224493__340.jpg"},{Title : "t1", Description: "D1", img: "https://cdn.pixabay.com/photo/2014/07/31/23/51/sound-studio-407216__340.jpg"},{Title : "t1", Description: "D1",img: "https://cdn.pixabay.com/photo/2016/03/30/05/41/music-1290087__340.jpg"},{Title : "t2", Description: "D2", img : "https://cdn.pixabay.com/photo/2015/10/23/20/38/studio-1003635__340.png"},{Title : "t3", Description: "D3", img : "https://cdn.pixabay.com/photo/2017/04/12/12/55/studio-2224493__340.jpg"},{Title : "t1", Description: "D1", img: "https://cdn.pixabay.com/photo/2014/07/31/23/51/sound-studio-407216__340.jpg"}]

var GetCards = function (){
    var Deck = [];
    for (var car in testArray){
        console.log(car)
        Deck.push(
            <Card style={{ width: '18rem' , margin : '20px'}}>
            <Card.Img variant="top" src={testArray[car].img} />
            <Card.Body>
                <Card.Title>{testArray[car].Title}</Card.Title>
                <Card.Text>
                {testArray[car].Description}
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
               
                <Button variant="primary">Like</Button>
            </Card.Body>
            </Card>
        )
    }
    return Deck;
}