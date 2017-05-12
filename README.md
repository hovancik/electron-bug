## tray tooltip wont get updated/visible after `app.hide()` on macOS

1. start app set tooltip - it is shown correctly
2. update tooltip every 10 seconds
3. open app window - tooltip is shown correctly
4. close the window and do `app.hide()` to get focus on last used app
5. update tooltip - it is not shown

If we skip 4, everything works fine.
