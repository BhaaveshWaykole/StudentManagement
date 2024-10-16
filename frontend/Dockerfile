    #import node image
FROM node:22 

    #working dir 
WORKDIR /usr/src/app

    #Copy json instances 
COPY package*.json ./
    
    
# Install application dependencies
RUN npm install

# Copy files 
COPY . . 


#Expose PORT
#for api : 8000
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]