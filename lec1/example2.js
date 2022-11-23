function Mongo(connectionStream) {
    this.connectionStream = connectionStream
}

Mongo.prototype.connect = function (onConnect) {
    onConnect()
}

const mongo = new Mongo('localhost:3434/db')

function Query() {

}
Query.prototype.setConnection = function (mongoRef) {
    this.mongoRef = mongoRef
}

mng.connect()
