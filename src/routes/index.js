module.exports = app =>{
    app.use('/auth',require('./auth'))
    app.use('/farm',require('./farm'))
    app.use('/animal',require('./animal'))
    app.use('/animal-history',require('./animalHistory'))
    app.use('/flow-type',require('./flowType'))
    app.use('/cash-flow',require('./cashFlow'))
}