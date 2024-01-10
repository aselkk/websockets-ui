import { httpServer } from "./src/http_server/index";
import { WebSocketServer} from 'ws';
import { controlWebSocketConnection } from "./src/ws_server/index";

const HTTP_PORT = 8181;
const WS_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start websocket server on the ${WS_PORT} port!`);
const wss = new WebSocketServer({port: WS_PORT});

wss.on('connection', (wsc:any) => {
  controlWebSocketConnection(wsc);
});

