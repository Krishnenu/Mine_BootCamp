const taskdata = require("./filterTask.json");

function getPropertyByStatusName(propertyName, statusName) {
  let taskStatus = [];
  for (let task of taskdata["tasks"]) {
    const progress = task["status"]["name"];
    if (progress === propertyName) {
      taskStatus.push(task[statusName]);
    }
  }
  return taskStatus.sort();
}


console.log(getPropertyByStatusName("Pending", "assignedTo"));
console.log(getPropertyByStatusName("Pending", "name"));
console.log(getPropertyByStatusName("Pending", "id"));
console.log(getPropertyByStatusName("Pending", "statusChangeDate"));
