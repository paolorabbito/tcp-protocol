import net from "net";


const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString());
        socket.write('Hello world');
    });
});

server.listen(5555, () => {
    console.log('Server listening on port 5555');
});