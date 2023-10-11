FROM php:8.2-apache

# Version deprecated
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -

RUN apt-get update

RUN apt-get install -y nodejs

RUN apt-get install -y git

RUN apt-get install -y npm

RUN apt-get install -y nano

RUN git clone https://github.com/kingAlfy/portfolio.git

RUN mkdir portfolio-web

WORKDIR portfolio

RUN npm install

RUN npm run build

RUN mv ./dist/.htaccess /var/www/html/portfolio-web

RUN mv ./dist/* /var/www/html/portfolio-web

RUN rm -fr /etc/apache2/sites-available/*

RUN mv ./sites-available/* /etc/apache2/sites-available

WORKDIR /var/www/html

RUN rm -fr /var/www/html/portfolio

RUN apt-install -y certbot

RUN a2ensite alfonsoravelogil.conf

RUN a2dissite 000-default.conf

RUN a2enmod rewrite && a2enmod ssl

EXPOSE 80
EXPOSE 443
