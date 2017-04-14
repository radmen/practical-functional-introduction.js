/**
 * Return summary of *valid* user scores
 *
 * Score is considered valid when:
 * 1) score >= 50
 * 2) time >= 30s
 *
 * @param {Array} userScores
 * @return {Object}
 */
function getScoresSummary(userScores) {
    let sum = 0;
    let avgTime = 0;
    let validEntries = 0;

    for (let i = 0; i < userScores.length; i++) {
        const item = userScores[i];

        if (item.score >= 50 && item.time >= 30) {
            validEntries += 1;
            sum += item.score;
            avgTime += item.time;
        }
    }

    return {
        sum,
        avgTime: avgTime / validEntries,
    };
}

module.exports = { getScoresSummary };
