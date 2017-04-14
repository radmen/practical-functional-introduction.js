const assert = require('assert');
const userScores = require('./userScores.json');
const validScores = require('./validScores.json');
const scores = require('./index.js');

describe('scores', function () {
    it('shoud return summary of users scores', () => {
        const result = scores.getScoresSummary(userScores);
        const sum = 100 + 45 + 55 + 99 + 74;
        const avgTime = (35 + 60 + 54 + 74 + 153) / 5;

        assert.deepEqual(result, { sum, avgTime });
    });
});
