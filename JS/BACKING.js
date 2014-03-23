var indexXPlaneCopy = [];
indexXPlaneCopy = XPlane.indexBuffer.slice(0);						 // copies into another array
var n = 0; var count = 0;									 // n is the index of new Xplane
XPlane.vertexBuffer.push(vertexList[XPlane.indexBuffer[0]]); indexXPlaneCopy[n] = n; n++;
XPlane.vertexBuffer.push(vertexList[XPlane.indexBuffer[1]]); indexXPlaneCopy[n] = n; n++;
XPlane.vertexBuffer.push(vertexList[XPlane.indexBuffer[2]]); indexXPlaneCopy[n] = n; n++;

for (var i = 4; i < XPlane.indexBuffer.length; i++){
	for (var k = 0; k < i; k++){
		if (XPlane.indexBuffer[i] == XPlane.indexBuffer[k]){
			indexXPlaneCopy[i] = indexXPlaneCopy[k];
			break;
		}
	}
	var count = 0;
	for (var k = 0; k < i; k++){
		if (XPlane.indexBuffer[i] != XPlane.indexBuffer[k]){
			count++;
		}
	}
	if (count == k){
		Xplane.vertexBuffer.push(vertexList[ XPlane.indexBuffer[i] ])
		indexXPlaneCopy[i] = n; n++;
	}
}

meshN = initMesh();
meshN = ListToMesh(XPlane.faceNormalBuffer, indexXPlaneCopy, XPlane.vertexBuffer);
meshN.init();

function Test(){
	newScene(meshN);
}