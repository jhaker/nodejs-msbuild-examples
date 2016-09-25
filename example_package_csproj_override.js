var _msbuild = require('msbuild');
var msbuild = new _msbuild(); 


msbuild.sourcePath = '_CSharp/CSharp2015/CSharp2015.csproj';
msbuild.overrideParams.push('/p:outputPath=../../package/packageoverride' + Math.floor(Date.now() / 1000));


msbuild.package();

