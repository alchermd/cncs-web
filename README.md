> This repo is archived! The web client is now added as a Docker service on the main [cncs](https://github.com/alchermd/cncs/) repository.

---

# Concise Web Client [![Build Status](https://travis-ci.com/alchermd/cncs-web.svg?branch=master)](https://travis-ci.com/alchermd/cncs-web)

## Getting Started

To run the app with Docker:

```bash
$ cp .env .env.local # <- Edit as needed
$ docker build . -t cncs-web:latest
$ docker run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/web cncs-web:latest
```
