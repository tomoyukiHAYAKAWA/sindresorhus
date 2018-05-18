'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Facebook',
		url: 'https://www.facebook.com/hayakawatomoyuki'
	},
	{
		label: 'Instagrame',
		url: 'https://www.instagram.com/tomoyuki_hayakawa/'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/tomoyukiHAYAKAWA'
	},
	{
		label: 'Qiita',
		url: 'https://qiita.com/tomoyuki_HAYAKAWA'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/tomotarosu13'
	},
	{
		label: 'App Store',
		ulr: 'https://itunes.apple.com/jp/developer/tomoyuki-hayakawa/id1373573441?mt=8'
	}
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hello! I’m Tomoyuki Hayakawa. iOS App, Image proccesing, OpenCV, Life is Tech!</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
