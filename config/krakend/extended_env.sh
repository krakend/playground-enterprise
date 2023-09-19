#!/bin/bash

# enable debug output:
export FC_DEBUG=true
# when running from the local environment with a local executable, use this config:
export FC_CONFIG=$PWD/fc_config.local.json

# this alias will run the krakend in a different port of that used by the dockerized krakend
# from the docker-compose file:
alias r='./krakend run --config ./extended/krakend.json --port 8666'

# this alias allows to check the configuration and the issues it might have
alias d='clear; ../../krakend check -c extended/krakend.json 2> out.err.dbg | tee out.dbg'

# this alias provides info about the composed output file in case of error
alias i='cat out.err.dbg | grep "ERROR parsing the configuration file" | sed "s/.*tmp\(.*\)json.*/\/tmp\/\1json/g" | xargs cat'
