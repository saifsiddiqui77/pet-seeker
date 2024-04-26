const express = require("express");
const app =  express();
const port = 5000;


app.listen(port,()=>{
console.log(`app running in ${port}`)
});


app.get("/login",(req,res)=>{
res.status(200)
res.send("your on login route")
console.log("/login")

})


app.get("/signIn",(req,res)=>{
   res.status(200)
   res.send("your on signIn route")
   console.log("/signIn")
   
   })

 app.get("/search",(req,res)=>{
   res.status(200)
   res.send("your on search route")
   console.log("/search")
   
   })



   app.get("/search/dogs",(req,res)=>{
      res.status(200)
      res.send("your on searching dog route")
      console.log("/search/dogs")
      
      })


      app.get("/search/dogs/:id",(req,res)=>{
         res.status(200)
         const id = req.params.id;
         res.send(`dog : ${id}`);
         console.log(req)
         
         })
      
         app.get("/search/cats",(req,res)=>{
            res.status(200)
            res.send("your on searching cats route")
            console.log("/search/cats")
            
            })
      
      
            app.get("/search/cats/:id",(req,res)=>{
               res.status(200)
               const id = req.params.id;
               res.send(`cat : ${id}`);
               console.log(req)
               
               })
   


               app.get("/search/birds",(req,res)=>{
                  res.status(200)
                  res.send("your on searching bird route")
                  console.log("/search/birds")
                  
                  })
            
            
                  app.get("/search/birds/:id",(req,res)=>{
                     res.status(200)
                     const id = req.params.id;
                     res.send(`bird : ${id}`);
                     console.log(req)
                     
                     })   
       
                     
app.get("/adopt",(req,res)=>{
  res.status(200)
 res.send("your on adopt route")
console.log("/adopt")
                        
})
                  
                              

app.get("/donate",(req,res)=>{
   res.status(200)
  res.send("your on donate route")
 console.log("/donate")
                         
 })

 app.get("/rehome",(req,res)=>{
   res.status(200)
  res.send("your on rehome route")
 console.log("/rehome")
                         
 })


 app.get("/quiz",(req,res)=>{
   res.status(200)
  res.send("your on quiz route")
 console.log("/quiz")
                         
 })

 app.get("/article",(req,res)=>{
   res.status(200)
  res.send("your on article route")
 console.log("/article")
                         
 })


 app.get("/article/dogs",(req,res)=>{
   res.status(200)
  res.send("your on article of dogs route")
 console.log("/article/dogs")
                         
 })

 app.get("/article/cats",(req,res)=>{
   res.status(200)
  res.send("your on article of cats route")
 console.log("/article/cats")
                         
 })

 app.get("/Journey_video",(req,res)=>{
  res.status(200)
 res.send("your on journery video route")
console.log("/journeyr_video")
                        
})



 

app.use(express.json());

let pets = {
  animals: [
    {
      animalId: 1,
      species: "Dog",
      breed: "Labrador Retriever",
      age: 2,
      color: "Golden",
      shelter: "Pet Haven",
      available: true,
      adopted: false,
    },
    {
      animalId: 2,
      species: "Cat",
      breed: "Siamese",
      age: 1,
      color: "Cream",
      shelter: "Paws Rescue",
      available: true,
      adopted: false,
    },
    {
      animalId: 3,
      species: "Rabbit",
      breed: "Holland Lop",
      age: 0.5,
      color: "White",
      shelter: "Bunny Paradise",
      available: true,
      adopted: false,
    },
    {
      animalId: 4,
      species: "Parrot",
      breed: "African Grey",
      age: 3,
      color: "Grey",
      shelter: "Feathered Friends",
      available: true,
      adopted: false,
    },
  ],
};

// GET - List all animals
app.get("/animals", (req, res) => {
  res.json(pets.animals);
});

// GET - Details of a specific animal by ID
app.get("/animals/:animalId", (req, res) => {
  const animal = pets.animals.find(
    (a) => a.animalId === parseInt(req.params.animalId)
  );
  if (animal) {
    res.json(animal);
  } else {
    res.status(404).send("Animal not found");
  }
});

// POST - Add a new animal
app.post("/animals", (req, res) => {
  const newAnimal = req.body;
  pets.animals.push(newAnimal);
  res.send("Animal added");
});

app.post("/login", (req, res) => {
  const newAnimal = req.body;
  pets.animals.push(newAnimal);
  res.send("user added");
});

app.post("/adopt", (req, res) => {
  const newAnimal = req.body;
  pets.animals.push(newAnimal);
  res.send("user for adopt added");
});

app.post("/rehome", (req, res) => {
  const newAnimal = req.body;
  pets.animals.push(newAnimal);
  res.send("user for rehome added");
});


// PUT - Modify information of an animal by ID
app.put("/animals/:animalId", (req, res) => {
  const animalIdToUpdate = parseInt(req.params.animalId);
  const index = pets.animals.findIndex(
    (a) => a.animalId === animalIdToUpdate
  );
  if (index !== -1) {
    pets.animals[index] = {
      ...pets.animals[index],
      ...req.body,
    };
    res.send("Animal updated");
  } else {
    res.status(404).send("Animal not found");
  }
});
// PATCH - Update information of an animal by ID
app.patch("/animals/:animalId", (req, res) => {
  const animalIdToUpdate = parseInt(req.params.animalId);
  const index = pets.animals.findIndex(
    (a) => a.animalId === animalIdToUpdate
  );
  if (index !== -1) {
    pets.animals[index] = {
      ...pets.animals[index],
      ...req.body,
    };
    res.send("Animal updated");
  } else {
    res.status(404).send("Animal not found");
  }
});

// DELETE - Remove an animal by ID
app.delete("/animals/:animalId", (req, res) => {
  const animalIdToDelete = parseInt(req.params.animalId);
  const index = pets.animals.findIndex(
    (a) => a.animalId === animalIdToDelete
  );
  if (index !== -1) {
    pets.animals.splice(index, 1);
    res.send(`Animal with ID ${animalIdToDelete} deleted`);
  } else {
    res.status(404).send("Animal not found");
  }
});

app.get("/*", (req, res) => {
  res.send("You are on the wrong route. Here's the list of possible routes");
});

