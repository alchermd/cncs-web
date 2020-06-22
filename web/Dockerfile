FROM node:current-slim

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /web
ADD . /web

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/web/run.sh"]
CMD ["start"]