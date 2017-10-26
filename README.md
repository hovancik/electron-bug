# tray tooltip wont get updated/visible after `app.hide()` on macOS
To replicate: start app and watch the tray tooltip. Windows are opened and closed automatically (every 20 seconds we show window for 5 seconds).

## app life cycle
1. start app and set tooltip - it is shown correctly
2. start timer to update tooltip every second
3. open app window - tooltip is shown correctly
4. close the window and do `app.hide()` to get focus on last used app
5. update tooltip - it is not shown

If we skip 4, everything works fine.  
