# Jenkins CI Lets Automate
## Installation
```
wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

## Upgrade
Once installed like this, you can update to the later version of Jenkins (when it comes out) by running the following commands:
```
sudo apt-get update
sudo apt-get install jenkins
```


(aptitude or apt-get doesn't make any difference.)
What does this package do?
Jenkins will be launched as a daemon up on start. See /etc/init.d/jenkins for more details.
The 'jenkins' user is created to run this service.
Log file will be placed in /var/log/jenkins/jenkins.log. Check this file if you are troubleshooting Jenkins.
/etc/default/jenkins will capture configuration parameters for the launch like e.g JENKINS_HOME
By default, Jenkins listen on port 8080. Access this port with your browser to start configuration.



```
If your /etc/init.d/jenkins file fails to start jenkins, edit the /etc/default/jenkins to replace the line
HTTP_PORT=8080
by
HTTP_PORT=8081
Here, 8081 was chosen but you can put another port available.
```
## Configuring Jenkins

So when you open jenkins first time! You will be logged in as an anonymous user with all the permissions
To secure Jenkins you should
Goto Configure System
Configure Jenkins Location
Goto Global Security
Check Jenkins own user database
Check allow users to sign up
Check Matrix based Security
Add users and give them permissions accordingly
Goto Plugin Manager
Install Git Plugin
Install HTML Publisher Plugin
Install NodeJS Plugin
Goto Jenkins CLI
Set the CSP Policy
## To Set CSP Policy
```
-------------------------------Add this Code to CLI-------------------

//System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "sandbox; default-src 'self'; img-src 'self'; style-src 'self'; child-src 'self'; frame-src 'self';")
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
System.getProperty("hudson.model.DirectoryBrowserSupport.CSP")
```


Your System Configuration for Jenkins is Done now!!
## Running Jenkins

> Jenkins Execution is a Three Step Process
> 1. Watch the Git Repo
> 2. Setup The Environment and test (Build)
> 3. Post Build Actions



### These are the images which say the above words

<img src = "https://cdn.rawgit.com/grepman/qunit-ci-with-Jenkins/master/images/1.png" />
<img src = "https://cdn.rawgit.com/grepman/qunit-ci-with-Jenkins/master/images/2.png" />
<img src = "https://cdn.rawgit.com/grepman/qunit-ci-with-Jenkins/master/images/3.png" />



## Important Notes
```
About Environment
We have used NodeJS Environment 
At production we use Node 5.0 as provided in NVM(Node Version Manager)
We use Grunt for Tasks 
We use Qunit for TDD
We use Istanbul for BDD, coverage, test coverage
```

## About Jenkins Operating Environment
```
Jenkins data-path is /root/.jenkins
Jenkins operating-path is /var/lib/jenkins
To configure any ssh related points
Goto /var/lib/jenkins/.ssh
Generate a ssh key pairs here
Change owner to all that is inside the .ssh folder to jenkins user
```



