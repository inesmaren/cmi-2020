function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("tamacun",true);
VideoSetVolume("cocco",0);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();


}

function audio_OnClick(){
StackTrace="audio.On Click";
GotoSceneNameAndPlay("escena audio",0);
SoundPlay("plop",false);

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.On Click";
VideoPause("cocco");
SoundPlay("plop",false);

}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.On Release";
VideoResume("cocco");
SoundPlay("plop",false);

}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.On Click";
VideoSetVolume("cocco",100);
SoundPlay("plop",false);

}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.On Release";
VideoSetVolume("cocco",0);
SoundPlay("plop",false);

}

function error_OnClick(){
StackTrace="error.On Click";
VideoGetPosition("cocco");

}

function Button2_OnClick(){
StackTrace="Button2.On Click";
GotoSceneNameAndPlay("escena video",0);
SoundPlay("plop",false);

}

function play_OnClick(){
StackTrace="play.On Click";
SoundPause("tamacun");
SoundPlay("plop",false);

}

function play_OnRelease(){
StackTrace="play.On Release";
SoundResume("tamacun");
SoundPlay("plop",false);

}

