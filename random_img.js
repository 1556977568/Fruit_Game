
let oBox = document.getElementById('box');
// var MaxHeight = window.innerHeight;//获取HTML高度
var MaxWidth = window.innerWidth;//获取HTML宽度
let timer;
let score = document.getElementById('score')
let Score = 0
let allSetInterval
let gameOver

document.getElementById('bGameStart').onclick = function () {
    alert('点击开始游戏后请直行修改屏幕比例，以便有更好的游戏体验')
    if (Number(document.getElementById('gameTime').value) === 0) {
        alert("请输入你的游戏时间")
    } else {
        let loadTime = document.getElementById('loadTime')
        loadTime.style.display = 'block'
        let i = 5
        let loadSetInterval = setInterval(function () {
            i--
            loadTime.innerHTML = "请稍等！即将进入游戏:" + i + "秒"
            loadTime.style.fontFamily="华文行楷"
        }, 1000)
        let gameSetInterval = document.createElement('p')
        gameSetInterval.style.left=MaxWidth/2+'px'
        let gameTime = Number(document.getElementById('gameTime').value)
        gameOver = setInterval(function () {
            GameOver()
        }, 1000)

        function GameOver() {
            gameTime--
            gameSetInterval.innerHTML = "距离游戏结束还剩:" + (gameTime + 5) + "秒"
            gameSetInterval.style.fontFamily='华文行楷'
            if (gameTime === -5) {
                gameSetInterval.style.display = 'none'
                oBox.style.display = 'none'
                e.style.display = 'none'
                let final = document.createElement('p')
                final.style.position = "absolute"
                final.style.top = "20%"
                final.style.left = MaxWidth / 2 - 150 + 'px'
                final.style.color = "#FFF"
                final.innerHTML = "Game Over" + "<br>" + "你的得分为:" + Score+'00'
                document.body.appendChild(final)
                clearInterval(gameOver)
                clearInterval(allSetInterval)
            }
        }

        allSetInterval = setInterval(function () {
            clearInterval(loadSetInterval)
            document.getElementById('gameStart').style.display = 'none'
            document.getElementById('Eat').style.display = 'block'
            document.getElementById('gameStop').style.display = 'block'

            oBox.style.display = "block"
            loadTime.style.display = 'none'
            gameSetInterval.style.position = "absolute"
            gameSetInterval.style.top = "15%"
            gameSetInterval.style.left = MaxWidth / 2 - 215 + 'px'
            // gameSetInterval.style.backgroundColor = "black"
            gameSetInterval.style.backgroundColor='rgba(0,0,20,0.5)'
            gameSetInterval.style.filter='Alpha(opacity=100)'
            gameSetInterval.style.color = "#FFF"
            document.body.appendChild(gameSetInterval)
            fruitDrop();
        }, 5000);
    }
    document.getElementById('gameStop').onclick = function () {
        document.getElementById('gameContinue').style.display = "block"
        document.getElementById('gameStop').style.display='none'
        clearInterval(gameOver)
        clearInterval(allSetInterval)
        clearInterval(timer)
        pGameStop = document.createElement('p')
        pGameStop.innerHTML = '游戏已暂停'
        pGameStop.style.position = "absolute"
        pGameStop.style.top = "10%"
        pGameStop.style.fontFamily = "华文行楷"
        pGameStop.style.color = "#FFF"
        pGameStop.style.backgroundColor = "black"
        document.body.appendChild(pGameStop)

    }
    document.getElementById('gameContinue').onclick = function () {
        pGameStop.style.display = 'none'
        document.getElementById('gameStop').style.display = "block"
        document.getElementById('gameContinue').style.display = 'none'
        setInterval(function () {
            fruitDrop();
        }, 5000)
        setInterval(function () {
            GameOver();
        }, 1000)
    }

}
// let gameStop=document.createElement('button')
// gameStop.innerHTML='游戏暂停'
// document.body.appendChild(gameStop)
// gameStop.onclick=function (){
//     clearInterval(allSetInterval)
//     let pGameStop=document.createElement('p')
//     pGameStop.innerHTML='游戏已暂停'
//     document.body.appendChild(pGameStop)
//     let gameContinue=document.createElement('button')
//     gameContinue.innerHTML='继续游戏'
//     document.body.appendChild(gameContinue)
//     gameContinue.onclick=function (){
//         setInterval(function (){
//             fruitDrop();
//         },5000)
//     }
// }

function fruitDrop() {
//food
    var food = document.createElement('img');
//随机x 随机大小
    food.style.left = Math.floor(Math.random() * MaxWidth) + 'px';
    food.style.width = Math.floor(Math.random() * 20 + 25) + 'px';
    oBox.appendChild(food);
//随机加载不同图片
    var num = Math.floor(Math.random() * 12 + 1);
    food.src = 'img/sg' + num + '.png';
//随机加载速度
    var speed = Math.floor(Math.random() * 50 + 5);
    timer = setInterval(function () {
        var top = food.offsetTop;
        top += speed;
        food.style.top = top + 'px';
        // console.log(food.style.top)
        if (top >= 650) {
            // console.log(top)
            let fruitLeft = food.style.left.split("px")[0];//截取第一个px前面的数
            let eLeft = e.style.left.split("px")[0];
            if (eval(fruitLeft) + 32 >= eLeft && // 最左侧判定
                fruitLeft <= eval(eLeft) + 50 // 最右侧判定
            ) {
                e.style.transform='scale(1.3)'
                e.innerText="★v★"
                e.style.backgroundColor='greenyellow'
                food.style.display = "none"
                score.innerText = ++Score + '00'
                setTimeout(function (){
                    e.style.transform='scale(1)'
                    e.innerText="∪∧∪"
                    e.style.backgroundColor='yellow'
                },300)
            }
            if (top >= 710) {
                oBox.removeChild(food);
                if (Score<=0){
                    Score=0
                }else {
                    score.innerText = --Score + '00'
                }
            }
        }
    }, 100)
}


