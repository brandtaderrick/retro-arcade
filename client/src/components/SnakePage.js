// import React from 'react'
import Header from "./Header"
//import "./snake.css"
import * as Phaser from "phaser";
import {Route} from "react-router-dom";

const SnakePage = () => {
    return (
        <div>
            <Header />
            <Score />
            <Body />
        </div>
    )
}

var foodCount = 0;

const Body = () => {

    return (
        <div className= "Snake-Body" id="SnakeBody">

        </div>
    )

};

function Score(){
    return(
        <h2 className="Snake-Score">Score: <span id='counter'>0</span> </h2>
    )
}

var myCanvas;

window.onload = function(){
    if(document.URL === "http://localhost:3000/snake")
    {
        myCanvas = document.createElement('canvas');
        myCanvas.id = 'myCanvas';
        var div = document.getElementById("SnakeBody");
        var retCanvas = Game();
        div.appendChild(retCanvas);
    }
};

function Random(num){
    return (Phaser.Math.Between(20,num-20));
}

function Game(){

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    var gameScene = new Phaser.Scene('Game');
    var config = {
        type: Phaser.CANVAS,
        canvas: myCanvas,
        width: screenWidth * .4,
        height: screenHeight * .4,
        backgroundColor: '#000000',
        scene: gameScene,
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
    };


    var game = new Phaser.Game(config);
    var canvasWidth = game.canvas.width;
    var canvasHeight = game.canvas.height;

    var upArr;
    var leftArr;
    var rightArr;
    var downArr;

    var head;
    var tail;
    var food;

    var up = false;
    var left = false;
    var right = false;
    var down = false;
    var noFood = false;

    var text = true;
    var message;

    var snakePath = new Array();
    var bodySpace = 0;

    var snake = new Array();
    var bodyArr = new Array();
    var bodies = 0;
    var group;


    gameScene.preload = function(){
        this.load.image('snakeFood', process.env.PUBLIC_URL + "snakeFood.png");
        this.load.image('snakeBodyCircle', process.env.PUBLIC_URL + "snakeBodyCircle.gif");
    };

    gameScene.create = function(){

        //this.physics.world.setFPS(45)
        head = this.physics.add.sprite(canvasWidth *.5, canvasHeight*.5, 'snakeBodyCircle');
        snake.unshift(head);
        group = this.add.group();

        food = this.physics.add.sprite(canvasWidth*.3, canvasHeight*.3, 'snakeFood')

        upArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        leftArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        rightArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        downArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        message = this.add.text(canvasWidth *.3, canvasHeight*.35, "Press a arrow key to begin playing").setFontSize(20);
    };

    gameScene.init = function() {
        this.snakeSpeed = 2.2;
    };

    gameScene.update = function()
    {
        if (Phaser.Input.Keyboard.JustDown(upArr)) {
            up = true;
            left = false;
            right = false;
            down = false;
            text = false;
        } else if (Phaser.Input.Keyboard.JustDown(leftArr)) {
            up = false;
            left = true;
            right = false;
            down = false;
            text = false;
        } else if (Phaser.Input.Keyboard.JustDown(rightArr)) {
            up = false;
            left = false;
            right = true;
            down = false;
            text = false;
        } else if (Phaser.Input.Keyboard.JustDown(downArr)) {
            up = false;
            left = false;
            right = false;
            down = true;
            text = false;
        }
        if (up === true) {
            upArr.enabled = true;
            leftArr.enabled = true;
            rightArr.enabled = true;
            head.y -= this.snakeSpeed;
            downArr.enabled = false;
        } else if (left === true) {
            leftArr.enabled = true;
            upArr.enabled = true;
            downArr.enabled = true;
            head.x -= this.snakeSpeed;
            rightArr.enabled = false;
        } else if (right === true) {
            rightArr.enabled = true;
            upArr.enabled = true;
            downArr.enabled = true;
            head.x += this.snakeSpeed;
            leftArr.enabled = false;
        } else if (down === true) {
            downArr.enabled = true;
            leftArr.enabled = true;
            rightArr.enabled = true;
            head.y += this.snakeSpeed;
            upArr.enabled = false;
        }

        if(text === false)
            message.destroy();

        //Snake eating the food collision
        this.physics.add.collider(snake[0], food, function () {
            food.destroy();
            noFood = true;
            foodCount += 1;
            document.getElementById('counter').innerText = foodCount;
        })

        if (head.x < 2 || head.x > canvasWidth || head.y < 2 || head.y > canvasHeight) {
            gameOver();
        }

        if (noFood === true)
        {
            eat();
        }

        if (bodies > 0)
        {
            for (let i = 0; i < bodies; i++)
            {
                let sprite = snake.at(i);
                let sprite1 = snake.at(i + 1)

                let diffx = Math.abs(sprite.x - sprite1.x)
                let diffy = Math.abs(sprite.y - sprite1.y)

                if(diffx > 36 || diffy > 36)
                {
                    this.physics.moveToObject(sprite1, sprite, 131.5);
                }
            }
        }

        this.physics.add.collider(head, group, function (){
            gameOver()
        })
    }

    function eat()
    {
        if (noFood === true)
        {
            var prev = snake.at(bodies)
            bodies += 1;
            var body = gameScene.physics.add.sprite(prev.x,prev.y,'snakeBodyCircle')
            snake.push(body);
            if(bodies > 2)
                group.add(body)            //bodyArr.push(body);

            if (up === true) {
                body.setPosition(prev.x, prev.y + 30);
            }
            else if(down === true){
                body.setPosition(prev.x, prev.y - 30)
            }
            else if(left === true)
            {
                body.setPosition(prev.x + 30, prev.y);
            }
            else if(right === true)
            {
                body.setPosition(prev.x - 30, prev.y);
            }
            food = gameScene.physics.add.sprite(Random(canvasWidth), Random(canvasHeight), 'snakeFood');
            noFood = false;
        }
    }

    function gameOver()
    {
        game.destroy(false, false)
        Game()
        foodCount = 0;
        document.getElementById('counter').innerText = foodCount;
    }
    return game.canvas;
}
export default SnakePage
