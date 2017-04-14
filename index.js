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
    const validScores = [];

    for (let i = 0; i < userScores.length; i++) {
        const item = userScores[i];

        if (item.score >= 50 && item.time >= 30) {
            validScores.push(item);
        }
    }

    let sum = 0;
    let avgTime = 0;

    for (let i = 0; i < validScores.length; i++) {
        sum += validScores[i].score;
        avgTime += validScores[i].time;
    }

    return {
        sum,
        avgTime: avgTime / validScores.length,
    };
}

module.exports = { getScoresSummary };
