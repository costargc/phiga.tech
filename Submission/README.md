## phiga.tech (group 49)
phiga.tech is a working name for our group at CSE 6242: Data and Visual Analytics for the masters in analytics from Georgia tech.

## Technology Used
![Python](https://img.shields.io/badge/Phyton-code-blue.svg)
![Javascript](https://img.shields.io/badge/Javascript-code-blue.svg)
![Html](https://img.shields.io/badge/HTML-language-blue.svg)
![CSS](https://img.shields.io/badge/CSS-language-blue.svg)
![Node](https://img.shields.io/badge/Node.js-server-red.svg)
![NPM](https://img.shields.io/badge/npm-package%20manager-red.svg)
![AWS](https://img.shields.io/badge/AWS-host-green.svg)
![mongoDB](https://img.shields.io/badge/mongoDB-database-yellow.svg)

- [Poster link](https://github.com/costargc/phiga.tech/blob/main/Submission/DOC/team49poster.pdf)

### DESCRIPTION
The data science and data visualization skills are now more important than ever in any research area specially in physics where navigating the body of knowledge, particularly the citations between publications and area of impact, remains a challenge for researchers. 
Here we build a fully functional REST API with the data and performed an analysis to identify correlation between the many publication journals in physics.  We hope that this work can help scientists across the world in improving their research skills and finding out critical papers that would be otherwise a challenge to find.

#### Current State
The current state of navigating though the physics knowledge consists of using free text search on specialized websites.
Researches must navigate a web of citations manually in the selected publications. This necessitates another set of searchers to find all relevant information. ​The process of performing a literature search has several challenges as identification of citing literature requires manual curation to obtain a full corpus of research. This is a time consuming manual labor.

#### Our Solution
Our solution, provides an application programming interface (API) to work with a curated data set provided by the American Physics Society (see Data Source section for more details). 
https://phiga-tech.herokuapp.com/api

### INSTALLATION
No installation is required. You can access the webservice here at https://phiga-tech.herokuapp.com
* for the API: https://phiga-tech.herokuapp.com/api
* for the Map: https://phiga-tech.herokuapp.com/map

The full source code (with the express and nodejs backend) is located at: https://github.com/costargc/phiga.tech/. The CODE folder contains 2 Juypter notebooks that show how to make use of the various functions of the API. 


### EXECUTION - How to run a demo on your code
In order to access the information you just need to connect to https://phiga-tech.herokuapp.com
* for the API: https://phiga-tech.herokuapp.com/api
* for the Map: https://phiga-tech.herokuapp.com/map

In order to execute the API you will be prompted with this screen and manual:
```
{
"message": "Hello from the backend server!",
"support": "We support the following requests:",
"types": [
{
"doi": "/api?doi_json=PhysRev.103.525.json",
"note": "case sensitive"
},
{
"affiliation": "/api?affiliations=Georgia&page=0",
"note": "not case sensitive",
"note2": "1000 ids per page"
},
{
"authors": "/api?authors=kastler&page=0",
"note": "not case sensitive",
"note2": "1000 ids per page"
}
],
"params": {}
}
```


# Group Members
    Rodrigo Costa (costa@gatech.edu)
    Anthony Sena (asena8@gatech.edu)
    Ryan J Miller (rmiller307@gatech.edu)
    Kamal Kishore Kashyap ()
