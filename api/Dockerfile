#node image to use : 
FROM node:22

WORKDIR /usr/src/app

#Copy json instances 
COPY package*.json ./

RUN npm install
RUN npm rebuild bcrypt --update-binary

# Copy files 
COPY . . 


#Expose PORT
#for api : 8000
EXPOSE 8000

# Define the command to run the application
CMD [ "npm", "start" ]