'use strict'

// Log application started
log.info(`[START] Application "${app.name}" v${app.version} has started at [${(new Date()).toString()}]\nAvailable configuration =>\nconfig: ${JSON.stringify(app.config)}\n`)

// Log when application is stopped
__.disposer(function () {
	log.info(`[STOP] Application "${app.name}" v${app.version} has stopped at [${(new Date()).toString()}]\n\n`)
})
