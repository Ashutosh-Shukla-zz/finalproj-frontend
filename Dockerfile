# Use a prebuilt node image
FROM node:10

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file that contains all the dependencies to the container
COPY package.json /app

# Run yarn to retrieve all dependencies
RUN yarn

# Copy the rest of the project files in the container
COPY . .

# Expose port 8081 so that it can be accessed when the container runs
EXPOSE 8080	

# Start the server
ENTRYPOINT ["node","server.js"]