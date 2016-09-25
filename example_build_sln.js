var _msbuild = require('msbuild');
var msbuild = new _msbuild(); 


msbuild.sourcePath = '_CSharp/CSharp2015.sln';


msbuild.build();