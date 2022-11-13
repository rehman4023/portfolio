# portfolio

this is a very simple portfollio website built with tailwind css and react js, deployed to firebase for free.



## Getting started

1. Clone the repo 
    `git clone https://github.com/rehman4023/portfolio.git`
    or use the template by clicking on "Use this template"
    

2. Go into the project directory and install the node modules by running
	 `npm install`

3. After successfully installing all the node modules run
  `npm start`
  
 You should be able to see the website running in a new tab on http://localhost:3000/

## Customisation

For user simplicity I created a central file where you can add your info which will be reflected on local/prod.

### Experience
  - In the Experience section you can add your work history. For that, you should go to `/src/ExData.js`, where you can modify the JSON according to you.
  ```
  const workHistory = [
    {
      companyName : '..',
      role: '..',
      duration: "...",
      workDes: [
          '....',
          '...',
          '..'
        ],
      exposer: [..] ,
      link: '..',
   },
  ]
  ```

### Projects
  - In the Projects section you can add your Project. For that, you should go to `/src/projectData.js`, where you can modify the JSON according to you.
  ```
  const projects = [
     {
         title: '...',
         image: '..',
         description: "...",
         tools: ["..",".."],
         github: '...',
         link: '..',
      },
  ]
  ```
  
The same customisations can be implemented in the skills and main sections. For that you can refer to the file `src/root.link.js` and  `src/SkillData.js`.
 


# To Deploy use firebase 

`firebase auth` 
authenticate with your gmail

`firebase init`

select project name or add a new project

`firebase emulators:start`
after 'npm run build' test the deployment using emulators

`firebase deploy`

check every thing on emulator and use the deploy command to deploy to firebase

# configure Domain name

configure you domain in firebase by following this [doc](https://firebase.google.com/docs/hosting/custom-domain).


# fun fact 
 if you go to public/images you will find all the images required from aws, gcp, azure 3 major cloud providers

# Refrences

I used this repo as a refrence [here](https://github.com/codewithvk/React-simple-portfolio).

[aws](https://aws.amazon.com/es/architecture/icons/) icons from here.

[GCP](https://cloud.google.com/icons) icons from here.

