gdjs.Untitled_32scene3Code = {};
gdjs.Untitled_32scene3Code.localVariables = [];
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects1= [];
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects2= [];
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects3= [];
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects4= [];
gdjs.Untitled_32scene3Code.GDAngryPigObjects1= [];
gdjs.Untitled_32scene3Code.GDAngryPigObjects2= [];
gdjs.Untitled_32scene3Code.GDAngryPigObjects3= [];
gdjs.Untitled_32scene3Code.GDAngryPigObjects4= [];
gdjs.Untitled_32scene3Code.GDRadishObjects1= [];
gdjs.Untitled_32scene3Code.GDRadishObjects2= [];
gdjs.Untitled_32scene3Code.GDRadishObjects3= [];
gdjs.Untitled_32scene3Code.GDRadishObjects4= [];
gdjs.Untitled_32scene3Code.GDBox1Objects1= [];
gdjs.Untitled_32scene3Code.GDBox1Objects2= [];
gdjs.Untitled_32scene3Code.GDBox1Objects3= [];
gdjs.Untitled_32scene3Code.GDBox1Objects4= [];
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects1= [];
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects2= [];
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects3= [];
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects4= [];
gdjs.Untitled_32scene3Code.GDFiringCenterObjects1= [];
gdjs.Untitled_32scene3Code.GDFiringCenterObjects2= [];
gdjs.Untitled_32scene3Code.GDFiringCenterObjects3= [];
gdjs.Untitled_32scene3Code.GDFiringCenterObjects4= [];
gdjs.Untitled_32scene3Code.GDLinePainterObjects1= [];
gdjs.Untitled_32scene3Code.GDLinePainterObjects2= [];
gdjs.Untitled_32scene3Code.GDLinePainterObjects3= [];
gdjs.Untitled_32scene3Code.GDLinePainterObjects4= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects3= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects4= [];
gdjs.Untitled_32scene3Code.GDScoreTextObjects1= [];
gdjs.Untitled_32scene3Code.GDScoreTextObjects2= [];
gdjs.Untitled_32scene3Code.GDScoreTextObjects3= [];
gdjs.Untitled_32scene3Code.GDScoreTextObjects4= [];
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects1= [];
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects2= [];
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects3= [];
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects4= [];
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1= [];
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects2= [];
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects3= [];
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects4= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects3= [];
gdjs.Untitled_32scene3Code.GDNewSprite2Objects4= [];
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects1= [];
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects2= [];
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects3= [];
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects4= [];
gdjs.Untitled_32scene3Code.GDKonamiObjects1= [];
gdjs.Untitled_32scene3Code.GDKonamiObjects2= [];
gdjs.Untitled_32scene3Code.GDKonamiObjects3= [];
gdjs.Untitled_32scene3Code.GDKonamiObjects4= [];
gdjs.Untitled_32scene3Code.GDSubKonamiObjects1= [];
gdjs.Untitled_32scene3Code.GDSubKonamiObjects2= [];
gdjs.Untitled_32scene3Code.GDSubKonamiObjects3= [];
gdjs.Untitled_32scene3Code.GDSubKonamiObjects4= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects1= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects2= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects3= [];
gdjs.Untitled_32scene3Code.GDNewSprite3Objects4= [];


gdjs.Untitled_32scene3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("LinePainter"), gdjs.Untitled_32scene3Code.GDLinePainterObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDLinePainterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDLinePainterObjects1[i].drawLineV2((( gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length === 0 ) ? 0 :gdjs.Untitled_32scene3Code.GDAngryPigObjects1[0].getCenterXInScene()), (( gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length === 0 ) ? 0 :gdjs.Untitled_32scene3Code.GDAngryPigObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 5);
}
}}

}


};gdjs.Untitled_32scene3Code.asyncCallback10326500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Konami"), gdjs.Untitled_32scene3Code.GDKonamiObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("SubKonami"), gdjs.Untitled_32scene3Code.GDSubKonamiObjects3);

{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDKonamiObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDKonamiObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDSubKonamiObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDSubKonamiObjects3[i].hide();
}
}gdjs.Untitled_32scene3Code.localVariables.length = 0;
}
gdjs.Untitled_32scene3Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
for (const obj of gdjs.Untitled_32scene3Code.GDKonamiObjects2) asyncObjectsList.addObject("Konami", obj);
for (const obj of gdjs.Untitled_32scene3Code.GDSubKonamiObjects2) asyncObjectsList.addObject("SubKonami", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32scene3Code.asyncCallback10326500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32scene3Code.asyncCallback10325180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.Untitled_32scene3Code.GDGreenDotBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Konami"), gdjs.Untitled_32scene3Code.GDKonamiObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubKonami"), gdjs.Untitled_32scene3Code.GDSubKonamiObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(20);
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDGreenDotBarObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDGreenDotBarObjects2[i].SetMaxValue(20, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDKonamiObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDKonamiObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDSubKonamiObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDSubKonamiObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32scene3Code.localVariables.length = 0;
}
gdjs.Untitled_32scene3Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32scene3Code.asyncCallback10325180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32scene3Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32scene3Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDAngryPigObjects2Objects = Hashtable.newFrom({"AngryPig": gdjs.Untitled_32scene3Code.GDAngryPigObjects2});
gdjs.Untitled_32scene3Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10330212);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDAngryPigObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects3[i].getBehavior("Scale").setScale(1.5);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects3[i].getBehavior("Tween").addObjectScaleTween3("Boing", 1, "bouncePast", 0.5, false, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RespawnTime");
}}

}


};gdjs.Untitled_32scene3Code.asyncCallback10327964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects3);

