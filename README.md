<div align="center">
  <img src="https://github.com/user-attachments/assets/f86cffbd-c1e8-4367-9f08-55378decbfdf">
  
  This **AMA (Ask me Anything)** repository holds the WebServer of the AMA project.
</div>

# ⁉ AMA | Ask me Anything
The project consists on creations of **ROOMS** where you can share with your audience in your next AMA Meeting.  
In the Room, anyone can make questions and upvote others people questions.

## 🧰 Backend
The backend of this application was developed using `Go` and it's avaiable in its own repository.  
There has more details how to setup the `postgres database` using `docker` so you can run the full webapp.

- **[AMA BACKEND](https://github.com/rodrigomolter/ama-backend)**

## Pre-requirements 📋

To run this project you will need

- [Node.js](https://nodejs.org/en/) (I've used version `v18.17.1` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## 🌲 Environment Variables
Make a copy of the `env.template` file and rename it to `.env`  
Change the variables inside `.env` with the endpoint of your backend application.  

## Installation 🏗️
To install the dev dependencies, run 
```sh
npm install -f
```
> [!NOTE]  
> I'm using [React 19](https://react.dev/blog/2024/04/25/react-19) on this project.
> You need to use `-f` to force install because some of dependecies require React 18 and will give some warnings.

And start the App with 
```sh
npm run dev
```

## 🙌 Support this project

If you want to support this project, leave a ⭐.

Happy coding! 🚀
___

Made with ❤️ by [Rodrigo Molter](https://www.linkedin.com/in/rodrigo-molter/).
