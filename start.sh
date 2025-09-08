#!/bin/bash

# Navigate to server folder and start it in background
cd server
rpm install
rpm run dev &
SERVER_PID=$!

# Navigate to client folder and start it
cd ../client
rpm install
rpm run dev &
CLIENT_PID=$!

# Wait for both to finish (keeps Railway process alive)
wait $SERVER_PID $CLIENT_PID
