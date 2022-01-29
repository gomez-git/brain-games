install: # install dependencies
	npm ci
	npm link

brain-games: # run brain-games.js
	node bin/brain-games.js

publish: # publish npm package
	npm publish --dry-run

lint: # run linter
	npx eslint .
