let currentUrl = ""

let forwardStack = []

let backwardStack = []

function visitNew(url) {
	if (currentUrl !== "") {
  	backwardStack.push(currentUrl)
  }
  currentUrl = url
}

function forward() {
	if (forwardStack.length === 0 || currentUrl === forwardStack[forwardStack.length - 1]) {
  	alert("forward not available")
  } else {
  	backwardStack.push(currentUrl)
    currentUrl = forwardStack[forwardStack.length - 1]
    forwardStack.pop()
  }
}

function backward() {
	if (backwardStack.length === 0 || currentUrl === backwardStack[backwardStack.length - 1]) {
  	alert("no back available")
  } else {
    forwardStack.push(currentUrl)
    currentUrl = backwardStack[backwardStack.length - 1]
    backwardStack.pop()
  }
}

visitNew("first.com")
visitNew("second.com")

console.log(forwardStack , "forward")
console.log(backwardStack, "backward")
console.log(currentUrl)
backward()
backward()
