
module.exports=(server)=>{    
var usersList = [
    {id:1,name: 'ahmed'},
    {id:2,name: 'mouhamed'},
    {id:3,name: 'rim'}

]
    server.get('/users',(req,res)=>{
        res.send(usersList)
    }
    )
    
    server.get('/users/:id',(req,res)=>{
        let id = req.params.id
        let user = usersList.find((u)=>u.id == id)
        if (user) {
            res.send(user)
        }
        else {
            res.status(420).send('user not found ')
        }
    })
    
    server.post('/create-user',(req,res)=> {
        usersList.push(req.body)
        res.send({message:"user added "})
    }
    )
    
    server.put('/update-user/:id',(req,res)=>{
        let id =req.params.id 
        let userIndex = usersList.findIndex((u)=>u.id == id)
        if(userIndex != -1 ){
            usersList[userIndex].name =req.body.name
            res.send({message : 'userupdated sucessfully'})
        }
        else {
            res.status(420).send('user not found ')
        }
    }
    )
    
    server.delete('remove-user/:id',(req,res)=>{
        let id =req.params.id 
        let userIndex = usersList.findIndex((u)=>u.id == id)
        if(userIndex != -1 ){
            usersList.splice(userIndex,1)
            res.send({message : 'user deleted sucessfully'})
        }
        else {
            res.status(420).send('user not found ')
        }
    
    })
}



