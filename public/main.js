console.log("我是main.js2");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    // 创建style标签
    const style = document.createElement("style");
    // 填写style内容
    style.innerHTML = request.response;
    // 插到头里面
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
