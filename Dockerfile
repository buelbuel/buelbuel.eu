FROM alpine:latest

RUN apk add --no-cache nginx && \
    echo > /etc/environment && \
    echo 'events {} http { include /etc/nginx/mime.types; server { listen 8080; server_name localhost; root /; index index.html; location / { try_files $uri $uri/ /index.html; } location ~* \.(js|css|json)$ { add_header Content-Type application/javascript; } } }' > /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
