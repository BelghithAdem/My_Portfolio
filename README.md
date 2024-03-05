
# [Portfolio Angular](shubhamkr.web.app)

![Portfolio](https://miro.medium.com/v2/resize:fit:720/format:webp/1*MGMIc4nzyEOmZRb05arMaA.png)

Portfolio Angular built in Angular + TypeScript + Tailwind CSS + Firebase

[![GitHub forks](https://img.shields.io/github/forks/shubham0809200/portfolio-angular?style=for-the-badge)](https://github.com/shubham0809200/portfolio-angular/network)
[![View Demo](https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black&logo=angular)](https://shubhamkr.web.app)

## Introduction

Portfolio Angular is built using Angular and Tailwind CSS for a modern design and rapid development. TypeScript is utilized for code clarity and safety. Additionally, Firebase is being integrated for backend services such as realtime-database. The result is a dynamic and functional portfolio website that showcases the developer's skills and experience.

## Tech Stack

- [Angular](https://angular.io)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com)

## Development 💻

Steps to convert the portfolio into your own and deploy it

1. Fork this repository:

```bash
   https://github.com/shubham0809200/portfolio-angular.git
```

2. Clone the forked repository:

```bash
   git clone https://github.com/<your-github-username>/portfolio-angular.git
```

3. Install the dependencies:

```bash
   npm install
```

To see the website, run:

```bash
   ng serve
```

Go to http://localhost:4200 to view the website.

Now go to the directory `src > assets > data > data.json`. You will find a JSON file there. Make all the necessary changes according to your choice, and all data in the portfolio will automatically change.

---

Now let's start the process to deploy the project on Firebase for free.

1.  Go to the Firebase console. If you do not have any project, you will see this, or else you will have the option to add a project.

![Firebase Console](https://cdn-images-1.medium.com/max/800/1*YNHHy0sGuqVA6cMKuKP6uA.png)

2.  Create/add a project and give a proper name to your project.

![Create Project](https://cdn-images-1.medium.com/max/800/1*2cXssXS84_eeujU_b9FLKw.png)

3.  Now let's register on the web `</>` to deploy our project.

![Register App](https://cdn-images-1.medium.com/max/800/1*JEItnuggfoyfVG-mnl0AoQ.png)

4. Give a proper name in the "Register app" field and check the <b> hosting checkbox. </b> Provide the proper domain name you want.

![Register App](https://cdn-images-1.medium.com/max/800/1*X61GXUpQI_gzJV1hE2zt_g.png)

---

Now let's get back to our code. In the root directory, open terminal / CMD and let's add Firebase.

1. First, let's log in to Firebase:

```bash
   // let login to firebase with the same accoutn you make the project on
   firebase login
```

2. Add Firebase to the project:

```bash
   ng add @angular/fire
```

When it will ask for selection, choose `ng deploy --hosting`.

make the selection carefully

Now let's make our portfolio online.

1. Run this command to build the project:

```bash
   ng build
```

2. Now to deploy:

```bash
   firebase deploy
```

It will return your hosting URL. Use it to see your website online and share.

Hope you like it.
<br/>
#Peace ✌️

---

```text
you can also refer to this article for more details
```

## [Article](https://medium.com/@i.shubham/portfolio-angular-a20a4be58933)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details

special Thank to [Ayush Kumar](https://github.com/ayushkumar1610) - for the amazing contribution of monter effect at front screen