
//importing json-server package
const JSONServer= require('json-server')

// creating server using create method from json-server
const MPserver = JSONServer.create()

// generating path/route to server resource
const router = JSONServer.router('db.json')

// initiating json-server middleware
const middleware = JSONServer.defaults()


// creating PORT number for server
const PORT= 3000 | process.env.PORT

// implementing middleware to server
MPserver.use(middleware)
// implementing route to resource to server
MPserver.use(router)


// run command for server
MPserver.listen(PORT,()=>{
    console.log(`srever is running at:${PORT}`);
})

