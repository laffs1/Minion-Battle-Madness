gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewSprite2Objects1= [];
gdjs.StartCode.GDNewSprite2Objects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartCode.GDNewSprite2Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartCode.GDNewSprite2Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartCode.GDNewSprite2Objects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(7987596);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.StartCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("NewSprite2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9200572);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.StartCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationName("first");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
