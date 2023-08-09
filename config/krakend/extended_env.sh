export FC_ENABLE=1
export FC_DEBUG=true
export FC_CONFIG=$PWD/fc_config.json
alias d='clear; ../../krakend check -c extended/krakend.json 2> out.err.dbg | tee out.dbg'
alias dt='clear; ../../krakend check -c extended/krakend_tmp.json 2> out.err.dbg | tee out.dbg'
alias i='cat out.err.dbg | grep "ERROR parsing the configuration file" | sed "s/.*tmp\(.*\)json.*/\/tmp\/\1json/g" | xargs cat'
