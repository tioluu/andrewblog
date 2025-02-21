#!/bin/sh

# Replace placeholders in React app with actual environment variables
echo "Setting backend URL to $REACT_APP_BACKEND_URL"

sed -i "s|__BACKEND_URL__|${REACT_APP_BACKEND_URL}|g" /usr/share/nginx/html/static/js/*.js

exec nginx -g "daemon off;"
