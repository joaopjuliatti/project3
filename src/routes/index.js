module.exports = app =>{
    app.use('/auth',require('./auth'))
    app.use('/farm',require('./farm'))
}