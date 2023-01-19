const canvas = document.getElementById("snake-game");
const ctx = canvas.getContext("2d");
const blockSize = 10;
let snake = [{x: 150, y: 150}];
let direction = "right";
let food = {x: Math.floor(Math.random() * canvas.width / blockSize) * blockSize,
            y: Math.floor(Math.random() * canvas.height / blockSize) * blockSize};
setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (direction) {
        case "right":
            snake.unshift({x: snake[0].x + blockSize, y: snake[0].y});
            break;
        case "left":
            snake.unshift({x: snake[0].x - blockSize, y: snake[0].y});
            break;
        case "up":
            snake.unshift({x: snake[0].x, y: snake[0].y - blockSize});
            break;
        case "down":
            snake.unshift({x: snake[0].x, y: snake[0].y + blockSize});
            break;
    }
    snake.pop();
    for (let block of snake) {
        ctx.fillStyle = "green";
        ctx.fillRect(block.x, block.y, blockSize, blockSize);
    }

    ctx.fillStyle = "blue";
    ctx.fillRect(food.x, food.y, blockSize, blockSize);
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food = {x: Math.floor(Math.random() * canvas.width / blockSize) * blockSize,
                y: Math.floor(Math.random() * canvas.height / blockSize) * blockSize};

        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
    }
}, 100);

document.addEventListener("keydown"), event => {
    switch (direction) {
        case "right":
            snake.unshift({ x: snake[0].x + blockSize, y: snake[0].y });
            break;
        case "left":
            snake.unshift({ x: snake[0].x - blockSize, y: snake[0].y });
            break;
        case "up":
            snake.unshift({ x: snake[0].x, y: snake[0].y - blockSize });
            break;
        case "down":
            snake.unshift({ x: snake[0].x, y: snake[0].y + blockSize });
            break;
    }
}