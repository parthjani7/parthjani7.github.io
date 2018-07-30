//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var Manifest = [
        { id: "background", src: "/Assets/images/background/image1.png" },
        { id: "PlayButton", src: "/Assets/images/buttons/play.png" },
        { id: "SettingButton", src: "/Assets/images/buttons/setting.png" },
        { id: "InstructionButton", src: "/Assets/images/buttons/question.png" },
        { id: "AboutButton", src: "/Assets/images/buttons/info.png" },
        { id: "ExitButton", src: "/Assets/images/buttons/close.png" },
        { id: "BackButton", src: "/Assets/images/buttons/back.png" },
        { id: "SoundOnButton", src: "/Assets/images/buttons/sound_on.png" },
        { id: "SoundOffButton", src: "/Assets/images/buttons/sound_off.png" },
        { id: "PauseButton", src: "/Assets/images/buttons/pause.png" },
        { id: "bird", src: "/Assets/images/characters/bird3.png" },
        { id: "tank", src: "/Assets/images/characters/tank.jpg" },
        { id: "tank_small", src: "/Assets/images/characters/tank_small.png" },
        { id: "bullet", src: "/Assets/images/bullet.png" },
        { id: "button_click", src: "/Assets/audio/button_click.mp3" },
        { id: "mouseover", src: "/Assets/audio/mouseover1.mp3" },
        { id: "menu_background", src: "/Assets/audio/instruction_background.wav" },
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage;
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Scene Switching...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.SETTING:
                CurrentScene = new scenes.Setting();
                break;
            case config.Scene.INSTRUCTION:
                CurrentScene = new scenes.Instruction();
                break;
            case config.Scene.ABOUT:
                CurrentScene = new scenes.About();
                break;
            case config.Scene.QUIT:
                CurrentScene = new scenes.Quit();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map