let obj = [
    {
        name: "sanjay",
        id: 10,
        child: [{
            name: "marz",
            id: 20,
            child: [{
                name: "amrit",
                id: 30,
                child: [
                    {
                        name: "deep",
                        id: 30,
                        child: []
                    },
                    {
                        name: "more",
                        id: 37,
                        child: [{
                            name: "more deep last one",
                            id: 88,
                            child: []
                        }]
                    }
                ]
            }]
        }]
    },
    {
        name: "second child",
        id: 100,
        child: [
            {
                name: "hello"
            }
        ]
    }
]

function getAllLeafNode(nodes, result = []) {
    for (let node of nodes || []) {
        if (!node.child || node.child.length === 0) {
            result.push(node)
        } else {
            getAllLeafNode(node.child, result)
        }
    }
  
    return result
}

console.log(getAllLeafNode(obj));
