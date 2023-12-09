const fs = require('fs');


(function Lib() {

    function first() {


        // as per the lifecycle machanism the settimeout will run after the funciton execution
        setTimeout(() => console.log('Timer'), 0)
        console.log('First')
        second()

        setImmediate(() => console.log('immediate'))

    }
    function second() {
        console.log('Second')
        third()
    }
    function third() {

        //after the normal synchronous task the process,nextTick wil executing
        process.nextTick(() => console.log('Tick!'), 0)

        console.log('Third')
        // console.trace()
    }

    // first()
    fs.readFile('./doc.txt', first)

    /*in the File I/O operation the immediateTimer will execure first 
     before the setTimeout
     so the outpur will be:
    First
    Second
    Third
    Tick!
    immediate
    Timer*/

})()
