const portal = require('/lib/xp/portal')
const thymeleaf = require('/lib/thymeleaf')

exports.responseProcessor = function (req, res) {
	const siteConfig = portal.getSiteConfig()
	const content = portal.getContent()

	if (!content) {
		return res
	}

	const view = resolve('add-cookie-bot.html')
	const enableCookieBot = req.mode && req.mode === 'live' && siteConfig.cookieBotId

	const params = {
		enableCookieBot,
		cookieBotId: siteConfig.cookieBotId
	}
	if (siteConfig.language) {
		params.language = siteConfig.language
	}

	const cookieBotScript = thymeleaf.render(view, params)

	if (!res.pageContributions.headBegin) {
		res.pageContributions.headBegin = []
	}

	res.pageContributions.headBegin.push(cookieBotScript)

	return res
}
