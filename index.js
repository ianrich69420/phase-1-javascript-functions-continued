// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (punctuation = "*") {
    return function (quality = "special") {
        return `You are ${punctuation}${quality}${punctuation}!`
    };
}

