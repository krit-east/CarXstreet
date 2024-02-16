@echo off
@REM random title name

title TOOL FOR DISCORDJS - %USERNAME% - %RANDOM% 


:menu
cls
echo.
echo 1. Install
echo 2. Run Bot
echo 3. Exit
echo.

                              

echo.       _  _  __    __  ____  ____    __  ____  ____ 
echo.      ( \/ )/  \ _(  )( __ \( __ \ _(  )( __ \(  _ \
echo. ____  )  ((_/ // \) \ (__ ( (__ (/ \) \ (__ ( )   /
echo. (____)(_/\_)(__)\____/(____/(____/\____/(____/(__\_)
echo.
color 7

set /p menu=Choose an option (1-3):

if %menu%==1 goto install
if %menu%==2 goto run
if %menu%==3 goto exit

:install
cls
echo.
echo Installing...
echo.
npm install
echo.
echo Done!
echo.
pause
goto menu

:run
cls
echo.
@REM echo Running... color

@REM color
@REM color 0a
echo Running...
echo.
node app.js
echo.
pause

:exit
exit
