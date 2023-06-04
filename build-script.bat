@echo off

rem if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )
setlocal enabledelayedexpansion

echo 1. Rebuild slider
for %%a in (./public/slider/main/*) do (
	call set "t1=%%t1%%, "%%a""
)
SET main_files=[%t1:~2%]
echo %main_files% > ./src/assets/fake-data/main_slide.json

for %%a in (./public/slider/sub/*) do (
	call set "t2=%%t2%%, "%%a""
)
SET sub_files=[%t2:~2%]
echo %sub_files% > ./src/assets/fake-data/sub_slide.json

echo 2. Build product
npm run build -- --production


echo 3. Deploy
PAUSE