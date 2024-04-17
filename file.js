const http=require("http")
const fs= require("fs")

const server = http.createServer(function(req,res){
    if(req){
        res.writeHead("err")
    }else{
        res.write("helo")
    }
    res.end()
})
server.listen(3000)