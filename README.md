# contacts-application - Kontaktverwaltung
## Universität zu Lübeck - Aktuelle Themen SSE - Contacts Application

# 1. Installation
Damit das Projekt installiert werden kann, muss Maven in der Version min. 3.3.3 und Java 1.8 vorhanden sein. 
Des weiteren wird für das Frontend Node (Version min. 6.9.1) und NPM (Version 3.10.8) benötigt.
Als Datenbank wird eine MongoDB (Version 3.2.0) verwendet. Diese muss ebenfalls auf dem System installiert sein.

## Schritt für Schritt
### 1. Install MongoDB:
#### 1.1 Go to: 

```
https://docs.mongodb.com/v3.2/administration/install-community/
```

#### 1.2 Select your Operating System
#### 1.3 Follow the instructions
#### 1.4 Start MongoDB using the following: sudo service mongod start

### 2. Install Java 1.8 (JDK)
#### 2.1 Go to

```
http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
```

#### 2.2 Select "Java SE Development Kit 8uXXX"

### 3. Install Maven
#### 3.1 Go to

```
http://maven.apache.org/download.cgi
```

and download Maven 3.3
#### 3.2 Follow the instructions: http://maven.apache.org/install.html


### 4. Clone the Git-Repository:

```
git clone https://github.com/sebr8041/contacts-application.git
```

### 5. Build and Run 
#### 5.1 Change to directory: 

```
cd contacts-application
```

#### 5.2 Build the Project using: 

```
mvn clean install
```

#### 5.3 Run the server by typing:

```
java -jar target/contact-application-1.0.0-SNAPSHOT.jar
```

#### 5.4 Open a Webbrowser and go to http://localhost:8080/
