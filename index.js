
function takeANumber(katzDeli) {
  var i=0
  i++
  return 'Welcome, ' + i
}



function nowServing(deliLine) {
 if (deliLine.length === 0) {
   return 'There is nobody waiting to be served!'
 }
 else { 
   var position = deliLine[0]
   deliLine.shift();
   return 'Currenty serving ' + position + '.'
   
 }
}



function currentLine(line) {
  if (line.length===0) {
    return 'The line is currently empty.'
  }
  else {
    return 'The line is currently: ' + '1. ' + line[0] + ' , 2. ' + line[1] + ' , 3. ' + line[2]
  }
}

