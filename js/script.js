let canvas = document.getElementById("snake"); // recuperando id do canvas para utilizar
let context = canvas.getContext("2d"); // definindo canvas como elemento 2d
let box = 32; // definindo a quantidade de quadros dentro do jogo
let snake = []; // array para criar a cobrinha
snake[0] = { // definindo tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; // direção da cobrinha
let food = { // array para definir onde aparecerá a comida
    x: Math.floor( Math.random() * 15 + 1 ) * box,
    y: Math.floor( Math.random() * 15 + 1 ) * box
}

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

// função para criar a comida
function drawFood(){
    context.fillStyle = "red";
    context.fillRect( food.x, food.y, box, box );
}

// criando eventos para captar o botão pressionado no teclado
document.addEventListener('keydown', update);

// função para atualizar a tecla pressionada
function update( event ){ // códigos da direções 37 -> esquerda | 38 -> cima | 39 -> direita | 40 -> baixo
    if( event.keyCode === 37 && direction !== "right" ) direction = "left";
    if( event.keyCode === 38 && direction !== "down" ) direction = "up";
    if( event.keyCode === 39 && direction !== "left" ) direction = "right";
    if( event.keyCode === 40 && direction !== "up" ) direction = "down";
}

// função para iniciar o jogo
function startGame(){
    // permitindo que a cobrinha atravesse a tela de um lado para o outro
    if( snake[0].x > 15 * box && direction === "right" ) snake[0].x = 0;
    if( snake[0].x < 0 && direction === "left") snake[0].x = 16 * box;
    if( snake[0].y > 15 * box && direction === "down" ) snake[0].y = 0;
    if( snake[0].y < 0 && direction === "up" ) snake[0].y = 16 * box;

    // chamando a função que cria a tela do jogo na página
    createBG();
    // chamando a função que cria a cobrinha
    createSnake();
    // chamando a função que cria a comida
    drawFood();

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