let canvas = document.getElementById("snake"); // recuperando id do canvas para utilizar
let context = canvas.getContext("2d"); // definindo canvas como elemento 2d
let box = 32; // definindo a quantidade de quadros dentro do jogo
let snake = []; // array para criar a cobrinha
snake[0] = { // definindo tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; // direção da cobrinha

// função para criar o backgroundo do jogo
function createBG(){
    context.fillStyle = "lightgreen"; // definindo a cor do background
    context.fillRect(0, 0, 16 * box, 16 * box); // definindo altura e largura do quadro
}

// função para criar a cobrinha
function createSnake(){
    for( i = 0; i < snake.length; i++ ){
        context.fillStyle = "green"; // dando cor a cobrinha
        context.fillRect( snake[i].x, snake[i].y, box, box ); // incrementando o tamanho
    }
}

// função para iniciar o jogo
function startGame(){
    // chamando a função que cria a tela do jogo na página
    createBG();
    // chamando a função que cria a cobrinha
    createSnake();

    // definindo o ponto incial da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // definindo para onde a cobrinha irá se mover
    if( direction == "right" ) snakeX += box;
    if( direction == "left" ) snakeX -= box;
    if( direction == "up" ) snakeY -= box;
    if( direction == "down" ) snakeY += box;
    snake.pop();

    // criando a cobrinha inicial
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); // adicionando sempre um elemento no inicio da cobrinha
}


// definindo tempo de atualização de quadros do jogo
let game = setInterval( startGame, 100);