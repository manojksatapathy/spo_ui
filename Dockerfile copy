FROM websphere-liberty:webProfile8

# Add my app and config
COPY --chown=1001:0  ./build/libs/spo_ui.war /config/apps/
COPY --chown=1001:0  ./src/main/liberty/config/server.xml /config/


ARG SSL=true

# This script will add the requested XML snippets, grow image to be fit-for-purpose and apply interim fixes
RUN configure.sh


ENV LICENSE accept

USER root
RUN mkdir /config/jwt && chown -R 1001:0 /config/jwt
RUN apt-get -y update \
 && apt-get upgrade -y \
 && apt-get install -y iputils-ping net-tools wget gettext-base vim  zip unzip curl \
 && mv /config/apps/spo_ui.war  /config/apps/spo_ui1.war \
 && unzip /config/apps/spo_ui1.war -d /config/apps/spo_ui.war \
 && rm /config/apps/spo_ui1.war \
 && chown -R 1001:0 /config/apps/

USER default

CMD /opt/ibm/wlp/bin/server run defaultServer
