var _msbuild = require('msbuild');
var msbuild = new _msbuild(); 

msbuild.sourcePath = '_CSharp/CSharp2015/CSharp2015.csproj';
msbuild.overrideParams.push('/target:package');
msbuild.overrideParams.push('/p:VisualStudioVersion=14.0');

	
msbuild.build();