echo f |  xcopy /y   ..\..\privacypolicy.html content\privacypolicy.html.pp 
NuGet.exe pack privacypolicy.nuspec -exclude *.cmd -OutputDirectory ..\