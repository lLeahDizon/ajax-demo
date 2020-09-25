console.log("我是main.js2");

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log(request.response);

    // 创建script标签
    const script = document.createElement("script");
    // 填写script内容
    script.innerHTML = request.response;
    // 插到身体里面
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

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