{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects3[i].getBehavior("Resizable").setHeight(96);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects3[i].getBehavior("Resizable").setWidth(96);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects3[i].activateBehavior("Physics2", false);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "RespawnTime");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32scene3Code.localVariables.length = 0;
}
gdjs.Untitled_32scene3Code.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
for (const obj of gdjs.Untitled_32scene3Code.GDAngryPigObjects2) asyncObjectsList.addObject("AngryPig", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32scene3Code.asyncCallback10327964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32scene3Code.asyncCallback10327500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDAngryPigObjects2Objects, 288, 320, "");
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32scene3Code.localVariables.length = 0;
}
gdjs.Untitled_32scene3Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
for (const obj of gdjs.Untitled_32scene3Code.GDAngryPigObjects1) asyncObjectsList.addObject("AngryPig", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32scene3Code.asyncCallback10327500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDRadishObjects1Objects = Hashtable.newFrom({"Radish": gdjs.Untitled_32scene3Code.GDRadishObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDAngryPigObjects1Objects = Hashtable.newFrom({"AngryPig": gdjs.Untitled_32scene3Code.GDAngryPigObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDAngryPigObjects1Objects = Hashtable.newFrom({"AngryPig": gdjs.Untitled_32scene3Code.GDAngryPigObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDBox1Objects1Objects = Hashtable.newFrom({"Box1": gdjs.Untitled_32scene3Code.GDBox1Objects1});
gdjs.Untitled_32scene3Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10334604);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDAngryPigObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(50);
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Scale").setScale(1.5);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Tween").addObjectScaleTween3("Boing", 1, "bouncePast", 0.5, false, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RespawnTime");
}}

}


};gdjs.Untitled_32scene3Code.mapOfEmptyGDRadishObjects = Hashtable.newFrom({"Radish": []});
gdjs.Untitled_32scene3Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("FiringCenter"), gdjs.Untitled_32scene3Code.GDFiringCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Konami"), gdjs.Untitled_32scene3Code.GDKonamiObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubKonami"), gdjs.Untitled_32scene3Code.GDSubKonamiObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDFiringCenterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDFiringCenterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDSubKonamiObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDSubKonamiObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDKonamiObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDKonamiObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("FiringCenter"), gdjs.Untitled_32scene3Code.GDFiringCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32scene3Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDFiringCenterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDFiringCenterObjects1[i].setPosition((( gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length === 0 ) ? 0 :gdjs.Untitled_32scene3Code.GDAngryPigObjects1[0].getCenterXInScene()),(( gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length === 0 ) ? 0 :gdjs.Untitled_32scene3Code.GDAngryPigObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDScoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDFiringCenterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDFiringCenterObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Resizable").setHeight(96);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Resizable").setWidth(96);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32scene3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10669596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("FiringCenter"), gdjs.Untitled_32scene3Code.GDFiringCenterObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Physics2").applyPolarForce((( gdjs.Untitled_32scene3Code.GDFiringCenterObjects1.length === 0 ) ? 0 :gdjs.Untitled_32scene3Code.GDFiringCenterObjects1[0].getAngle()) + 180, gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getCenterXInScene()), (gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getCenterYInScene())), (gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getCenterXInScene()), (gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Physics2").applyTorque(gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getCenterXInScene()), (gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getCenterYInScene())) / 20);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RespawnTime");
}{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDAngryPigObjects1[k] = gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10668708);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Are you sure you want to \n''KONAMI''?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RespawnTime") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10327260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Radish"), gdjs.Untitled_32scene3Code.GDRadishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDRadishObjects1Objects, "Physics2", gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDAngryPigObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDRadishObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDRadishObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDRadishObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AngryPig"), gdjs.Untitled_32scene3Code.GDAngryPigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Box1"), gdjs.Untitled_32scene3Code.GDBox1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDAngryPigObjects1Objects, "Physics2", gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDBox1Objects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i].getBehavior("Physics2").getLinearVelocityLength() > 200 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDAngryPigObjects1[k] = gdjs.Untitled_32scene3Code.GDAngryPigObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDBox1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDBox1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDBox1Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene3Code.mapOfEmptyGDRadishObjects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects4.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects4.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects4.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects4.length = 0;

gdjs.Untitled_32scene3Code.eventsList8(runtimeScene);
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDBrownBackgroundObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDAngryPigObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDRadishObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDBox1Objects4.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDFallingPlatformObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDFiringCenterObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDLinePainterObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDScoreTextObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewResourceBarObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBarObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite2Objects4.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDGreenDotBar2Objects4.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDKonamiObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects3.length = 0;
gdjs.Untitled_32scene3Code.GDSubKonamiObjects4.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects3.length = 0;
gdjs.Untitled_32scene3Code.GDNewSprite3Objects4.length = 0;


return;

}

gdjs['Untitled_32scene3Code'] = gdjs.Untitled_32scene3Code;
