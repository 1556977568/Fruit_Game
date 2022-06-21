
    var MaxWidth = document.body.clientWidth;//获取HTML宽度
    /* 创建一个div */
    // var div = document.createElement("div");
    var e=document.getElementById('Eat')
    // e.id="Eat";
     e.style.borderRadius="50px"
    /* 将div添加到网页中 */
    // e.appendChild(div);
    /* 设置div的样式 */
    e.style.width = "auto";
    e.style.height = "auto";
    e.style.padding='7px'
    e.style.fontWeight='bold'
    e.style.backgroundColor = "yellow";
    e.style.position = "absolute";
    e.style.top = "650px";
    e.style.fontFamily='华文隶书'
    e.style.fontSize="18px"
    e.style.lineHeight="30px"
    e.style.textAlign="center"
    e.style.boxShadow='3px 9px 39px 2px rgb(183, 61, 123)'
    e.style.fontWeight='800'
    e.style.left = MaxWidth/2+30+'px';
    e.innerText="∪∧∪"
    /* 键盘按下事件 */
    document.onkeydown = function ({which}) {
    /* 方块移动的速度，即每按一次方块移动的像素，值越大移动速度越快 */
    var speed = 10;
    if (which === 37) {
    e.style.left = parseInt(e.style.left) - speed + "px";
} else if (which === 39) {
    e.style.left = parseInt(e.style.left) + speed + "px";
}
}
