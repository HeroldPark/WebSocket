mkdir WebSocket
cd WebSocket
touch index.html        // 이 파일을 작성한다.
npm init --yes          // package.json 생성
npm install ws --save   // node_modules 생성
touch server.js         // 이 파일을 작성한다.
node server.js          // 서버 실행.

> Executing task in folder WebSocket: npm run start <
> WebSocket@1.0.0 start D:\Workspace\VSProject\WebSocket
> node server.js

server started
listening on 3000
data received
 'Client message: Hi!'

서버를 실행한 후 client를 실행할때 다음과 같이 해야 한다.
file:///D:/Workspace/VSProject/WebSocket/index.html (OK)

그러면 console 화면에 다음과 같이 출력된다.
Server message: Client message: Hi!

1. 오류
http://localhost:[port]/client.html (NOK)
you will get the message "upgrade required".
© 2020 GitHub, Inc.

2. jsp 실행 방법
jsp 파일은 Tomcat 실행 설정/실행 후 접속한다.
http://localhost:[port]/client.html