FROM openjdk:8-jdk

# Node.js, xvfb
RUN curl -L https://deb.nodesource.com/setup_10.x | bash - \
	&& apt-get install -y nodejs npm xvfb \
	&& rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
	&& echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
	&& apt-get update -qqy \
	&& apt-get -qqy install google-chrome-stable \
	&& rm /etc/apt/sources.list.d/google-chrome.list \
	&& rm -rf /var/lib/apt/lists/* /var/cache/apt/* \
	&& sed -i 's/"$HERE\/chrome"/"$HERE\/chrome" --no-sandbox/g' /opt/google/chrome/google-chrome



# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source

RUN npm install -g protractor
RUN npm install -g cucumber
RUN webdriver-manager update

COPY package.json package-lock.json hooks.js protractor.conf.js server.js tsconfig.json ./
COPY cucumber/ ./cucumber/
RUN npm install
#RUN npm run build

# Set display port and dbus env to avoid hanging
ENV DISPLAY=:99
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

RUN Xvfb :99 -screen 0 640x480x8 -nolisten tcp &

WORKDIR /usr/src

EXPOSE 8090
CMD [ "node", "./app/server.js" ]
#CMD [ "npm", "run", "test"]