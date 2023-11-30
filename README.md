
# CSC648-fa23-01-Team06 Repository

**Application URL: http://easyconnectgroup6.work:3000**

## Before completing Milestone 0

1. Change the name of the repository to csc648-spring23-SectionName-teamNN.
   - SectionName should be one of 01, 02, 03 or 04.
   - teamNN should be your team number. Team numbers whose value is less than
     10, please pad with a 0 (e.g. team 1 is Team01 team 11 is Team11). Please
     make sure to also **remove the username from the repository as well**!
     Teams with an incorrectly named repository will have points deducted from
     their milestone 0 grades.
   - Examples: `csc648-fa23-04-Team01`, `csc648-fa23-01-Team05`
2. Add ALL members of your team to this repository. For it to count, **they must
   ACCEPT the invite**.
3. Fill out the table below

| Student Name | Student Email | GitHub Username | Student's role |
| :----------: | :-----------: | :-------------: | :------------: |
|   Kurtis Chan  | kchan26@mail.sfsu.edu |      kchanw       |  Team Leader   |
|   Ethan Vocal   | evocal@mail.sfsu.edu |      ethan-vocal       |  Scrum Master  |
|   David Lemming   | dlemming@sfsu.edu |      DLemming       | Github Master  |
|   Mekonnen Tesfazien   | mtesfazien@sfsu.edu |        mokietes     | Front-End Lead  |
|   Hann Zhao   | hzhao6@sfsu.edu |      hazhao33       |  Back-End Lead  |
|   Ahmar Huda  | ahuda@mail.sfsu.edu |      ahuda620       | Back-End Lead |

**NO code should be stored in the root of your repository. You may rename the
`application/` folder to your team's application name if you'd like, but all the
source code should be stored inside that folder.**






# csc648-01-fall23-team06
**In order to run my code, you must make a .env file in the backend folder and add the following code**  
```
PORT=4000
MONGO_URI=mongodb+srv://user:pass@cluster0.vymkyhl.mongodb.net/jobdatabase
SECRET=SiEyU5UXhnURaZgbY3viTdpDun9aAnZgwT
```
---------------------------------------------------------------- 
**Features/Functionality as of 9/23** 
---------------------------------------------------------------- 
**Registration page is functional and creates user accounts which are stored in the database.**    
 - Page will display if an email is already being used and require you to choose another one    
 - Page will also require you to use a strong password to sign up  
   - Password must have a capital letter, a symbol, and be atleast 8 characters long
   
**Login page is also functional, however the features are limited since we don't have a profile page or my jobs page ready atm. Will work on the login page more once more features are ready.**    
  - User can log in using their credentials  
  - Page will display errors such as incorrect password or incorrect email  
  - Page will also check if the input fields are filled out  
  - Once the user is logged in, their email will be displayed in the navbar and be redirected to the home page(can change this later once more pages are added)  
  

