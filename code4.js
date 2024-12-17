gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDNewSpriteObjects1= [];
gdjs.EndCode.GDNewSpriteObjects2= [];
gdjs.EndCode.GDNewSprite2Objects1= [];
gdjs.EndCode.GDNewSprite2Objects2= [];
gdjs.EndCode.GDNewSprite3Objects1= [];
gdjs.EndCode.GDNewSprite3Objects2= [];


gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.EndCode.GDNewSprite2Objects1});
gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.EndCode.GDNewSprite2Objects1});
gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.EndCode.GDNewSprite3Objects1});
gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.EndCode.GDNewSprite3Objects1});
gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.EndCode.GDNewSprite3Objects1});
gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.EndCode.GDNewSprite2Objects1});
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.EndCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10074388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.EndCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.EndCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Highlight Exit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.EndCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10061468);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.EndCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.EndCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("Exit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.EndCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10854980);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.EndCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.EndCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Play Again");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.EndCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10932804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.EndCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.EndCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Highlight Play Again");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.EndCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.EndCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_9546EndCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDNewSprite2Objects1.length = 0;
gdjs.EndCode.GDNewSprite2Objects2.length = 0;
gdjs.EndCode.GDNewSprite3Objects1.length = 0;
gdjs.EndCode.GDNewSprite3Objects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDNewSprite2Objects1.length = 0;
gdjs.EndCode.GDNewSprite2Objects2.length = 0;
gdjs.EndCode.GDNewSprite3Objects1.length = 0;
gdjs.EndCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
