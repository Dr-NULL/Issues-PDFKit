@echo off
echo --- Wipe working Area ---
echo.

::Limpiar Área de Distribución
echo - Cleaning Working Area...
rmdir /q /s "node_modules"
rmdir /q /s "dist"
md "dist"
cls

::Finalizar
echo.
echo Done!
exit