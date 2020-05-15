let canvas = document.getElementById("snake"); // recuperando id do canvas para utilizar
let context = canvas.getContext("2d"); // definindo canvas como elemento 2d
let box = 32; // definindo a quantidade de quadros dentro do jogo
let snake = []; // array para criar a cobrinha
snake[0] = { // definindo posição inicial da cobrinha
    x: 8 * box,
    y: 8 * box
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

// chamando a função que cria a tela do jogo na página
createBG();

// chamando a função que cria a cobrinha
createSnake();