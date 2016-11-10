# contacts-application - Kontaktverwaltung
## Universität zu Lübeck - Aktuelle Themen SSE - Contacts Application

# 1. Installation
Damit das Projekt installiert werden kann, muss Maven in der Version min. 3.3.3 und Java 1.8 vorhanden sein. 
Des weiteren wird für das Frontend Node (Version min. 6.9.1) und NPM (Version 3.10.8) benötigt.
Als Datenbank wird eine MongoDB (Version 3.2.0) verwendet. Diese muss ebenfalls auf dem System installiert sein.

# 2. Build and Run
## Gesmtes Projekt
Um das gesamte Projekt zu bauen, kann Maven verwendet werden.

```
mvn clean install
```

Anschließend kann das jar mit

```
java -jar [NAME_OF_JAR]
```

gestartet werden.
Der Server läuft auf dem Port 8080.

## Server
Der Server kann mit 

```
mvn clean package
```

gebaut werden.
Zum Starten des Servers verwende man

```
java -jar [NAME_OF_JAR]
```

## Client
Der Client kann in src/main/webapp mit

```
npm install
```

gebaut werden.