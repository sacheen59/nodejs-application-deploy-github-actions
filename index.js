import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.json({
    msg: "hello from the scratch",
    detail: "This is github actions details."
  });
});

app.get("/testing", (req, res) => {
    return res.json({
        msg: "Hello this is testing",
        detail: "I am testing github actions. and it is successfully done."
    })
})

app.get("/new",(req,res) => {
    return res.json({
        msg: "This is testing with new branch",
        detail: "testing github actions with new branch and seeing the merge concept."
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT ${PORT} `)
})
