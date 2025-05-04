#!/bin/bash
npm run build
scp -r out/* root@194.163.133.90:/var/www/new-site.com/html/