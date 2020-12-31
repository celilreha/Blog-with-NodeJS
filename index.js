const   mongoose        = require("mongoose"),
        express         = require("express"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        expressSession  = require("express-session"),
        User           = require("./models/userModel"),
        bodyParser      = require("body-parser"),
        app             = express();

//Routes
const   indexRoutes = require("./routes/indexRoutes"),
        blogRoutes = require("./routes/blogRoutes"),
        adminRoutes = require("./routes/adminRoutes");

//App Config
mongoose.connect("mongodb://localhost/BlogApp")
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//Passport Config
app.use(require("express-session")({
    secret:"bu bir güvenlik cümlesidir",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Share current user info
app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    next();
});

//Routes Using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);
const server = app.listen(3000,(err)=>{
    if(err)
        console.log(err);
    console.log("App started. Port number: %d",server.address().port);
});
