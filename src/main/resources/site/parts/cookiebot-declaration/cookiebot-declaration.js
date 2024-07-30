const portal = require('/lib/xp/portal')

exports.get = function (req) {
	const siteConfig = portal.getSiteConfig()
	const enableCookieBot = req.mode && (req.mode === 'live' || req.mode === 'preview') && siteConfig.cookieBotId
	const previewMessage = siteConfig.cookieBotId ? "Cookie Declaration is only visible in preview or live" : "Cookiebot ID missing from app config"
	let language = siteConfig.language ? `data-culture="${siteConfig.language}"` : ""
	return {
		body: enableCookieBot ? `<script id="CookieDeclaration" src="https://consent.cookiebot.com/${siteConfig.cookieBotId}/cd.js" type="text/javascript" ${language} async></script>` : `<div style="height:350px; width: 100%;"><span style="padding:2rem;font-size:16px;font-weight:600;color:grey;">${previewMessage}</span></div>`
	}
}
