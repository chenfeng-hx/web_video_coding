db.comment.insert({
    "articleid":"100000",
    "content":"今天天气真好，阳光明媚",
    "userid":"1001",
    "nickname":"Rose",
    "createdatetime":new Date(),
    "likenum":NumberInt(10),
    "state":null
})

db.comment.insertMany([{
    "item": "journal",
    "qty": 25,
    "size": {
        "h": 14,
        "w": 21,
        "uom": "cm"
    },
    "status": "A"
}, {
    "item": "notebook",
    "qty": 50,
    "size": {
        "h": 8.5,
        "w": 11,
        "uom": "in"
    },
    "status": "A"
}]);

try {
    db.comment.insertMany([{
        "item": "journal",
        "qty": 25,
        "size": {
            "h": 14,
            "w": 21,
            "uom": "cm"
        },
        "status": "A"
    }, {
        "item": "notebook",
        "qty": 50,
        "size": {
            "h": 8.5,
            "w": 11,
            "uom": "in"
        },
        "status": "A"
    }]);    
} catch (error) {
    print(error)
}

