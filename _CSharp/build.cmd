@echo off
cd %~dp0

echo restoring nuget packages
set EnableNuGetPackageRestore=true
nuget\NuGet.exe restore
goto part3


