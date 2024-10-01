const socket = io();

socket.on('task-update', (task) => {
    console.log('Task updated:', task);
    // Update the task in the UI
});
