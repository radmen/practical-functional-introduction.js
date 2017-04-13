const assert = require('assert');
const userScores = require('./userScores.json');
const validScores = require('./validScores.json');
const scores = require('./index.js');

describe('scores', function () {
    it('should return valid scores', () => {
        const result = scores.getValidScores(userScores);
        assert.deepEqual(result, validScores);
    });

    it('should return sum of valid scores', () => {
        const sum = 100 + 45 + 55 + 99 + 74;
        assert.equal(scores.sumScores(userScores), sum);
    });

    it('should return avg time', () => {
        const avg = (35 + 60 + 54 + 74 + 153) / 5;
        assert.equal(scores.getAvgTime(userScores), avg);
    });
});
