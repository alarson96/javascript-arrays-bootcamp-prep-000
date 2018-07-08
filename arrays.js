var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b)
{
   [b, ...a]
   return a
}

function destructivelyAddElementToBeginningOfArray(a, b)
{
  a.unshift(b)
  //return a
}

function addElementToEndOfArray(a, b)
{
  [...a, b]
  return a
}

function destructivelyAddElementToEndOfArray(a, b)
{
  a.push(b)
  //return a
}

function accessElementInArray(a, n)
{
  return a[n]
}

function removeElementToBeginningOfArray(a)
{
   a = a.slice(-(n-1))
   return a
}

function destructivelyRemoveElementToBeginningOfArray(a)
{
  a.shift()
  //return a
}
function removeElementToBeginningOfArray(a)
{
   a = a.slice(-(n-1))
   return a
}

function destructivelyRemoveElementToBeginningOfArray(a)
{
  a.shift()
  //return a
}
