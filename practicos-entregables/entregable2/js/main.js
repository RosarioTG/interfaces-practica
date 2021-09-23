"use strict";

let canvas;
let context;
let tokens = 2;
let playerRed;
let playerGreen;
let arrayTokens = [];
let arrayLockers = [];
let arrayConteiners = [];
let isMouseDown = false;
let lastClickedFigure = null;
let img;
let token1 = [];
let token2 = [];

const allFig = {
    array: null
};

const oldPositions = {
    X: null ,
    Y : null,
    selected :null 
};

const imageBoard = {
    img: null
};

const alllockers = {
    array: null
};

const allConteiners = {
    array: null
};

const player1 = {
    name: 1,
    arrayTokensPlayer1: 0,
    colour: "red"
};

const player2 = {
    name: 2,
    arrayTokensPlayer2: 0,
    colour: "green"
};

const currentPlayer = {
    actual: player1.name
};

async function mainFunction(){
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");
    
    img = await Help.uploadImage("./images/redToken.jpg");
    player1.colour = img;

    playerRed = new Token(token1, token2, player1.colour, tokens, arrayTokens, context);
    playerRed.createToken();
    playerRed.drawToken();

    player1.arrayTokensPlayer1 = playerRed.getToken1();

    img = await Help.uploadImage("./images/greenToken.jpg");
    player2.colour = img;

    playerGreen = new Token(token1, token2, player2.colour, tokens, arrayTokens, context);
    playerGreen.createToken();
    playerGreen.drawToken();

    player2.arrayTokensPlayer2 = playerRed.getToken2();

    allFig.array = playerGreen.getArrayToken();
    
    board();
    
}

async function board (){
        img = await Help.uploadImage("./images/table.jpg");
        let  board = new Board(canvas, context, img, 7, 7, arrayLockers,arrayConteiners);
        board.drawBackground();
        board.createLockers();
        board.drawcontainers();
        alllockers.array = board.getArrayLockers();
        allConteiners.array = board.getArrayConteiners();
        imageBoard.img = img ;
    }


document.addEventListener("DOMContentLoaded", mainFunction());
document.addEventListener("mousedown", Help.onMouseDown, false);
document.addEventListener("mouseup", Help.onMouseUp, false);
document.addEventListener("mousemove", Help.onMouseMove, false);