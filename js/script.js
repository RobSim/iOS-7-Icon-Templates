$(document).ready(function(){

	// Using our tweetAction plugin. For a complete list with supported
	// parameters, refer to http://dev.twitter.com/pages/intents#tweet-intent

	$('#tweetLink').tweetAction({
		text:		'iOS 7 Photoshop and Sketch Template',
		hashtags:	'ios, icon, template, psd, sketch',
		url:		'http://ios.robs.im',
	},function(){

		// When the user closes the pop-up window:

		$('a.downloadButton')
				.addClass('active')
				.removeClass('hidden')
				.attr('href','http://ios.robs.im/files/iOS-7-Icon-Set.psd');
		$('a.downloadButton2')
				.addClass('active')
				.removeClass('hidden')
				.attr('href','http://ios.robs.im/files/iOS-7-Vector-Icon.sketch.zip');
		$('a#tweetLink')
				.addClass('hidden');
		$('p.footnotes')
				.addClass('tweetLinkPaddingOn')
				.removeClass('tweetLinkPaddingOff');
	});

});