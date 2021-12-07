PennController.ResetPrefix(); 
PennController.DebugOff();
var showProgressBar = false;

PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/MS/RatTask.zip");
CheckPreloaded("Check")

Sequence("Check", "TaskInstructions", "Preview", randomize("RatTask"))

newTrial("TaskInstructions",
    newHtml("TaskInstructions", "TaskInstructions.html")
        .center()
        .log()
        .cssContainer({"width":"720px"})
        .print()
    ,
    newButton("continue", "Start the experiment")
        .center()
        .print()
        .wait()
    ,
    clear()
    ,
    newText("Ready?").css("font-size", "5vh")
        .print("center at 50%" , "middle at 50%")
    ,
    newTimer(1000)
        .start()
        .wait()
    ,
    fullscreen()
    )

newTrial("Preview", 
        newImage("Rat", "rat.png")
            .size("35vw", "30vh")
            .print("center at 25%", "middle at 25%")
        ,
        newImage("Pig", "pig.png")
            .size("25vw", "20vh")
            .print("center at 75%", "middle at 25%")
        ,
        newImage("Goat", "goat.png")
            .size("25vw", "20vh")
            .print("center at 25%", "middle at 75%")
        ,
        newImage("Duck", "duck.png")
            .size("30vw", "25vh")
            .print("center at 75%", "middle at 75%")
        ,
        newTimer(2000)
            .start()
            .wait()
    )

PennController.Template("Rattask_trials.csv",
    row => newTrial("RatTask", 
        newImage("Rat", "rat.png")
            .size("35vw", "30vh")
            .print("center at 25%", "middle at 25%")
        ,
        newImage("Pig", "pig.png")
            .size("25vw", "20vh")
            .print("center at 75%", "middle at 25%")
        ,
        newImage("Goat", "goat.png")
            .size("25vw", "20vh")
            .print("center at 25%", "middle at 75%")
        ,
        newImage("Duck", "duck.png")
            .size("30vw", "25vh")
            .print("center at 75%", "middle at 75%")
        ,
        newImage("FixCircle", "Circle_Blue.png")
            .size("5vw", "5vw")
            .print("center at 50%", "middle at 50%")
        ,
        newTimer(1500)
            .start()
            .wait()
        ,
        getImage("Rat").visible()
        ,
        getImage("Pig").visible()
        ,
        getImage("Goat").visible()
        ,
        getImage("Duck").visible()
        ,
        newAudio("Preamble", "look_at_the1.wav")
            .play()
            .wait()
        ,
        newTimer(200)
            .start()
            .wait()
        ,
        newAudio("Target", row.Audio)
            .play()
            .wait()
        ,
        newTimer(750)
            .start()
            .wait()
        ,
        newAudio("SoundFx", row.Fx)
            .play()
            .wait()
        ,
        newTimer(500)
            .start()
            .wait()
        ,
        getImage("FixCircle").hidden()
        ,
        newTimer(500)
            .start()
            .wait()
        )
    )
