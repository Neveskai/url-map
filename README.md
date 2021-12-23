# url-map 
 Your Url Shortener. :heavy_check_mark:
 100% more faster than others
 Save urls on your account
 
## Install Tools to Run Locally (Windows)
1. Download package
2. Install NodeJS. link: https://nodejs.org/en/download/
3. Download and Install WampServer to run Mysql. link: https://sourceforge.net/projects/wampserver/

## Run Project Locally (Windows)
1. Run CMD to directory 'client' and run: npm install
2. Run CMD to directory 'server' and run: npm install
3. Run Wamp Services.
4. In your browser type http://localhost/phpmyadmin/ and autenticate (default user: root, keyword: '')
5. Run SQL script to create the database located on server/schema/database/urlShortSql.sql
6. Run CMD into directory 'client' and run: npm run serve
7. Run CMD into directory 'server' and run: nodemon index.js
8. In your browser type http://localhost:8080

###### Future Updates
1. Cache config (server side and client side) :o: 
2. Malware verification :o: 
