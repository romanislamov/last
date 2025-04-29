#!/bin/bash

# --- Configuration ---
REMOTE_USER="root"
REMOTE_HOST="194.163.133.90"
REMOTE_DEST_PATH="/var/www/new-site.com/html/"  # Ensure this matches your Nginx root
LOCAL_BUILD_DIR="out"  # Use "out" for static export or ".next" for server-side rendering
APP_DIR="/path/to/your/nextjs/app"  # Local directory of your Next.js app
REMOTE_APP_DIR="/path/to/your/nextjs/app"  # Remote directory for app

# --- Script ---
echo "Building the Next.js app..."

# Build the app for production
cd $APP_DIR
npm run build

# Optionally export static files if using static export
# Uncomment if you want to generate a static site (optional for SSR apps)
# npm run export

# Clean up the old files on the server (if necessary)
# Uncomment this line to remove old files
# echo "Removing old files from server..."
# ssh ${REMOTE_USER}@${REMOTE_HOST} "rm -rf ${REMOTE_DEST_PATH}/*"

# Deploying the app
echo "Deploying new build to server..."
scp -r ${LOCAL_BUILD_DIR}/* ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DEST_PATH}

# Restart the Next.js app if you're using PM2 (for server-side rendering)
# Uncomment these lines to enable PM2 deployment
# echo "Restarting Next.js app with PM2..."
# ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_APP_DIR} && pm2 restart next-app"

# Done
echo "Deployment complete!"
