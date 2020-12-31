const   express     = require("express"),
        Blog        = require("../models/blogModel"),
        router      = express.Router();

// let data = [
//     {
//         postTitle:"Blog Denemesi",
//         postSubtitle:"Bakalım neler olacak",
//         image:"https://images.unsplash.com/photo-1609008804651-1305d9ebd21d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//     },{
//         postTitle:"Deneme 2",
//         postSubtitle:"neler olacak neler",
//         image:"https://images.unsplash.com/photo-1609005071056-62ded34d6f27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
//     },{
//         postTitle:"Deneme 3",
//         postSubtitle:"İçerik 3",
//         image:"https://images.unsplash.com/photo-1609040033322-d28eb03590cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80"
//     }
// ]


router.get("/",(req, res)=>{
    Blog.find({},(err,foundBlogs)=>{
        if (err){
            console.log("====================== ERROR ERROR ERROR =======================");
            console.log(err);
        }else {
            console.log("====================== ALL BLOGS =======================");
            console.log(foundBlogs);
            res.render("home",{foundBlogs:foundBlogs});
        }
    });
});
router.get("/about",(req, res)=>{
    res.render("about");
});
router.get("/contact",(req, res)=>{
    res.render("contact")
});
router.get("/resume",(req, res)=>{
    res.render("resume")
});

module.exports = router;