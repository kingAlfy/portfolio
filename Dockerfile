FROM php:8.2-apache
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y git
RUN git clone https://github.com/kingAlfy/portfolio.git
WORKDIR portfolio
RUN npm install
RUN npm run build
RUN mv ./dist/* /var/www/html
RUN rm -fr /var/www/html/portfolio
