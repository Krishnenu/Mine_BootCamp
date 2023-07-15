const iplBoard = require("./IPL.json");
//Delhi Daredevils
function highestRunScoredInAnOver(board, playingTeam) {
  let result = {};
  const INNINGS = "innings";
  for (let team of board[INNINGS]) {
    if (team.team === playingTeam) {
      let maxRunOver = "";
      let totalRunsInOver = 0;
      for (let over of team["overs"]) {
        let overCount = over.over;
        if (overCount < 20) {
          let currRunCount = 0;
          for (let delivery of over["deliveries"]) {
            let runsPerBall = delivery["runs"]["total"];
            currRunCount = currRunCount + runsPerBall;
          }
          if (currRunCount > totalRunsInOver) {
            totalRunsInOver = currRunCount;
            maxRunOver = overCount;
          }
          overCount++;
        }
      }
      result.Team = playingTeam;
      result.MaxRunInOver = maxRunOver;
      result.TotalRunInMaxOver = totalRunsInOver;
    }
  }
  return result;
}

console.log(highestRunScoredInAnOver(iplBoard, "Delhi Daredevils"));
console.log(highestRunScoredInAnOver(iplBoard, "Royal Challengers Bangalore"));
