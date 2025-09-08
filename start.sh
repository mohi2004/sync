#!/bin/bash
cd server && rpm run dev &
cd client && rpm run dev &
wait
