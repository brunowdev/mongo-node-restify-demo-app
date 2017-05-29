module.exports = {
    name: 'rest-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://' + process.env['DB_USERNAME'].trim() + ':' + process.env['DB_PASSWORD'].trim() + '@brunowdev-shard-00-00-b4idp.mongodb.net:27017,brunowdev-shard-00-01-b4idp.mongodb.net:27017,brunowdev-shard-00-02-b4idp.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=brunowdev-shard-0&authSource=admin'
    }
}