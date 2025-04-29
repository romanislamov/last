#!/bin/bash
echo "Building app..."
npm run build
echo "Deploying files to server..."
scp -r out/* root@194.163.133.90:/var/www/194.163.133.90/
echo "done"
